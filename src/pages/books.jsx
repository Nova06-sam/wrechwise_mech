import { useState, useEffect } from "react";
import { BookOpen, CheckCircle, ArrowRight } from "lucide-react";

const books = [
  {
    number: "1",
    title: "210+ Concepts to Crack the Design Engineer Role",
    description:
      "Your complete playbook for mastering part design, GD&T, plastics, sheet metal, mold design, and CATIA/NX workflows.",
    includes: "Concept definitions, automotive examples, real-world analogies, and interview Q&As.",
    idealFor: "Product Design, Plastics/Trim Engineers, CAD Interview Prep",
  },
  {
    number: "2",
    title: "200+ Concepts to Crack the FEA Simulation Engineer Role",
    description:
      "From meshing to modal analysis, crashworthiness to structural optimization - everything you need to master FEA interviews and real validation workflows.",
    includes: "Hypermesh, ANSYS, LS-DYNA + Common solver workflows + CAE project tips",
    idealFor: "CAE Trainees, Validation Engineers, Structural Analysts",
  },
  {
    number: "3",
    title: "200+ Concepts to Crack the CFD Simulation Engineer Role",
    description:
      "Understand the world of fluids, heat transfer, and aerodynamics - and how CFD plays a critical role in design validation.",
    includes: "Fluent, OpenFOAM, Pre/Post, flow types, solver logic",
    idealFor: "CFD Engineers, Thermal Simulation Interviews",
  },
  {
    number: "4",
    title: "Manufacturing & Quality in an Automotive OEM - Explained",
    description:
      "Get a first-hand understanding of how real manufacturing, PFMEA, shop-floor validation, and quality engineering happen in OEMs.",
    includes: "VAVE, Control Plans, 7 QC Tools, Process Quality",
    idealFor: "Manufacturing, Process Planning, Supplier Quality Roles",
  },
  {
    number: "5",
    title: "Automotive BIW - Explained for Engineers",
    description:
      "A part-by-part, function-by-function breakdown of Body-in-White. Learn hood, roof, door, and crash zones like a pro.",
    includes: "Design logic, stamping & joining methods, load paths",
    idealFor: "BIW Design, Manufacturing, and CAE Engineers",
  },
  {
    number: "6",
    title: "Automotive Plastics - A Designer's Reference",
    description:
      "From fascia to trims to pillars - understand plastic components from aesthetics to manufacturing constraints.",
    includes: "Snap fits, ribbing, mold flow, injection molding, design defects",
    idealFor: "Plastics Design, Tooling Coordination, Trim Engineers",
  },
];

const features = [
  "Structured by Engineers, for Engineers",
  "Includes examples, definitions, real-life comparisons",
  "Practice Q&A to prepare you for interviews",
  "Every book aligned with one or more job roles",
  "Pairable with our courses and certification programs",
];

