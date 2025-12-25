import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-sit.png";

import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CircleCheckBig } from "lucide-react";

export default function SitPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [openPhase, setOpenPhase] = useState(null);

  // refs to stop "wrong phase opens / jump"
  const phaseRefs = useRef({});

  useEffect(() => setIsVisible(true), []);

  // --- react-hook-form setup for CTA email (kept as you had) ---
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm({
    defaultValues: { email: "" },
    mode: "onBlur",
  });

  const validationRules = {
    email: {
      required: "Email is required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Enter a valid email",
      },
    },
  };

  const handleBlur = (field) => trigger(field);

  const onCtaSubmit = (data) => {
    toast.success("Thank you! We’ll reach out to you soon.", {
      position: "top-center",
      autoClose: 2500,
      theme: "light",
    });
    reset();
  };

  const phases = [
    {
      id: 1,
      title: "Phase 1 - Core Java Foundations",
      daysLabel: "6 days",
      rows: [
        { day: "Day 1", topic: "Intro to Java", activities: ["JVM/JDK/JRE", "IDE setup", "First program"] },
        { day: "Day 2", topic: "Data Types & Operators", activities: ["Primitives", "Type casting", "Problem practice"] },
        { day: "Day 3", topic: "Control Flow", activities: ["If/Switch/Loops", "10 practice problems"] },
        { day: "Day 4", topic: "Methods & Arrays", activities: ["Methods", "Arrays", "Calculator exercise"] },
        { day: "Day 5", topic: "OOP Basics", activities: ["Classes & Objects", "Constructors", "Student class"] },
        { day: "Day 6", topic: "OOP Advanced", activities: ["Inheritance", "Polymorphism", "Mini OOP project"] },
      ],
    },
    {
      id: 2,
      title: "Phase 2 - Java Advanced + Database",
      daysLabel: "6 days",
      rows: [
        { day: "Day 7", topic: "Strings & Collections", activities: ["String APIs", "ArrayList, HashMap"] },
        { day: "Day 8", topic: "Exception Handling", activities: ["Try/Catch", "Custom exceptions"] },
        { day: "Day 9", topic: "File Handling", activities: ["Streams", "File-based mini project"] },
        { day: "Day 10", topic: "JDBC Foundations", activities: ["MySQL setup", "DB connection"] },
        { day: "Day 11", topic: "JDBC CRUD Operations", activities: ["PreparedStatement", "ResultSet"] },
        { day: "Day 12", topic: "JDBC Integration Project", activities: ["Student DB App"] },
      ],
    },
    {
      id: 3,
      title: "Phase 3 - Spring Boot Backend",
      daysLabel: "3 days",
      rows: [
        { day: "Day 13", topic: "Spring Basics", activities: ["Dependency Injection", "Beans", "Controllers"] },
        { day: "Day 14", topic: "Spring Boot REST APIs", activities: ["CRUD operations", "Validation"] },
        { day: "Day 15", topic: "API Testing", activities: ["Postman testing", "JSON mapping"] },
      ],
    },
    {
      id: 4,
      title: "Phase 4 - Frontend Essentials",
      daysLabel: "2 days",
      rows: [
        { day: "Day 16", topic: "HTML & CSS", activities: ["Forms, tables, layouts", "Build UI screens"] },
        { day: "Day 17", topic: "JavaScript Essentials", activities: ["DOM, events", "fetch API"] },
      ],
    },
    {
      id: 5,
      title: "Phase 5 - Full Stack Capstone",
      daysLabel: "3 days",
      rows: [
        {
          day: "Day 18",
          topic: "Full Stack Integration",
          activities: ["Combine Spring Boot + MySQL + HTML/CSS/JS", "Project structure"],
        },
        { day: "Day 19", topic: "Final Features", activities: ["Validations", "UI polish"] },
        { day: "Day 20", topic: "Testing & Presentation", activities: ["GitHub upload", "PPT demo", "Project evaluation"] },
      ],
    },
    {
      id: 6,
      title: "Phase 6 - AI Integration Module",
      daysLabel: "3 days",
      rows: [
        {
          day: "Day 21",
          topic: "Prompt Engineering for Developers",
          activities: [
            "Prompt structures (system/user/instruction)",
            "Dev-focused prompts: code gen, refactor, tests, SQL",
          ],
        },
        {
          day: "Day 22",
          topic: "AI Integration with Spring Boot",
          activities: [
            "Calling Chat/Completion APIs from Java",
            "Secure API key handling & env vars",
            "Auto-generate docs & test stubs",
          ],
        },
        {
          day: "Day 23",
          topic: "Embeddings & Semantic Search",
          activities: ["Embeddings concept", "Vector search basics", "Build Smart Search over project docs"],
        },
      ],
    },
  ];

  // ✅ fixed toggle: opens the clicked phase only + scrolls to it
  const togglePhase = (id) => {
    setOpenPhase((prev) => {
      const next = prev === id ? null : id;

      if (next !== null) {
        // wait for render then scroll to the clicked header
        setTimeout(() => {
          phaseRefs.current[id]?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 0);
      }

      return next;
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-emerald-50 to-cyan-50 relative overflow-hidden">
        {/* Centered Logo */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 flex justify-center">
          <img
            src={logo}
            alt="WrenchWise Logo"
            className="h-20 md:h-28 lg:h-32 w-auto max-w-[260px] md:max-w-[360px] lg:max-w-[420px] object-contain"
          />
        </div>

        {/* Animated bg blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute top-40 left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-14 md:pt-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* LEFT */}
            <div className="text-left">
              <div
                className={`transition-all duration-800 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">
                  Make SIT final-year students
                </h1>
                <span className="text-emerald-600 text-2xl md:text-4xl font-bold pb-6 block">
                  placement-ready in 23 days.
                </span>
              </div>

              <div
                className={`transition-all duration-800 ease-out delay-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <p className="text-base md:text-lg text-gray-700 font-medium my-3 max-w-2xl">
                  A focused, hands-on program tailored for Sethu Institute of Technology
                  that follows the industry workflow:
                </p>
              </div>

              <div
                className={`transition-all duration-800 ease-out delay-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <p className="text-base md:text-lg text-gray-600 mb-6 max-w-2xl leading-relaxed">
                  Database → Backend → Frontend → Applied AI. Students build a deployable
                  full-stack project and add AI-powered features that make their portfolio
                  stand out to recruiters.
                </p>
              </div>

              <div
                className={`transition-all duration-800 ease-out delay-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                
              </div>
            </div>

            {/* RIGHT CARD */}
            <div
              className={`transition-all duration-800 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-7 w-full max-w-xl lg:ml-auto border border-emerald-100">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
                  Program Snapshot (SIT)
                </h3>

                <div className="space-y-3 text-gray-800 text-sm md:text-base leading-relaxed">
                  <div className="flex gap-2">
                    <span className="font-semibold text-emerald-700">Program:</span>
                    <span>JFSD-AI 23D - Java Full Stack + Applied AI</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-emerald-700">Audience:</span>
                    <span>Final-year CSE / IT / ECE students at Sethu Institute of Technology</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-emerald-700">Duration:</span>
                    <span>23 Full Days (6–7 hrs/day) - On-campus delivery</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-emerald-700">Deliverables:</span>
                    <span>SIT Student Management & Smart Search Portal; GitHub repo; AI features demo</span>
                  </div>
                </div>

                <hr className="my-5 border-emerald-100" />

                <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                  Official Stance
                </h4>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  Wrench Wise delivers a backend-first curriculum to ensure clarity and
                  project completion. The AI add-on is positioned as a strategic enhancement
                  that improves project polish and recruiter appeal.
                </p>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob { animation: blob 7s infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }
          .filter { filter: blur(40px); }
        `}</style>
      </section>
{/* White model mini-cards with your content */}
<section className="py-12 md:py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
      
      {/* Card 1 */}
      <div className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 px-6 md:px-10 py-10 md:py-12 text-center">
        {/* Icon circle */}
        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
          {/* replace with your icon */}
          <span><CircleCheckBig className="text-emerald-900 " /></span>
        </div>

        <h3 className="text-xl md:text-2xl font-extrabold text-emerald-700 mb-4">
          Aligned with SIT
        </h3>

        <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-md mx-auto">
          Designed to fit SIT&apos;s academic rigor and placement goals - practical,
          measurable, and demonstrable.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 px-6 md:px-10 py-10 md:py-12 text-center">
        {/* Icon circle */}
        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
          <span><CircleCheckBig className="text-emerald-900 " /></span>
        </div>

        <h3 className="text-xl md:text-2xl font-extrabold text-emerald-700 mb-4">
          Placement Focused
        </h3>

        <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-md mx-auto">
          Students graduate with a recruiter-ready project and AI-enhanced deliverables.
        </p>
      </div>

    </div>
  </div>
</section>


      {/* CURRICULUM */}
      <section className="py-14 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            23-Day Curriculum (SIT Edition)
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-8">
            The day-wise curriculum below is tailored for SIT students with clear
            learning outcomes and daily hands-on activities.
          </p>

          <div className="space-y-6">
            {phases.map((phase) => {
              const isOpen = openPhase === phase.id;

              return (
                <div
                  key={phase.id}
                  ref={(el) => (phaseRefs.current[phase.id] = el)}
                  className="bg-white rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    type="button"
                    onClick={() => togglePhase(phase.id)}
                    className="w-full flex items-center justify-between px-6 md:px-8 py-5 md:py-6 text-left"
                  >
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-emerald-700">
                        {phase.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {phase.daysLabel}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-emerald-700">
                      <span className="text-sm font-medium">
                        {isOpen ? "Collapse" : "Expand"}
                      </span>
                      <span
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        ▾
                      </span>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 md:px-8 pb-6 md:pb-8">
                      <div className="grid grid-cols-12 gap-4 border-b border-emerald-100 pb-3 text-gray-600 font-semibold text-sm md:text-base">
                        <div className="col-span-2">Day</div>
                        <div className="col-span-5">Topic</div>
                        <div className="col-span-5">Key Activities</div>
                      </div>

                      <div className="divide-y divide-emerald-50">
                        {phase.rows.map((r, idx) => (
                          <div key={idx} className="grid grid-cols-12 gap-4 py-5 text-sm md:text-base">
                            <div className="col-span-2 text-gray-900 font-semibold">
                              {r.day}
                            </div>
                            <div className="col-span-5 text-gray-900 font-semibold">
                              {r.topic}
                            </div>
                            <div className="col-span-5 text-gray-700">
                              <ul className="list-disc ml-5 space-y-1 marker:text-emerald-600">
                                {r.activities.map((a, i) => (
                                  <li key={i}>{a}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CAPSTONE + OUTCOMES */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
            <div className="h-full bg-emerald-50/80 border border-emerald-100 rounded-3xl p-6 md:p-7 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="h-1.5 w-14 bg-emerald-600 rounded-full mb-4"></div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 leading-snug">
                Capstone - SIT Student Management &amp; Smart Search Portal
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-5">
                A deployable full-stack project tailored for SIT that includes: student
                CRUD, authentication, validations, search filters, AI-generated
                documentation, and a semantic Smart Search powered by embeddings.
              </p>
              <div className="space-y-2.5 text-gray-800 text-sm md:text-base">
                <p className="flex gap-2">
                  <span className="font-semibold text-emerald-700 shrink-0">
                    Deliverables:
                  </span>
                  <span>GitHub repo, API docs, Demo PPT, AI feature demos</span>
                </p>
                <p className="flex gap-2">
                  <span className="font-semibold text-emerald-700 shrink-0">
                    Evaluation:
                  </span>
                  <span>Feature checklist + Code review + Presentation + AI rubric</span>
                </p>
                <p className="flex gap-2">
                  <span className="font-semibold text-emerald-700 shrink-0">
                    Support:
                  </span>
                  <span>Mentorship hours, QA sessions &amp; post-bootcamp guide</span>
                </p>
              </div>
            </div>

            <div className="h-full bg-emerald-50/80 border border-emerald-100 rounded-3xl p-6 md:p-7 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="h-1.5 w-14 bg-emerald-600 rounded-full mb-4"></div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                Learning Outcomes for SIT Students
              </h3>
              <ol className="list-decimal ml-5 space-y-2.5 text-gray-700 text-sm md:text-base leading-relaxed marker:text-emerald-600">
                <li>Build REST APIs using Spring Boot and connect to MySQL.</li>
                <li>Create a frontend using HTML/CSS/JS that consumes APIs.</li>
                <li>
                  Integrate AI features: prompt engineering, API calls, and semantic search.
                </li>
                <li>
                  Deliver a working full-stack project with AI polish and maintain a GitHub
                  portfolio suitable for campus placements.
                </li>
              </ol>
              <div className="mt-5 text-xs md:text-sm text-emerald-800/80 bg-white/60 border border-emerald-100 rounded-xl px-3 py-2">
                Outcome-driven capstone delivery with AI-enhanced portfolio.
              </div>
            </div>
          </div>``
        </div>
      </section>

      {/* AI INTEGRATION MODULE */}
      <section className="py-12 md:py-16 bg-white"> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-emerald-200/70 shadow-sm p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6 md:mb-8">
              AI Integration Module - 3 Days
            </h2>

            <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-4xl mx-auto text-center mb-8">
              A focused 3-day add-on that teaches prompt engineering, integrating Chat APIs from Spring Boot,
              and building embeddings-based semantic search. The module is positioned after the core 20-day
              curriculum so students can enhance their capstone with AI features.
            </p>

            {/* 3 DAY CARDS */}
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-white rounded-2xl border border-emerald-100 shadow-sm hover:shadow-lg transition-all duration-300 p-5 md:p-6">
                <div className="text-emerald-700 font-semibold text-sm md:text-base mb-2">
                  Day 21
                </div>
                <div className="text-gray-900 font-bold text-base md:text-lg mb-2">
                  Prompt Engineering for Developers
                </div>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  Craft effective prompts for code generation, tests &amp; documentation.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-emerald-100 shadow-sm hover:shadow-lg transition-all duration-300 p-5 md:p-6">
                <div className="text-emerald-700 font-semibold text-sm md:text-base mb-2">
                  Day 22
                </div>
                <div className="text-gray-900 font-bold text-base md:text-lg mb-2">
                  AI Integration with Spring Boot
                </div>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  Secure API calls, JSON parsing, and automation.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-emerald-100 shadow-sm hover:shadow-lg transition-all duration-300 p-5 md:p-6">
                <div className="text-emerald-700 font-semibold text-sm md:text-base mb-2">
                  Day 23
                </div>
                <div className="text-gray-900 font-bold text-base md:text-lg mb-2">
                  Embeddings &amp; Semantic Search
                </div>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  Build Smart Search over project docs.
                </p>
              </div>
            </div>

            {/* SEPARATOR + EXTRA TOP GAP */}
            <div className="mt-52 md:mt-32 pt-8 md:pt-10 border-t border-emerald-100">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-5 text-center">
                  Why add this?
                </h3>

                <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                  <div className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                    <span><CircleCheckBig className="text-emerald-500" /></span>
                    <p className="text-gray-800 text-sm md:text-base font-medium">
                      Students learn modern AI-assisted development workflows.
                    </p>
                  </div>

                  <div className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                    <span><CircleCheckBig className="text-emerald-500" /></span>
                    <p className="text-gray-800 text-sm md:text-base font-medium">
                      Capstones look professional: auto-generated docs, tests, and smart search.
                    </p>
                  </div>

                  {/* centered short pill */}
                  <div className="md:col-span-2 flex justify-center">
                    <div className="flex items-center gap-0.5 bg-gray-50 rounded-xl px-20 py-3.5 w-full md:w-[70%] shadow-sm">
                      <span><CircleCheckBig className="text-emerald-500" /></span>
                      <p className="text-gray-800 text-sm md:text-base font-medium text-center flex-1">
                        Immediate placement benefit - recruiters value AI-savvy candidates.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ToastContainer />
    </div>
  );
}