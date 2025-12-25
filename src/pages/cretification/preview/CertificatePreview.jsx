import React, { forwardRef, useEffect, useLayoutEffect, useRef, useState } from "react";
/* ---------------- Helpers ---------------- */
function toTitleCase(s = "") {
  return s
    .toLowerCase()
    .replace(/\b([a-z])/g, (m) => m.toUpperCase())
    .replace(/\b(Of|And|In|On|At|For|To|From|By|The)\b/gi, (m) => m.toLowerCase());
}

function isExcelSerialNumber(n) {
  return typeof n === "number" && isFinite(n) && n > 25000 && n < 60000;
}

function formatDateLike(v) {
  const tryDate = (d) =>
    d instanceof Date && !isNaN(d.getTime())
      ? d.toLocaleDateString(undefined, { day: "2-digit", month: "short", year: "numeric" })
      : String(v ?? "");

  if (isExcelSerialNumber(v)) {
    const ms = Math.round((v - 25569) * 86400 * 1000);
    return tryDate(new Date(ms));
  }

  const asDate = new Date(v);
  if (!isNaN(asDate.getTime())) return tryDate(asDate);

  return String(v ?? "");
}

export function normalizeExcelData(data) {
  const rawName = (data?.Name ?? "").toString().trim().replace(/\s+/g, " ");
  const rawLevel = (data?.Level ?? "").toString().trim();
  const rawAwardedOn = data?.AwardedOn ?? data?.Date ?? "";
  const rawDuration = (data?.Duration ?? "").toString().trim();
  const rawSignName =
    (
      data?.SignatoryName ??
      data?.Signatory ??
      data?.SignName ??
      data?.Authorizer ??
      data?.CEO ??
      ""
    ).toString().trim();

  return {
    Name: rawName
      ? rawName
          .split(/(\b[A-Z]{2,}\b)/)
          .map((seg) => (/[A-Z]{2,}/.test(seg) ? seg : toTitleCase(seg)))
          .join("")
      : "",
    Level: rawLevel || "",
    AwardedOn: rawAwardedOn ? formatDateLike(rawAwardedOn) : "",
    Duration: rawDuration || "",
    SignatoryName: rawSignName || "",
  };
}

function looksLikeDate(s) {
  const m = String(s || "").toLowerCase();
  return /\b\d{1,2}[\/.\s-]\d{1,2}[\/.\s-]\d{2,4}\b/.test(m) || /\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\b/.test(m);
}

function inferAlign(text, approx = 28) {
  if (!text) return "center";
  if (looksLikeDate(text)) return "right";
  const lines = String(text).split(/\r?\n/);
  if (lines.length > 1) return "left";
  if (String(text).length > approx * 1.2) return "left";
  return "center";
}

/* ---------------- AutoFitText ---------------- */
function AutoFitText({
  text,
  boxHeight,
  fixedSize,
  weight = 700,
  align = "center",
  valign = "center",
  baselinePad = 0,
  lineHeight = 1.15,
  color = "var(--ink)",
}) {
  const wrapRef = useRef(null);
  const [size, setSize] = useState(typeof fixedSize === "number" ? fixedSize : 24);

  useEffect(() => {
    if (typeof fixedSize === "number") setSize(fixedSize);
  }, [fixedSize]);

  useLayoutEffect(() => {
    if (typeof fixedSize === "number") return;
    const wrap = wrapRef.current;
    if (!wrap) return;

    const maxFont = Math.max(10, Math.floor(boxHeight * 0.85));
    const minFont = Math.max(6, Math.floor(boxHeight * 0.18));
    let lo = minFont,
      hi = maxFont,
      best = minFont;

    const fits = () => wrap.scrollWidth <= wrap.clientWidth && wrap.scrollHeight <= wrap.clientHeight;

    setSize(hi);

    const id = requestAnimationFrame(() => {
      while (lo <= hi) {
        const mid = Math.floor((lo + hi) / 2);

        const prev = wrap.style.fontSize;
        wrap.style.fontSize = `${mid}px`;

        const ok = fits();

        wrap.style.fontSize = prev;

        if (ok) {
          best = mid;
          lo = mid + 1;
        } else {
          hi = mid - 1;
        }
      }

      setSize(best);
    });

    return () => cancelAnimationFrame(id);
  }, [text, boxHeight, fixedSize]);

  return (
    <div
      ref={wrapRef}
      style={{
        fontSize: `${size}px`,
        fontWeight: weight,
        lineHeight,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: valign === "bottom" ? "flex-end" : "center",
        justifyContent: align === "left" ? "flex-start" : align === "right" ? "flex-end" : "center",
        textAlign: align,
        paddingBottom: valign === "bottom" ? baselinePad : 0,
        color,
        overflow: "hidden",
        wordBreak: "break-word",
      }}
    >
      {text}
    </div>
  );
}

/* ---------------- FieldBox ---------------- */
function FieldBox({ box, text, weight = 700, debug = false, kind }) {
  const { x, y, w, h, align, fontSize, lineHeight = 1.15, color, valign = "center", baselinePad = 0 } = box;

  let derivedAlign = align ?? "auto";

  if (!align || align === "auto") {
    derivedAlign = kind === "date" ? "right" : inferAlign(text, Math.floor(w / 18));
  }

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: w,
        height: h,
        padding: 6,
        borderRadius: 10,
        ...(debug
          ? {
              outline: "1px dashed blue",
              background: "rgba(19,104,196,.06)",
            }
          : {}),
      }}
    >
      <AutoFitText
        text={text}
        boxHeight={h}
        fixedSize={typeof fontSize === "number" ? fontSize : undefined}
        weight={weight}
        align={derivedAlign}
        valign={valign}
        baselinePad={baselinePad}
        lineHeight={lineHeight}
        color={color || "var(--ink)"}
      />
    </div>
  );
}