export default function BooksPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
   
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className={`transition-all duration-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6 inline-block hover:bg-emerald-300 transition-colors shadow-md">
                <span className="g1">Wrench</span>-<span className="g2">Wise</span> Editions
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Crack interviews. Deepen knowledge. Learn like never before.
              </h1>
            </div>
            <div className={`transition-all duration-800 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                At <span className="font-bold g1">Wrench</span> <span className="font-bold g2">Wise</span>, we've distilled years of industry experience, 210+ expert-curated video scripts, and
                real-world project learning into a new breed of technical books.
              </p>
            </div>
            <div className={`transition-all duration-800 ease-out delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-lg text-gray-500 max-w-3xl mx-auto">
                These are not just reference guides - they're crack-ready preparation handbooks built for modern engineering roles.
                Whether you're preparing for core mechanical interviews, or diving deep into simulation, design, or
                automotive product development, our books help you build the right foundation and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The First Mechanical Engineering Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive guides designed to bridge the gap between academic knowledge and industry requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {books.map((book, index) => (
              <div 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 border-l-4 border-l-emerald-600 bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2"
              >
                <div className="p-6">
                  <div className="mb-4">
                    {/* <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded">
                      Book {book.number}
                    </span> */}
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                    {book.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {book.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 flex items-center text-sm">
                        <BookOpen className="h-4 w-4 mr-2 text-emerald-600" />
                        Includes:
                      </h4>
                      <p className="text-gray-600 text-xs leading-relaxed">{book.includes}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm">Ideal for:</h4>
                      <p className="text-emerald-700 text-xs font-medium bg-emerald-50 px-2 py-1 rounded">
                        {book.idealFor}
                      </p>
                    </div>
                    
                    <button 
                      disabled 
                      className="w-full border-2 border-gray-300 text-gray-500 py-3 rounded-lg cursor-not-allowed bg-white hover:bg-gray-50 transition-colors font-medium mt-4"
                    >
                       Coming Soon
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="mb-16 bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-2xl p-8 shadow-lg border border-emerald-100">
            <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">
              What Makes WrenchWise Editions Different?
            </h3>
            <div className="flex md:flex-col lg:flex-row flex-wrap items-center justify-center gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Coming Soon Section */}
          <div className="text-center bg-gradient-to-br from-cyan-50 to-emerald-50 rounded-2xl p-10 shadow-lg border border-cyan-100">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">More Coming Soon!</h3>
            <p className="text-gray-600 mb-6 text-lg max-w-2xl mx-auto">
              Books in Computer Science, AI/ML, and DADS domains are already in development. 
              Expect Full Stack prep guides, Python + DSA masterbooks, ML interview handbooks, and more.
            </p>
            <button 
              disabled 
              className="border-2 border-gray-400 text-gray-600 py-3 px-8 rounded-lg cursor-not-allowed bg-white hover:bg-gray-50 transition-colors font-medium inline-flex items-center text-lg"
            >
              <ArrowRight className="mr-3 h-5 w-5" />
              Stay Tuned - Coming Soon
            </button>
          </div>
        </div>
      </section>
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .filter {
          filter: blur(40px);
        }
        
        .delay-300 {
          transition-delay: 300ms;
        }
        
        .delay-500 {
          transition-delay: 500ms;
        }
      `}</style>
    </div>
  );
}

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { BookOpen, CheckCircle, ArrowRight } from "lucide-react";

// const books = [
//   {
//     number: "1",
//     title: "210+ Concepts to Crack the Design Engineer Role",
//     description:
//       "Your complete playbook for mastering part design, GD&T, plastics, sheet metal, mold design, and CATIA/NX workflows.",
//     includes: "Concept definitions, automotive examples, real-world analogies, and interview Q&As.",
//     idealFor: "Product Design, Plastics/Trim Engineers, CAD Interview Prep",
//   },
//   {
//     number: "2",
//     title: "200+ Concepts to Crack the FEA Simulation Engineer Role",
//     description:
//       "From meshing to modal analysis, crashworthiness to structural optimization - everything you need to master FEA interviews and real validation workflows.",
//     includes: "Hypermesh, ANSYS, LS-DYNA + Common solver workflows + CAE project tips",
//     idealFor: "CAE Trainees, Validation Engineers, Structural Analysts",
//   },
//   {
//     number: "3",
//     title: "200+ Concepts to Crack the CFD Simulation Engineer Role",
//     description:
//       "Understand the world of fluids, heat transfer, and aerodynamics - and how CFD plays a critical role in design validation.",
//     includes: "Fluent, OpenFOAM, Pre/Post, flow types, solver logic",
//     idealFor: "CFD Engineers, Thermal Simulation Interviews",
//   },
//   {
//     number: "4",
//     title: "Manufacturing & Quality in an Automotive OEM - Explained",
//     description:
//       "Get a first-hand understanding of how real manufacturing, PFMEA, shop-floor validation, and quality engineering happen in OEMs.",
//     includes: "VAVE, Control Plans, 7 QC Tools, Process Quality",
//     idealFor: "Manufacturing, Process Planning, Supplier Quality Roles",
//   },
//   {
//     number: "5",
//     title: "Automotive BIW - Explained for Engineers",
//     description:
//       "A part-by-part, function-by-function breakdown of Body-in-White. Learn hood, roof, door, and crash zones like a pro.",
//     includes: "Design logic, stamping & joining methods, load paths",
//     idealFor: "BIW Design, Manufacturing, and CAE Engineers",
//   },
//   {
//     number: "6",
//     title: "Automotive Plastics - A Designer's Reference",
//     description:
//       "From fascia to trims to pillars - understand plastic components from aesthetics to manufacturing constraints.",
//     includes: "Snap fits, ribbing, mold flow, injection molding, design defects",
//     idealFor: "Plastics Design, Tooling Coordination, Trim Engineers",
//   },
// ];

// const features = [
//   "Structured by Engineers, for Engineers",
//   "Includes examples, definitions, real-life comparisons",
//   "Practice Q&A to prepare you for interviews",
//   "Every book aligned with one or more job roles",
//   "Pairable with our courses and certification programs",
// ];

