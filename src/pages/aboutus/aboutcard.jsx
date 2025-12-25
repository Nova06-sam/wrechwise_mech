// AboutHeroMint.jsx
import React from "react";

export default function AboutCard() {
  return (
    <section
      aria-label="Call-to-action hero — Wrench Wise"
      className="w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div
        className="mx-auto rounded-2xl shadow-2xl"
        style={{
          background: "linear-gradient(180deg, #05c066 0%, #0097b2 100%)",
          maxWidth: "1100px",
        }}
      >
        <div className="px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-20 text-center text-white">
          {/* Main Heading */}
          <h1 className="font-extrabold mx-auto leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[2.3rem] max-w-4xl">
            <span className="block">
              We don't prepare students to face the future
            </span>
            <span className="block mt-2 sm:mt-3">
              We prepare them to own the future.
            </span>
          </h1>

          {/* Sub-line */}
          <p className="mt-4 sm:mt-6 font-semibold text-white/95 text-base sm:text-lg md:text-xl">
            Don't just Graduate. Dominate.
          </p>

          {/* CTA Button (optional) */}
          {/*
          <div className="mt-8 sm:mt-10">
            <a
              href="#contact"
              className="inline-block rounded-lg bg-white px-6 py-3 sm:px-8 sm:py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              style={{ color: "#006c52" }}
            >
              Partner With Us
            </a>
          </div>
          */}
        </div>
      </div>
    </section>
  );
}