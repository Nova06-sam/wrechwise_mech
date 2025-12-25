// // import { useState } from "react";

// // const faqs = [
// //   {
// //     question: "Do I need to know Linux?",
// //     answer:
// //       "No. We start from scratch. A willingness to type commands instead of clicking buttons is enough.",
// //   },
// //   {
// //     question: "What computer do I need?",
// //     answer:
// //       "Minimum 8GB RAM (16GB recommended), 4-core processor. Windows 10/11 or Ubuntu.",
// //   },
// //   {
// //     question: "How is this different from YouTube tutorials?",
// //     answer:
// //       "YouTube shows what to type. We explain why, how to debug when it breaks, and provide pre-configured files so you don't get stuck.",
// //   },
// //   {
// //     question: "Is certification provided?",
// //     answer:
// //       "Yes. Certificate of Completion: Applied OpenFOAM for Thermal Management. Issued after successful submission of Project 3.",
// //   },
// // ];

// // export default function FAQSection() {
// //   const [openIndex, setOpenIndex] = useState(null);

// //   const toggleFAQ = (index) => {
// //     setOpenIndex(openIndex === index ? null : index);
// //   };

// //   return (
// //     <section className="max-w-5xl mx-auto px-4 py-10">
// //       <h2 className="text-3xl font-bold text-center mb-10 text-[#5161F5]">
// //         Logistics & FAQs
// //       </h2>

// //       <div className="space-y-4">
// //         {faqs.map((faq, index) => (
// //           <div
// //             key={index}
// //             className={`border rounded-xl transition-all duration-300 bg-white
// //               ${
// //                 openIndex === index
// //                   ? "border-[#5161F5] shadow-md"
// //                   : "border-gray-200 hover:border-[#5161F5]"
// //               }
// //               hover:shadow-lg`}
// //           >
// //             {/* Question */}
// //             <button
// //               onClick={() => toggleFAQ(index)}
// //               className="w-full flex justify-between items-center px-6 py-4 text-left"
// //             >
// //               <span className="text-lg font-semibold text-gray-900">
// //                 {faq.question}
// //               </span>
// //               <span
// //                 className={`text-[#5161F5] text-xl transition-transform duration-300 ${
// //                   openIndex === index ? "rotate-180" : ""
// //                 }`}
// //               >
// //                 ▼
// //               </span>
// //             </button>

// //             {/* Answer */}
// //             <div
// //               className={`overflow-hidden transition-all duration-300 ease-in-out ${
// //                 openIndex === index ? "max-h-40 px-6 pb-4" : "max-h-0 px-6"
// //               }`}
// //             >
// //               <p className="text-gray-600 leading-relaxed">
// //                 {faq.answer}
// //               </p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }
// import { useState } from "react";

// const faqs = [
//   {
//     question: "Do I need to know Linux?",
//     answer:
//       "No. We start from scratch. A willingness to type commands instead of clicking buttons is enough.",
//   },
//   {
//     question: "What computer do I need?",
//     answer:
//       "Minimum 8GB RAM (16GB recommended), 4-core processor. Windows 10/11 or Ubuntu.",
//   },
//   {
//     question: "How is this different from YouTube tutorials?",
//     answer:
//       "YouTube shows what to type. We explain why, how to debug when it breaks, and provide pre-configured files so you don't get stuck.",
//   },
//   {
//     question: "Is certification provided?",
//     answer:
//       "Yes. Certificate of Completion: Applied OpenFOAM for Thermal Management. Issued after successful submission of Project 3.",
//   },
// ];

// export default function FAQSection() {
//   const [openIndex, setOpenIndex] = useState(null);

//   return (
//     <section className="max-w-5xl mx-auto px-4 py-10">
//       {/* Heading */}
//       <h2 className="text-3xl font-bold text-center mb-10 text-black">
//         Logistics & FAQs
//       </h2>

//       <div className="space-y-4">
//         {faqs.map((faq, index) => (
//           <div
//             key={index}
//             className={`border rounded-xl bg-white transition-all duration-300
//               ${
//                 openIndex === index
//                   ? "border-[#4051E8] shadow-md"
//                   : "border-gray-200 hover:border-[#4051E8]"
//               }
//               hover:shadow-lg`}
//           >
//             {/* Question */}
//             <button
//               onClick={() =>
//                 setOpenIndex(openIndex === index ? null : index)
//               }
//               className="w-full flex justify-between items-center px-6 py-4 text-left"
//             >
//               <span className="text-lg font-bold text-[#4051E8]">
//                 {faq.question}
//               </span>

//               <span
//                 className={`text-[#4051E8] text-xl transition-transform duration-300 ${
//                   openIndex === index ? "rotate-180" : ""
//                 }`}
//               >
//                 ▼
//               </span>
//             </button>

//             {/* Answer */}
//             <div
//               className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                 openIndex === index
//                   ? "max-h-40 px-6 pb-4"
//                   : "max-h-0 px-6"
//               }`}
//             >
//               <p className="text-gray-600 leading-relaxed">
//                 {faq.answer}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
import { useState } from "react";

const faqs = [
  {
    question: "Do I need to know Linux?",
    answer:
      "No. We start from scratch. A willingness to type commands instead of clicking buttons is enough.",
  },
  {
    question: "What computer do I need?",
    answer:
      "Minimum 8GB RAM (16GB recommended), 4-core processor. Windows 10/11 or Ubuntu.",
  },
  {
    question: "How is this different from YouTube tutorials?",
    answer:
      "YouTube shows what to type. We explain why, how to debug when it breaks, and provide pre-configured files so you don't get stuck.",
  },
  {
    question: "Is certification provided?",
    answer:
      "Yes. Certificate of Completion: Applied OpenFOAM for Thermal Management. Issued after successful submission of Project 3.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16">
      {/* Heading */}
      <h2 className="mb-8 sm:mb-10 text-center text-2xl sm:text-3xl font-extrabold text-black">
        Logistics & FAQs
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`rounded-xl border bg-white transition-all duration-300
                ${
                  isOpen
                    ? "border-[#4051E8] shadow-md"
                    : "border-gray-200 hover:border-[#4051E8]"
                }
                hover:shadow-lg`}
            >
              {/* Question */}
              <button
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="flex w-full items-center justify-between
                           px-4 sm:px-6 py-4
                           text-left"
              >
                <span className="text-sm sm:text-base font-extrabold text-[#4051E8]">
                  {faq.question}
                </span>

                <span
                  className={`ml-4 text-[#4051E8] text-lg transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden px-4 sm:px-6 pb-4">
                  <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