// export default function BooksPage() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <div className="min-h-screen bg-white">
      
//       {/* Hero Section */}
//       <section className="py-20 bg-gradient-to-br from-emerald-50 to-cyan-50 relative overflow-hidden">
//         {/* Animated background elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
//           <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
//           <div className="absolute top-40 left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
//         </div>
        
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className={`text-center max-w-4xl mx-auto transition-all duration-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
//             <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block hover:bg-emerald-300 transition-colors">
//               WrenchWise Editions
//             </span>
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Crack interviews. Deepen knowledge. Learn like never before.
//             </h1>
//             <p className="text-xl text-gray-600 mb-8">
//               At <span className="font-bold text-emerald-600">Wrench</span><span className="font-bold text-cyan-600">Wise</span>, we've distilled years of industry experience, 210+ expert-curated video scripts, and
//               real-world project learning into a new breed of technical books. These are not just reference guides -
//               they're crack-ready preparation handbooks built for modern engineering roles.
//             </p>
//             <p className="text-lg text-gray-500">
//               Whether you're preparing for core mechanical interviews, or diving deep into simulation, design, or
//               automotive product development, our books help you build the right foundation and confidence - with
//               structured learning and real examples.
//             </p>
//           </div>
//         </div>

//         {/* Animation styles */}
//         <style>{`
//           @keyframes blob {
//             0% { transform: translate(0px, 0px) scale(1); }
//             33% { transform: translate(30px, -50px) scale(1.1); }
//             66% { transform: translate(-20px, 20px) scale(0.9); }
//             100% { transform: translate(0px, 0px) scale(1); }
//           }
          
//           .animate-blob {
//             animation: blob 7s infinite;
//           }
          
//           .animation-delay-2000 {
//             animation-delay: 2s;
//           }
          
//           .animation-delay-4000 {
//             animation-delay: 4s;
//           }
          
//           .filter {
//             filter: blur(40px);
//           }
//         `}</style>
//       </section>

//       {/* Books Section */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               The First Mechanical Engineering Collection
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8 mb-16">
//             {books.map((book, index) => (
//               <div 
//                 key={index} 
//                 className="hover:shadow-lg transition-shadow border-l-4 border-l-emerald-600 bg-white rounded-lg shadow-md overflow-hidden"
//               >
//                 <div className="p-6">
//                   <div className="flex items-start space-x-3">
//                     <div>
//                       <h3 className="text-xl font-bold text-gray-900 mb-2">{book.title}</h3>
//                       <p className="text-gray-600 mb-4">{book.description}</p>
//                     </div>
//                   </div>
                  
//                   <div className="space-y-4">
//                     <div>
//                       <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
//                         <BookOpen className="h-4 w-4 mr-2 text-emerald-600" />
//                         Includes:
//                       </h4>
//                       <p className="text-gray-600 text-sm">{book.includes}</p>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-gray-900 mb-2">Ideal for:</h4>
//                       <p className="text-emerald-700 text-sm font-medium">{book.idealFor}</p>
//                     </div>
//                     <button 
//                       disabled 
//                       className="w-full border-2 border-gray-300 text-gray-500 py-2 px-4 rounded-md cursor-not-allowed bg-transparent"
//                     >
//                       Coming Soon
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* What Makes Different */}
//           <div className="mb-16 bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-lg p-6 shadow-md">
//             <h3 className="text-2xl font-bold text-center mb-6">What Makes WrenchWise Editions Different?</h3>
//             <div className="grid md:grid-cols-2 gap-4">
//               {features.map((feature, index) => (
//                 <div key={index} className="flex items-center space-x-3">
//                   <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
//                   <span className="text-gray-700">{feature}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Coming Soon */}
//           <div className="text-center bg-gradient-to-r from-cyan-50 to-emerald-50 rounded-lg p-8 shadow-md">
//             <h3 className="text-2xl font-bold mb-4">Coming Soon</h3>
//             <p className="text-gray-600 mb-6">
//               Books in Computer Science, AI/ML, and DADS domains are already in development. Expect Full Stack prep
//               guides, Python + DSA masterbooks, ML interview handbooks, and more.
//             </p>
//             <button 
//               disabled 
//               className="border-2 border-gray-300 text-gray-500 py-2 px-4 rounded-md cursor-not-allowed inline-flex items-center bg-transparent"
//             >
//               <ArrowRight className="mr-2 h-4 w-4" />
//               Coming Soon
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }