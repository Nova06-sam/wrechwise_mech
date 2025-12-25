import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Code, Brain, BarChart3, ArrowRight, CheckCircle, Users, Award } from "lucide-react";

const programs = [
  {
    icon: Code,
    title: "Full Stack 4.0",
    description: "Build web apps from scratch. MERN Stack Mastery + Deployment + Capstone projects.",
    features: ["4 Phases of Mastery", "120 Days Program", "AI Integration", "Real Deployment"],
    href: "/programs/full-stack",
    available: true,
  },
  {
    icon: Brain,
    title: "AI Core 5.0",
    description: "Dive into machine learning, deep learning, model integration, and real-world AI.",
    features: ["5 Powerful Phases", "CV/NLP/BI Tracks", "Cloud Deployment", "Industry Projects"],
    href: "/programs/ai-core",
    available: false,
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Business Intelligence meets code. Python, Power BI, SQL, and data storytelling.",
    features: ["Coming Soon", "Advanced Analytics", "BI Dashboards", "Data Storytelling"],
    href: "#",
    available: false,
  },
];

const highlights = [
  {
    icon: CheckCircle,
    title: "Industry-First Curriculum",
    description: "From Full Stack Development to AI, Data Analytics, and Cloud-battle-tested by tech.",
  },
  {
    icon: Users,
    title: "Mentorship by Builders",
    description: "Learn from those who've shipped code, cracked systems, and scaled startups.",
  },
  {
    icon: Award,
    title: "Real-Time Project Ecosystem",
    description: "Every module packed with projects that mimic real-world challenges.",
  },
];

export default function CSEPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-cyan-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
              CSE @ <span className="font-bold g1">Wrench</span><span className="font-bold g2">Wise</span>
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Not just a stream. It's the code that runs the world.
            </h1>
            <div className={`transition-all duration-800 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-xl text-gray-600 mb-8">
                Welcome to the Computer Science & Engineering (CSE) experience at <span className="g1">Wrench</span><span className="g2"> Wise</span>-where we don't just prepare
                you for jobs, we prep you to define the future.
              </p>
            </div>
            <div className={`transition-all duration-800 ease-out delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-lg text-gray-500 mb-8">
                At <span className="font-bold g1">Wrench</span> <span className="font-bold g2">Wise</span>, we see CSE as more than algorithms and code-it's a powerful mindset. It's logic, innovation,
                problem-solving, and creativity fused with real-world application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why CSE + Wrench Wise */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-4">
              Why CSE + <span className="font-bold g1">Wrench</span> <span className="font-bold g2">Wise</span> = <span className="font-bold ">Unstoppable</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {highlights.map((highlight, index) => (
              <div 
                key={index} 
                className="text-center hover:shadow-2xl transition-all duration-300 bg-white rounded-lg shadow-lg p-6 transform hover:-translate-y-2"
              >
                <highlight.icon className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-2xl p-8 mb-16 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Beyond the Code</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                    GitHub-ready profiles
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                    Personal branding & product demos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                    Mock interviews & AI-assisted debugging
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                    Your own tech identity
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 hover:shadow-2xl transition-all duration-300 shadow-lg transform hover:scale-105">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">At <span className="g1">Wrench </span> <span className="g2">Wise</span> </h4>
                  <p className="text-gray-600">
                    CSE isn't just about getting placed. It's about becoming irreplaceable in tomorrow's tech workforce.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Path</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select from our industry-designed programs to kickstart your tech career
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div 
                key={index} 
                className="hover:shadow-2xl transition-all duration-300 bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2"
              >
                <div className="p-6">
                  <program.icon className={`h-12 w-12 mb-4 ${program.available ? "text-cyan-600" : "text-gray-400"}`} />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  
                  <div className="space-y-4">
                    <ul className="space-y-2">
                      {program.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    {program.available ? (
                      <Link 
                        to={program.href}
                        className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 px-4 rounded-md font-medium transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
                      >
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    ) : (
                      <button 
                        disabled 
                        className="w-full border-2 border-gray-300 text-gray-500 py-3 px-4 rounded-md cursor-not-allowed bg-transparent font-medium"
                      >
                        Coming Soon
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animation Styles */}
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