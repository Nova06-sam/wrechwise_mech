import React from "react";
import { Link } from "react-router-dom";
export default function PartnerWithUs() {
  return (
    <section className="w-full flex justify-center py-5 px-6">
      <div
        className="
          w-full max-w-6xl
          mx-auto 
          rounded-3xl 
          bg-[#2C3291]
          text-white 
          py-20 px-10 sm:px-16
          shadow-[0_25px_60px_rgba(44,50,145,0.45)]
          flex flex-col items-center
        "
      >
        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-5xl font-bold leading-tight">
          Want Webinars for your college?
        </h2>

        {/* Subheading */}
        <p className="mt-5 text-center text-lg sm:text-xl opacity-90 max-w-3xl">
          Partner with Wrench Wise to run campus-specific sessions and 
          placement-focused workshops.
        </p>

        {/* CTA Button */}
        <Link
         to='/contact'
          className="
            mt-9 
            rounded-xl 
            bg-[#DA108B]
            text-white
            text-lg sm:text-xl
            font-semibold 
            px-12 py-4
            shadow-lg shadow-[#DA108B]/40
            hover:brightness-110 
            transition
          "
        >
          Partner with Us
        </Link>
      </div>
    </section>
  );
}