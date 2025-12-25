import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const projects = [
  {
    tag: "Project 1",
    title: "Laminar Pipe Flow Validation",
    description:
      "Simulation of laminar water flow through a cylindrical pipe.",
    skills: [
      "BlockMesh creation",
      "Velocity & pressure boundary conditions",
      "Reynolds number calculation",
      "Validation against Hagen-Poiseuille solution",
    ],
    outcome:
      "Validated velocity profile proving fundamental CFD understanding",
  },
  {
    tag: "Project 2",
    title: "Electronics Cooling (CHT)",
    description:
      "Aluminum heat sink cooling a hot electronic chip using forced air.",
    skills: [
      "Conjugate Heat Transfer",
      "Multi-region simulation",
      "Turbulence models (k-ε / k-ω SST)",
      "Thermal boundary layer visualization",
    ],
    outcome:
      "Temperature distribution map showing heat-sink efficiency",
  },
  {
    tag: "Project 3",
    title: "Li-Ion Battery Pack Liquid Cooling",
    description:
      "Simulation of a 4-cell 21700 lithium-ion battery module under a 2C fast-charge cycle.",
    skills: [
      "SnappyHexMesh fundamentals",
      "Volumetric heat source modeling",
      "Liquid cooling analysis",
      "Thermal management evaluation",
    ],
    outcome:
      "Professional 3D battery cooling animation suitable for LinkedIn & portfolios",
  },
];

export default function ProjectsSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-white py-14 sm:py-18 lg:py-22">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-10 sm:mb-14 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900">
            The 3 Hands-On Projects
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Portfolio-grade simulations you can confidently showcase
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="group relative rounded-3xl border border-gray-200 overflow-hidden bg-white
                           p-5 sm:p-6
                           transition-all duration-300
                           hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Top accent */}
                <div className="absolute left-0 top-0 h-1 w-full rounded-t-3xl bg-[#3C53E7]" />

                {/* Tag */}
                <span className="inline-block rounded-full bg-[#EEF1FF]
                                 px-3 py-1 text-[11px] font-bold text-[#3C53E7]">
                  {project.tag}
                </span>

                {/* Title */}
                <h3 className="mt-4 text-base sm:text-lg font-extrabold leading-snug text-gray-900">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Toggle */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="mt-5 flex w-full items-center justify-between
                             rounded-xl border border-gray-200
                             px-4 py-2.5
                             text-sm font-semibold text-gray-700
                             transition
                             hover:border-[#3C53E7] hover:text-[#3C53E7]"
                >
                  View Key Skills
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Skills dropdown */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="space-y-1.5 text-sm text-gray-700">
                      {project.skills.map((skill, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#3C53E7]" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Outcome */}
                <div
                  className="mt-6 rounded-xl bg-[#F5F7FF]
                             px-4 py-3
                             text-[13px] font-semibold text-[#3C53E7]
                             transition-colors duration-300
                             group-hover:bg-[#3C53E7]
                             group-hover:text-white"
                >
                  Outcome: {project.outcome}
                </div>

                {/* Hover ring */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-3xl
                             ring-1 ring-transparent
                             transition-all duration-300
                             group-hover:ring-[#3C53E7]/40"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
