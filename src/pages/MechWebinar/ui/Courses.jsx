// import React, { useState } from "react";
// import { ChevronDown } from "lucide-react";

// const syllabus = [
//   {
//     day: "Day 1",
//     title: "The Foundation: Breaking the Linux Barrier",
//     subtitle: "Install OpenFOAM and run your first successful CFD simulation",
//     sessions: [
//       {
//         title: "Session 1: The Environment (09:00 – 11:00)",
//         points: [
//           "Step-by-step installation of OpenFOAM (v2306 or similar) and ParaView",
//           "Windows (via WSL) and Linux supported",
//           "Linux terminal basics: cd, ls, mkdir, cp, gedit / nano",
//           "Sanity check: running the standard cavity tutorial",
//         ],
//       },
//       {
//         title: "Session 2: Anatomy of an OpenFOAM Case (11:30 – 13:30)",
//         points: [
//           "Understanding the 0, constant, and system directories",
//           "Mesh fundamentals using blockMesh",
//           "Vertices, blocks, grading explained clearly",
//           "Activity: Hand-drawn mesh → blockMeshDict conversion",
//         ],
//       },
//       {
//         title: "Session 3: Project 1 Execution (14:30 – 16:30)",
//         points: [
//           "Boundary condition setup for velocity and pressure",
//           "Solver selection: icoFoam",
//           "Project 1: Laminar Flow Through a Pipe",
//         ],
//       },
//     ],
//   },
//   {
//     day: "Day 2",
//     title: "Thermal Physics & Multi-Region CFD",
//     subtitle: "Transition from fluid flow to Conjugate Heat Transfer",
//     sessions: [
//       {
//         title: "Session 1: Heat Transfer in OpenFOAM (09:00 – 11:00)",
//         points: [
//           "Heat transfer solvers overview",
//           "Natural convection",
//           "Solid–fluid interaction",
//           "Editing thermophysical properties",
//         ],
//       },
//       {
//         title: "Session 2: Understanding CHT (11:30 – 13:30)",
//         points: [
//           "Solid–fluid heat exchange",
//           "Region splitting & interfaces",
//           "Coupled thermal boundary conditions",
//         ],
//       },
//       {
//         title: "Session 3: Project 2 Execution (14:30 – 16:30)",
//         points: ["Project: Electronics Chip Cooling with Heat Sink"],
//       },
//     ],
//   },
//   {
//     day: "Day 3",
//     title: "Capstone Project: EV Battery Cooling",
//     subtitle: "Resume-ready EV Battery Thermal Management simulation",
//     sessions: [
//       {
//         title: "Session 1: Geometry & Meshing (09:00 – 11:00)",
//         points: [
//           "STL import",
//           "snappyHexMesh introduction",
//           "Battery cell meshing",
//         ],
//       },
//       {
//         title: "Session 2: Battery Physics Setup (11:30 – 13:30)",
//         points: [
//           "Volumetric heat generation",
//           "Coolant properties",
//           "Solver stability",
//         ],
//       },
//       {
//         title: "Session 3: Post-Processing (14:30 – 16:30)",
//         points: [
//           "Temperature contours",
//           "Streamlines & slices",
//           "Max temperature extraction",
//         ],
//       },
//     ],
//   },
// ];

// export default function Courses() {
//   const [openIndex, setOpenIndex] = useState(null); // all closed by default

//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-[#3C53E7] via-[#435AF2] to-[#2F3FD4] py-20">
//       {/* background glow */}
//       <div className="pointer-events-none absolute -top-32 -left-32 h-[360px] w-[360px] rounded-full bg-white/10 blur-[120px]" />
//       <div className="pointer-events-none absolute -bottom-32 -right-32 h-[360px] w-[360px] rounded-full bg-black/20 blur-[120px]" />

//       <div className="relative mx-auto max-w-6xl px-6">
//         {/* Heading */}
//         <div className="mb-12 text-center text-white">
//           <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
//             Detailed Bootcamp Syllabus
//           </h2>
//           <p className="mt-3 text-base text-white/80">
//             A focused 3-day journey from zero to EV battery simulations
//           </p>
//         </div>

//         {/* Accordion */}
//         <div className="space-y-5">
//           {syllabus.map((dayItem, index) => {
//             const isOpen = openIndex === index;

//             return (
//               <div
//                 key={index}
//                 className="rounded-3xl bg-white shadow-lg transition-all duration-300"
//               >
//                 {/* Header */}
//                 <button
//                   onClick={() => setOpenIndex(isOpen ? null : index)}
//                   className="flex w-full items-center justify-between px-6 py-5 text-left"
//                 >
//                   <div className="flex items-start gap-5">
//                     <span className="rounded-full bg-[#EEF1FF] px-4 py-1.5 text-sm font-bold text-[#3C53E7]">
//                       {dayItem.day}
//                     </span>

//                     <div>
//                       <h3 className="text-lg font-extrabold text-gray-900">
//                         {dayItem.title}
//                       </h3>
//                       <p className="mt-1 text-sm text-gray-600">
//                         {dayItem.subtitle}
//                       </p>
//                     </div>
//                   </div>