/* ---------------- Certificate Preview ---------------- */
const DEFAULT_MAX_PREVIEW_W = 900;

const CertificatePreview = forwardRef(function CertificatePreview(
  { bgUrl, data, boxes, showGuides = false, maxPreviewW = DEFAULT_MAX_PREVIEW_W, forceScale },
  ref
) {
  const { Name, Level, AwardedOn, Duration, SignatoryName } = normalizeExcelData(data);

  const [dims, setDims] = useState({ w: 1600, h: 1131 });
  const containerRef = useRef(null);
  const [cw, setCw] = useState(0);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      :root {
        --brand-blue:#1368C4;
        --brand-green:#16A34A;
        --ink:#0B1220;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const ro = new ResizeObserver((entries) => {
      const entry = entries[0];
      const w = entry.contentRect.width;
      setCw(w);
    });

    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const baseW = Math.min(cw || dims.w, maxPreviewW);
  const computedScale = dims.w > 0 ? Math.max(0.1, baseW / dims.w) : 1;
  const scale = typeof forceScale === "number" ? forceScale : computedScale;

  const renderW = Math.round(dims.w * scale);
  const renderH = Math.round(dims.h * scale);

  const px = (v, isX = true) => (v <= 1 ? v * (isX ? dims.w : dims.h) : v);

  const scaleBox = (b) => {
    const bx = px(b.x, true);
    const bw = px(b.w, true);

    const by =
      typeof b.baselineY === "number"
        ? px(b.baselineY, false) - px(b.h, false)
        : px(b.y, false);

    return {
      x: bx * scale,
      y: by * scale,
      w: bw * scale,
      h: px(b.h, false) * scale,
      align: b.align,
      fontSize: typeof b.fontSize === "number" ? b.fontSize * scale : undefined,
      lineHeight: b.lineHeight,
      color: b.color,
      baselinePad: (b.baselinePad ?? 0) * scale,
      valign: typeof b.baselineY === "number" ? "bottom" : b.valign,
    };
  };

  const nameBox = boxes?.name && scaleBox(boxes.name);
  const levelBox = boxes?.level && scaleBox(boxes.level);
  const awardedOnBox = boxes?.awardedOn && scaleBox(boxes.awardedOn);
  const durationBox = boxes?.duration && scaleBox(boxes.duration);
  const signBox = boxes?.signatory && scaleBox(boxes.signatory);

  /* ---------------- Email Sending Button ---------------- */
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleGenerateCertificates = async () => {
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbyQNvX9CJfegjGt0Rly5xJqzta1-bEgQW-5SVCZB3rt66SkALmVWn14Kp-aigc6ttD0gg/exec",
        { method: "POST" }
      );

      if (!res.ok) throw new Error("Network Error");

      const result = await res.json();

      if (result.success) {
        const sent = result.results.filter((r) => r.status === "sent").length;
        const skipped = result.results.filter((r) => r.status === "skipped").length;

        setStatus(`✅ ${sent} certificates sent, ${skipped} skipped.`);
      } else {
        throw new Error(result.error);
      }
    } catch (err) {
      setStatus("❌ Error: " + err.message);
    }

    setLoading(false);
  };

  return (
    <div ref={containerRef} className="cert-container">
      <div
        ref={ref}
        className="cert-root"
        style={{
          position: "relative",
          width: `${renderW}px`,
          height: `${renderH}px`,
          overflow: "hidden",
          borderRadius: 16,
          background: "#fff",
        }}
      >
        {bgUrl && (
          <img
            src={bgUrl}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            onLoad={(e) => {
              const img = e.target;
              setDims({
                w: img.naturalWidth || 1600,
                h: img.naturalHeight || 1131,
              });
            }}
          />
        )}

        {/* Optional masks */}
        {boxes?.masks?.map((m, i) => {
          const b = scaleBox(m);
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: b.x,
                top: b.y,
                width: b.w,
                height: b.h,
                background: m.color,
              }}
            />
          );
        })}

        {Name && nameBox && <FieldBox box={nameBox} text={Name} weight={900} kind="name" />}
        {Level && levelBox && <FieldBox box={levelBox} text={Level} weight={800} kind="level" />}
        {AwardedOn && awardedOnBox && (
          <FieldBox box={awardedOnBox} text={AwardedOn} weight={700} kind="date" />
        )}
        {Duration && durationBox && <FieldBox box={durationBox} text={Duration} weight={700} />}
        {SignatoryName && signBox && (
          <FieldBox box={signBox} text={SignatoryName} weight={800} />
        )}
      </div>

      {/* Button */}
      {/* <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <button
          onClick={handleGenerateCertificates}
          disabled={loading}
          style={{
            backgroundColor: "#1368C4",
            padding: "10px 20px",
            color: "#fff",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Sending..." : "Generate & Send Certificates1"}
        </button>

        {status && (
          <p
            style={{
              marginTop: "12px",
              color: status.startsWith("✅") ? "green" : "red",
              fontWeight: 600,
            }}
          >
            {status}
          </p>
        )}
      </div> */}
    </div>
  );
});

export default CertificatePreview;
