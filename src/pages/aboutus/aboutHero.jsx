// AboutHero.jsx
import React, { useEffect, useState } from "react";

export default function AboutHero() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      aria-label="About hero"
      className="w-full relative overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 12% 70%, rgba(16,185,129,0.06) 0%, rgba(59,130,246,0.08) 18%, rgba(14,165,233,0.03) 36%, rgba(236,255,250,0.95) 68%, rgba(255,255,255,0.99) 100%)",
      }}
    >
      {/* Decorative blurred blobs (hidden on small screens) */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div className="absolute -top-24 -right-32 w-64 h-64 lg:w-80 lg:h-80 bg-emerald-200 rounded-full mix-blend-multiply opacity-70 animate-blob blur-3xl"></div>
        <div className="absolute -bottom-24 -left-32 w-64 h-64 lg:w-80 lg:h-80 bg-cyan-200 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000 blur-3xl"></div>
        <div className="absolute top-24 left-20 w-56 h-56 lg:w-72 lg:h-72 bg-sky-200 rounded-full mix-blend-multiply opacity-60 animate-blob animation-delay-4000 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center">
          {/* Pill */}
          <div
            className={`inline-flex items-center justify-center mx-auto mb-6 sm:mb-8 px-4 sm:px-5 py-1.5 rounded-full shadow-md transition-all duration-700 ${
              entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <span className="text-xs sm:text-sm font-medium text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
              Education earns a degree
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`mx-auto max-w-4xl font-extrabold text-slate-900 leading-tight transition-all duration-700 ${
              entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            } text-2xl sm:text-3xl md:text-4xl lg:text-5xl`}
          >
            At <span className="g1">Wrench</span> <span className="g2">Wise</span>,
          </h1>
          <h1
            className={`mx-auto max-w-4xl font-extrabold text-slate-900 leading-tight transition-all duration-700 ${
              entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            } text-2xl sm:text-3xl md:text-4xl lg:text-5xl`}
          >
             We Create Impact
          </h1>
          <div className="mt-6 sm:mt-8" />
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(22px, -36px) scale(1.05); }
          66% { transform: translate(-16px, 14px) scale(0.97); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 8s infinite ease-in-out; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
}