import React from "react";

export default function MechSmallCard() {
  return (
    <section className="relative overflow-hidden bg-[#4051E8] py-13 sm:py-18 lg:py-12">
      {/* background glow accents */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-indigo-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-purple-300/30 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        {/* centered card */}
        <div
          className="group mx-auto max-w-3xl rounded-3xl bg-white
                     p-6 sm:p-8 lg:p-12
                     shadow-[0_18px_50px_-22px_rgba(0,0,0,0.35)]
                     transition-all duration-300
                     hover:-translate-y-1 hover:scale-[1.02]
                     hover:shadow-[0_30px_70px_-28px_rgba(0,0,0,0.45)]"
        >
          {/* top accent line */}
          <div className="mb-4 sm:mb-5 h-[3px] sm:h-[4px] w-14 sm:w-20 rounded-full bg-[#3C53E7]" />

          {/* headline */}
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#3C53E7]">
            This bootcamp destroys that barrier.
          </h3>

          {/* description */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed text-gray-700">
            In just one focused weekend, you will go from never opening a terminal
            to simulating a liquid-cooled EV battery pack with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
