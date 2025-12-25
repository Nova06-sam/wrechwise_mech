import React from "react";
import { TbLivePhoto } from "react-icons/tb"; 
import { PiChalkboardTeacherBold } from "react-icons/pi";
import { FaCertificate } from "react-icons/fa6";

export default function  WebinarSidebar() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#3b0dab] via-[#142c85] to-[#1b0d54] shadow-2xl px-6 py-12 sm:px-10 sm:py-16">
      {/* Glow Blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-pink-500/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-indigo-500/40 blur-3xl" />
        <div className="absolute top-1/3 left-1/3 h-44 w-44 rounded-full bg-blue-500/25 blur-3xl" />
      </div>

      {/* Centered Heading */}
      <h2 className="relative mb-10 text-center text-2xl font-bold text-white sm:text-3xl">
        Why Attend?
      </h2>

      {/* 3 CARDS SIDE BY SIDE */}
      <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-3">
        <BenefitCard
          icon={TbLivePhoto}
          text="Live coding & Hands-on challenges"
        />
        <BenefitCard
          icon={PiChalkboardTeacherBold}
          text="Direct Q&A with Mentors"
        />
        <BenefitCard
          icon={FaCertificate}
          text="E-certificates & Resource packs"
        />
      </div>
    </section>
  );
}

/* Benefit Card Component */
function BenefitCard({ icon: Icon, text }) {
  return (
    <div className="h-full min-h-[150px] rounded-3xl border border-white/20 bg-white/10 p-7 shadow-lg backdrop-blur-2xl">
      <div className="flex h-full flex-col items-center text-center gap-3">
        {/* Icon above text, enlarged */}
        <Icon className="h-12 w-12 text-pink-300" />

        <p className="text-base font-semibold text-blue-50">{text}</p>
      </div>
    </div>
  );
}