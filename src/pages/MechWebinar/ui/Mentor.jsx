import React from "react";

export default function MentorSection() {
  return (
    <section className="bg-[#5161F5] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-10 sm:mb-14 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Your Mentor
          </h2>
          <p className="mt-2 text-sm sm:text-base text-white/85">
            Learn directly from an industry-focused CFD expert
          </p>
        </div>

        {/* Mentor Card */}
        <div
          className="group mx-auto flex max-w-5xl flex-col items-center gap-6 sm:gap-8
                     rounded-3xl bg-white
                     px-6 py-6 sm:px-8 sm:py-7 lg:px-10 lg:py-8
                     border border-white/40
                     shadow-[0_25px_60px_-20px_rgba(0,0,0,0.25)]
                     transition-all duration-500
                     hover:-translate-y-2
                     hover:shadow-[0_35px_80px_-25px_rgba(0,0,0,0.35)]
                     md:flex-row"
        >
          {/* Avatar */}
          <div
            className="flex h-24 w-24 sm:h-28 sm:w-28 shrink-0 items-center justify-center
                       rounded-full
                       bg-gradient-to-br from-[#5161F5] to-[#7C8CFF]
                       text-4xl sm:text-5xl font-extrabold text-white
                       shadow-lg
                       transition-transform duration-500
                       group-hover:scale-105"
          >
            S
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900">
              Siddhartha
            </h3>

            <p className="mt-1 font-semibold text-[#5161F5]">
              BU Head - Mechanical
            </p>

            <p className="mt-3 max-w-3xl text-sm sm:text-[15px] leading-relaxed text-gray-600">
              With an MS in Aerospace Engineering and 4+ years of experience,
              Siddhartha brings deep expertise in CFD, combustion modeling, and
              thermal systems, with strong hands-on experience using{" "}
              <span className="font-semibold text-gray-900">OpenFOAM</span>.
            </p>

            {/* Expertise Tags */}
            <div className="mt-4 flex flex-wrap justify-center gap-3 md:justify-start">
              {[
                "Combustion CFD",
                "IC Engine Analysis",
                "Thermo-acoustics",
                "Heat Exchanger Design",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="rounded-full bg-[#EEF1FF]
                             px-4 py-1.5
                             text-xs sm:text-sm
                             font-semibold text-[#5161F5]
                             transition-all duration-300
                             hover:-translate-y-0.5
                             hover:bg-[#5161F5] hover:text-white
                             hover:shadow-[0_8px_20px_-8px_rgba(81,97,245,0.6)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
