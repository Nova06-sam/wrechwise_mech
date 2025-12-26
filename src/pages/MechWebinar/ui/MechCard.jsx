import React from "react";
import {
  CalendarDays,
  Laptop,
  Clock,
  Users,
  Star,
} from "lucide-react";

const cards = [
  {
    icon: CalendarDays,
    title: "Date",
    value: `jan 30,31/2026 , 
    feb 1/2026`,
  },
  {
    icon: Laptop,
    title: "Format",
    value: "Hybrid (Virtual + In-Person)",
  },
  {
    icon: Clock,
    title: "Duration",
    value: "3 Days Intensive",
  },
  {
    icon: Users,
    title: "Seats",
    value: "20 Limited",
  },
];

export default function MechCard() {
  return (
    <section className="bg-[#f5f7ff] py-10 sm:py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="
                group rounded-2xl border border-transparent bg-white
                p-6 sm:p-7 md:p-8
                shadow-[0_10px_28px_-14px_rgba(0,0,0,0.14)]
                transition-all duration-300
                hover:border-[#3C53E7]
                hover:shadow-[0_20px_45px_-18px_rgba(60,83,231,0.35)]
                sm:hover:scale-[1.04]
              "
            >
              {/* Icon */}
              <div
                className="
                  mb-4 sm:mb-5
                  flex h-12 w-12 sm:h-14 sm:w-14
                  items-center justify-center
                  rounded-xl bg-[#eef1ff]
                  text-[#3C53E7]
                  transition-transform duration-300
                  group-hover:scale-110
                "
              >
                <card.icon size={24} strokeWidth={1.8} />
              </div>

              {/* Title */}
              <p className="text-xs sm:text-sm font-medium text-gray-500">
                {card.title}
              </p>

              {/* Value */}
              <div className="mt-1 flex items-center gap-1">
                <p className="text-base sm:text-lg font-semibold text-gray-900 leading-snug">
                  {card.value}
                </p>
                {card.value === "20 Limited" && (
                  <Star size={10} style={{marginTop:'-10px'}} className="text-yellow-500 fill-yellow-500" />
                )}
              </div>

              {/* Accent Line */}
              <div className="mt-4 sm:mt-5 h-[2px] w-8 sm:w-10 rounded-full bg-[#3C53E7]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}