//                   <ChevronDown
//                     className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
//                       isOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 {/* Content */}
//                 <div
//                   className={`grid transition-all duration-500 ease-in-out ${
//                     isOpen
//                       ? "grid-rows-[1fr] opacity-100"
//                       : "grid-rows-[0fr] opacity-0"
//                   }`}
//                 >
//                   <div className="overflow-hidden">
//                     <div className="border-t px-7 py-6">
//                       <div className="space-y-8">
//                         {dayItem.sessions.map((session, i) => (
//                           <div key={i} className="relative pl-5">
//                             <div className="absolute left-0 top-0 h-full w-1 rounded-full bg-[#3C53E7]" />

//                             <h4 className="text-sm font-bold text-gray-900">
//                               {session.title}
//                             </h4>

//                             <ul className="mt-3 space-y-1.5 text-sm text-gray-700">
//                               {session.points.map((point, idx) => (
//                                 <li key={idx} className="flex gap-2">
//                                   <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#3C53E7]" />
//                                   <span>{point}</span>
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const syllabus = [
  {
    day: "Day 1",
    title: "The Foundation: Breaking the Linux Barrier",
    subtitle: "Install OpenFOAM and run your first successful CFD simulation",
    sessions: [
      {
        title: "Session 1: The Environment (09:00 – 11:00)",
        points: [
          "Step-by-step installation of OpenFOAM (v2306 or similar) and ParaView",
          "Windows (via WSL) and Linux supported",
          "Linux terminal basics: cd, ls, mkdir, cp, gedit / nano",
          "Sanity check: running the standard cavity tutorial",
        ],
      },
      {
        title: "Session 2: Anatomy of an OpenFOAM Case (11:30 – 13:30)",
        points: [
          "Understanding the 0, constant, and system directories",
          "Mesh fundamentals using blockMesh",
          "Vertices, blocks, grading explained clearly",
          "Activity: Hand-drawn mesh → blockMeshDict conversion",
        ],
      },
      {
        title: "Session 3: Project 1 Execution (14:30 – 16:30)",
        points: [
          "Boundary condition setup for velocity and pressure",
          "Solver selection: icoFoam",
          "Project 1: Laminar Flow Through a Pipe",
        ],
      },
    ],
  },
  {
    day: "Day 2",
    title: "Thermal Physics & Multi-Region CFD",
    subtitle: "Transition from fluid flow to Conjugate Heat Transfer",
    sessions: [
      {
        title: "Session 1: Heat Transfer in OpenFOAM (09:00 – 11:00)",
        points: [
          "Heat transfer solvers overview",
          "Natural convection",
          "Solid–fluid interaction",
          "Editing thermophysical properties",
        ],
      },
      {
        title: "Session 2: Understanding CHT (11:30 – 13:30)",
        points: [
          "Solid–fluid heat exchange",
          "Region splitting & interfaces",
          "Coupled thermal boundary conditions",
        ],
      },
      {
        title: "Session 3: Project 2 Execution (14:30 – 16:30)",
        points: ["Project: Electronics Chip Cooling with Heat Sink"],
      },
    ],
  },
  {
    day: "Day 3",
    title: "Capstone Project: EV Battery Cooling",
    subtitle: "Resume-ready EV Battery Thermal Management simulation",
    sessions: [
      {
        title: "Session 1: Geometry & Meshing (09:00 – 11:00)",
        points: [
          "STL import",
          "snappyHexMesh introduction",
          "Battery cell meshing",
        ],
      },
      {
        title: "Session 2: Battery Physics Setup (11:30 – 13:30)",
        points: [
          "Volumetric heat generation",
          "Coolant properties",
          "Solver stability",
        ],
      },
      {
        title: "Session 3: Post-Processing (14:30 – 16:30)",
        points: [
          "Temperature contours",
          "Streamlines & slices",
          "Max temperature extraction",
        ],
      },
    ],
  },
];

export default function Courses() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#3C53E7] via-[#435AF2] to-[#2F3FD4] py-16 sm:py-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-[300px] w-[300px] rounded-full bg-white/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-[300px] w-[300px] rounded-full bg-black/20 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-10 text-center text-white sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            Detailed Bootcamp Syllabus
          </h2>
          <p className="mt-2 text-sm sm:text-base text-white/80">
            A focused 3-day journey from zero to EV battery simulations
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4 sm:space-y-5">
          {syllabus.map((dayItem, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl sm:rounded-3xl bg-white shadow-md sm:shadow-lg transition-all duration-300"
              >
                {/* Header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-start justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-5">
                    <span className="w-fit rounded-full bg-[#EEF1FF] px-3 py-1 text-xs sm:text-sm font-bold text-[#3C53E7]">
                      {dayItem.day}
                    </span>

                    <div>
                      <h3 className="text-base sm:text-lg font-extrabold text-gray-900">
                        {dayItem.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-gray-600">
                        {dayItem.subtitle}
                      </p>
                    </div>
                  </div>

                  <ChevronDown
                    className={`mt-1 h-4 w-4 sm:h-5 sm:w-5 text-gray-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Content */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t px-5 py-5 sm:px-7 sm:py-6">
                      <div className="space-y-6 sm:space-y-8">
                        {dayItem.sessions.map((session, i) => (
                          <div key={i} className="relative pl-4 sm:pl-5">
                            <div className="absolute left-0 top-0 h-full w-1 rounded-full bg-[#3C53E7]" />

                            <h4 className="text-xs sm:text-sm font-bold text-gray-900">
                              {session.title}
                            </h4>

                            <ul className="mt-2 sm:mt-3 space-y-1.5 text-xs sm:text-sm text-gray-700">
                              {session.points.map((point, idx) => (
                                <li key={idx} className="flex gap-2">
                                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#3C53E7]" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
