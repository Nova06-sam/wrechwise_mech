import React from "react";
import { Target, Award, Zap } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "No Fluff",
    desc: (
      <>
        Heavy theory is skipped. We focus{" "}
        <span className="font-semibold text-gray-900">
          100% on doing and executing real simulations.
        </span>
      </>
    ),
  },
  {
    icon: Award,
    title: "Portfolio Ready",
    desc: (
      <>
        You leave with{" "}
        <span className="font-semibold text-gray-900">
          3 complete, working CFD projects
        </span>{" "}
        you can confidently show to recruiters.
      </>
    ),
  },
  {
    icon: Zap,
    title: "Niche Focus",
    desc: (
      <>
        Not generic CFD. This bootcamp is focused on{" "}
        <span className="font-semibold text-gray-900">
          Electric Vehicle thermal management
        </span>
        —a high-demand, industry-relevant skill.
      </>
    ),
  },
];

export default function WhyThisBootcamp() {
  return (
    <section className="relative bg-white py-14 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-10 sm:mb-14 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">
            Why This Bootcamp?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Built for engineers who want real-world impact, not theory overload.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-3">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white
                         p-6 sm:p-7
                         transition-all duration-500
                         hover:-translate-y-1.5 hover:scale-[1.02]
                         hover:border-[#3C53E7]
                         hover:shadow-[0_20px_50px_-20px_rgba(60,83,231,0.4)]"
            >
              {/* Fixed top border */}
              <div className="absolute left-0 top-0 h-1 w-full bg-[#3C53E7]" />

              {/* Subtle hover bg */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500
                           group-hover:opacity-100
                           bg-gradient-to-br from-[#3C53E7]/6 via-transparent to-[#3C53E7]/12"
              />

              {/* Icon */}
              <div
                className="relative z-10 mb-5 flex h-12 w-12 sm:h-14 sm:w-14
                           items-center justify-center rounded-xl
                           bg-[#eef1ff] text-[#3C53E7]"
              >
                <item.icon size={24} strokeWidth={2} />
              </div>

              {/* Title */}
              <h3 className="relative z-10 mb-2.5 text-lg sm:text-xl font-bold tracking-tight text-gray-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-sm sm:text-[15px] leading-relaxed text-gray-600">
                {item.desc}
              </p>

              {/* Bottom accent */}
              <div className="relative z-10 mt-5 h-[2px] w-12 rounded-full bg-[#3C53E7]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
