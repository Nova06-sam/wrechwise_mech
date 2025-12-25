// App.jsx
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import './certificate.css';
import CertificatePreview, { normalizeExcelData } from "./preview/CertificatePreview";

const ACCEPT_IMAGES = ".png,.jpg,.jpeg";
const RBOXES_INIT = {
  name: { x: 120 / 1248, w: 940 / 1248, h: 60 / 873, baselineY: 410 / 873, align: "center" },
  level: { x: 920 / 1248, y: 265 / 873, w: 180 / 1248, h: 48 / 873, align: "right", fontSize: 32 },
  awardedOn: { x: 110 / 1248, w: 340 / 1248, h: 44 / 873, baselineY: 682 / 873, align: "left", fontSize: 24, baselinePad: 4 },
  duration: { x: 110 / 1248, w: 340 / 1248, h: 44 / 873, baselineY: 730 / 873, align: "left", fontSize: 24, baselinePad: 4 },
  signatory: { x: 0.635, w: 0.26, h: 0.06, baselineY: 0.905, align: "center", fontSize: 28, baselinePad: 3 },
  masks: [{ x: 0.73, y: 0.9, w: 0.12, h: 0.055, color: "#ffffff" }],
};

export default function CretificationMain() {
  const [rows, setRows] = useState([]);
  const [i, setI] = useState(0);
  const [bgUrl, setBgUrl] = useState(null);
  const [boxes, setBoxes] = useState(RBOXES_INIT);
  const [status, setStatus] = useState("");
  const cleanPreview = rows.length ? normalizeExcelData(rows[i] || {}) : null;

  /* ---------------- Fetch Google Sheet Data ---------------- */
  const fetchGoogleSheet = async () => {
    try {
      setStatus("Fetching data from Google Sheet...");
      const SHEET_URL =
        "https://script.google.com/macros/s/AKfycbyQNvX9CJfegjGt0Rly5xJqzta1-bEgQW-5SVCZB3rt66SkALmVWn14Kp-aigc6ttD0gg/exec";
      const response = await fetch(SHEET_URL);
      const data = await response.json();
      if (!Array.isArray(data) || data.length === 0) {
        setStatus("No data found in sheet.");
        setRows([]);
        return;
      }
      const mapped = data.map((r) => ({
        Name: r["Name"] || "",
        AwardedOn: r["Awarded On"] || r["Date"] || "",
        Duration: r["Duration"] || "",
        SignatoryName: r["SignatoryName"] || r["Signatory"] || r["Authorizer"] || r["CEO"] || "",
        Email: r["Email"] || r["E-mail"] || r["Email Address"] || r["email"] || "",
      }));
      const filtered = mapped.filter((r) => String(r.Name || "").trim().length > 0);
      setRows(filtered);
      setI(0);
      setStatus(`Loaded ${filtered.length} rows from Google Sheet.`);
    } catch (err) {
      console.error(err);
      setStatus("Failed to fetch Google Sheet data.");
    }
  };

  /* ---------------- Template image upload ---------------- */
  const onImage = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (bgUrl) URL.revokeObjectURL(bgUrl);
    setBgUrl(URL.createObjectURL(file));
  };

  /* ---------------- Capture refs & state ---------------- */
  const capRefPreview = useRef(null);
  const capRefOff = useRef(null);
  const [capData, setCapData] = useState(null);

  const sanitize = (s = "") => String(s).replace(/[^\w\-(). ]+/g, "").trim() || "certificate";
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  /* ---------------- APPS SCRIPT ENDPOINT (update this) ---------------- */
  // AFTER you deploy Apps Script, replace with the web app URL (your real URL)
  const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyQNvX9CJfegjGt0Rly5xJqzta1-bEgQW-5SVCZB3rt66SkALmVWn14Kp-aigc6ttD0gg/exec";

  // --- sendZipToServer (simple text request to avoid CORS preflight) ---
  async function sendZipToServer({ zipBase64, filename, email, extra = {} }) {
    const payloadJson = JSON.stringify({ filename, email, zipBase64, extra });

    const res = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=UTF-8" }, // avoid preflight
      body: payloadJson,
    });

    const text = await res.text();
    let json;
    try {
      json = JSON.parse(text);
    } catch (err) {
      throw new Error("Invalid server response: " + text);
    }

    if (!res.ok || !json || !json.success) {
      throw new Error("Server error: " + (json?.error || JSON.stringify(json)));
    }
    return json;
  }

  /* ---------------- generate & send (upload-first, download-after-success) ---------------- */
  const generateAndSend = async () => {
    setStatus("");
    if (!bgUrl || rows.length === 0) return;

    for (let idx = 0; idx < rows.length; idx++) {
      try {
        setStatus(`Preparing ${idx + 1} / ${rows.length}...`);

        const data = normalizeExcelData(rows[idx] || {});
        setCapData(data);
        await sleep(120);

        const recipientEmail = (rows[idx].Email || rows[idx].email || "").toString().trim();
        if (!recipientEmail) {
          setStatus(`Row ${idx + 1}: missing email — skipped.`);
          continue;
        }

        const extra = { rowIndex: idx + 2, name: data.Name };

        const node = capRefOff.current || capRefPreview.current;
        if (!node) {
          console.warn("No capture node for row", idx);
          continue;
        }

        setStatus(`Rendering certificate for ${data.Name}...`);
        const canvas = await html2canvas(node, { backgroundColor: null, scale: 2, useCORS: true });
        const imgBlob = await new Promise((res) => canvas.toBlob(res, "image/png", 1.0));
        if (!imgBlob) {
          setStatus(`Row ${idx + 1}: rendering failed.`);
          continue;
        }

        const zip = new JSZip();
        const imageName = `${String(idx + 1).padStart(3, "0")}-${sanitize(data.Name)}.png`;
        zip.file(imageName, imgBlob);

        // generate base64 for upload, and a blob for local download (but DO NOT download now)
        const zipBase64 = await zip.generateAsync({ type: "base64" });
        const zipBlob = await zip.generateAsync({ type: "blob" });
        const zipName = `${String(idx + 1).padStart(3, "0")}-${sanitize(data.Name)}.zip`;

        // Upload/send first
        setStatus(`Uploading & emailing ${data.Name}...`);
        let serverResp;
        try {
          serverResp = await sendZipToServer({
            zipBase64,
            filename: zipName,
            email: recipientEmail,
            extra,
          });
        } catch (err) {
          console.error("Failed to send zip for", zipName, err);
          setStatus(`Row ${idx + 1}: failed to send — ${err.message}`);
          continue; // do not download on failure
        }

        // If server says sent → download locally; if skipped → don't download
        if (serverResp.status && serverResp.status.startsWith("sent")) {
          try {
            saveAs(zipBlob, zipName);
          } catch (dlErr) {
            console.warn("Local download failed for", zipName, dlErr);
          }
          setStatus(`Row ${idx + 1}: Sent & downloaded (${data.Name}).`);
        } else if (serverResp.status && serverResp.status.startsWith("skipped")) {
          setStatus(`Row ${idx + 1}: already sent — skipped download.`);
        } else {
          setStatus(`Row ${idx + 1}: server returned: ${JSON.stringify(serverResp)}`);
        }

        await sleep(600);
      } catch (err) {
        console.error("Error processing row", idx, err);
        setStatus("Error while processing — check console.");
      }
    }

    setStatus("Processing complete.");
  };

  const canGenerate = !!bgUrl && rows.length > 0;

  /* ---------------- rest of UI code (unchanged) ---------------- */
  const setFont = (key, value) => {
    setBoxes((b) => ({
      ...b,
      [key]: {
        ...b[key],
        fontSize: value === "" ? undefined : Math.max(6, Number(value)) || undefined,
      },
    }));
  };
  const clearFont = (key) =>
    setBoxes((b) => ({
      ...b,
      [key]: { ...b[key], fontSize: undefined },
    }));
  const clamp01 = (v) => Math.max(0, Math.min(1, v));
  const STEP = 0.002;
  const nudge = (key, dir) => {
    setBoxes((prev) => {
      const box = { ...prev[key] };
      if (dir === "left") box.x = clamp01((box.x ?? 0) - STEP);
      if (dir === "right") box.x = clamp01((box.x ?? 0) + STEP);
      if (dir === "up")
        "baselineY" in box
          ? (box.baselineY = clamp01((box.baselineY ?? 0) - STEP))
          : (box.y = clamp01((box.y ?? 0) - STEP));
      if (dir === "down")
        "baselineY" in box
          ? (box.baselineY = clamp01((box.baselineY ?? 0) + STEP))
          : (box.y = clamp01((box.y ?? 0) + STEP));
      return { ...prev, [key]: box };
    });
  };
  const NudgeButtons = ({ k }) => (
    <span className="nudge">
      <button type="button" className="chip" onClick={() => nudge(k, "left")}>◀</button>
      <button type="button" className="chip" onClick={() => nudge(k, "right")}>▶</button>
      <button type="button" className="chip" onClick={() => nudge(k, "up")}>▲</button>
      <button type="button" className="chip" onClick={() => nudge(k, "down")}>▼</button>
    </span>
  );

  const BASE_W = 1248;
  const previewShellRef = useRef(null);
  const [scale, setScale] = useState(1);
  useLayoutEffect(() => {
    if (!previewShellRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const cw = entry.contentRect.width;
      const next = Math.min(1, cw / BASE_W);
      setScale(next);
    });
    ro.observe(previewShellRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      :root { --brand-blue:#1368C4; --brand-green:#16A34A; --ink:#0B1220; --muted:#6B7280; --card:#FFFFFF; --bg:#F5F7FB; }
      body { background:var(--bg); color:var(--ink); }
      .container { max-width:1150px; margin:28px auto; padding:0 16px; }
      .hero { background:linear-gradient(90deg,var(--brand-blue),var(--brand-green)); color:#fff; padding:18px; border-radius:16px; display:flex; justify-content:space-between; align-items:center; }
      .pill { background:rgba(255,255,255,.15); padding:8px 12px; border-radius:999px; }
      .card { background:white; padding:18px; border-radius:16px; box-shadow:0 8px 24px rgba(11,18,32,.06); margin-top:16px; }
      label strong { min-width:180px; display:inline-block; }
      input, select { padding:10px; border-radius:12px; border:1px solid #E5E7EB; }
      .btn { background:linear-gradient(90deg,var(--brand-blue),var(--brand-green)); padding:12px 16px; color:white; border-radius:12px; border:none; cursor:pointer; }
      .muted { color:var(--muted); }
      .previewShell { display:grid; place-items:center; width:100%; padding:10px; }
      .previewScaler { transform-origin:top center; }
      .offscreen { position:absolute; left:-99999px; top:0; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="container">
      <div className="hero">
        <h1>WrenchWise Certificate Generator</h1>
        <span className="pill">Brand • Blue & Green</span>
      </div>

      <div className="card">
        <div className="grid">
          <label className="row">
            <strong>Upload certificate image</strong>
            <input type="file" accept={ACCEPT_IMAGES} onChange={onImage} />
          </label>

          <label className="row">
            <strong>Fetch Google Sheet Data</strong>
            <button type="button" className="btn" onClick={fetchGoogleSheet}>Load from Google Sheet</button>
          </label>

          <div className="row muted" style={{ gap: 16 }}>
            <span>Image: <b>{bgUrl ? "Loaded" : "Not loaded"}</b></span>
            <span>Rows: <b>{rows.length}</b></span>

            {rows.length > 1 && (
              <label className="row" style={{ gap: 8 }}>
                <span className="muted">Preview row</span>
                <select value={i} onChange={(e) => setI(parseInt(e.target.value, 10))}>
                  {rows.map((_, idx) => <option key={idx} value={idx}>{idx + 1}</option>)}
                </select>
              </label>
            )}
          </div>

          <div className="grid" style={{ gap: 8 }}>
            <strong>Font sizes (px). Leave blank for Auto-Fit.</strong>
            <div className="row" style={{ flexDirection: "column", gap: 10 }}>
              {[
                ["name", "Name"],
                ["level", "Level"],
                ["awardedOn", "Awarded On"],
                ["duration", "Duration"],
                ["signatory", "Signatory"],
              ].map(([key, label]) => (
                <label key={key} className="row" style={{ justifyContent: "space-between" }}>
                  <span style={{ minWidth: 160 }}>{label}</span>
                  <span style={{ display: "flex", gap: 8 }}>
                    <input type="number" min={6} max={200} placeholder="auto" value={boxes[key].fontSize ?? ""} onChange={(e) => setFont(key, e.target.value)} style={{ width: 140 }} />
                    <button className="chip" onClick={() => clearFont(key)}>Auto</button>
                    <NudgeButtons k={key} />
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="row" style={{ gap: 12, marginTop: 6 }}>
            <button onClick={generateAndSend} disabled={!canGenerate} className="btn">Generate & Send Certificates</button>
            <span className="muted" style={{ fontSize: 12 }}>Generates per-recipient ZIPs → downloads locally & sends each ZIP by email.</span>
          </div>

          {status && <div className="muted">Status: {status}</div>}
        </div>
      </div>

      <div className="card">
        {!bgUrl ? (
          <div className="muted" style={{ padding: 24, textAlign: "center" }}>Upload a certificate image to start.</div>
        ) : rows.length === 0 ? (
          <div className="muted" style={{ padding: 24, textAlign: "center" }}>Load Google Sheet data to preview.</div>
        ) : (
          <div ref={previewShellRef} className="previewShell">
            <div className="previewScaler" style={{ transform: `scale(${scale})` }}>
              {cleanPreview && <CertificatePreview ref={capRefPreview} bgUrl={bgUrl} data={cleanPreview} boxes={boxes} />}
            </div>
          </div>
        )}
      </div>

      <div className="offscreen">
        {bgUrl && (capRefOff || cleanPreview) && (
          <CertificatePreview ref={capRefOff} bgUrl={bgUrl} data={capData || cleanPreview} boxes={boxes} />
        )}
      </div>
    </div>
  );
}
