import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Clock, Users, Award, Download, ArrowRight, CreditCard, MessageCircle, ChevronUp, ChevronDown, BookAIcon } from "lucide-react";

const phases = [
  {
    phase: "Phase 0",
    title: "Foundations of Full-Stack Development",
    duration: "Days 1–30",
    DSA: "",
    prompt: "",
    subheading: [{
      title: "Capstone",
      content: "Personal Blog Application"
    }],
    topics: [
      "Introduction to Programming",
      "HTML5 & CSS3 Basics",
      "JavaScript Essentials",
      "Version Control (Git/GitHub)",
      "Responsive Web Design (Bootstrap)",
      "Introduction to Node.js",
      "Databases (MongoDB)",
      "Basic Deployment",
    ],
    capstone: "Every student can select one option below.",
    scroll: ["Personal Portfolio Website",
      "Basic Blogging Platform",
      "To-Do List Application",
      "Weather App",
      "Library Management System",
      "Recipe Sharing Website",
      "Interactive Quiz App",
      "Basic E-commerce Product Listing",
      "Fitness Tracker",
      "Expense Tracker",
    ],
  },
  {
    phase: "Phase 1",
    title: "Advanced MERN Stack Development",
    duration: "Days 31–60",
    DSA: "Arrays , strings , linked lists",
    prompt: "",
    subheading: [
      {
        title: "Capstone",
        content: "Personal Blog Application"
      },
    ],
    topics: [
      "Advanced JavaScript",
      "React.js Basics",
      "Redux for State Management",
      "Authentication & Authorization",
      "Advanced Node.js & Express.js",
    ],
    capstone: "Every student can select one option below.",
    scroll: [
      "E-commerce Store",
      "Social Media Application",
      "Job Portal",
      "Online Learning Platform",
      "Chat Application",
      "Expense Management System",
      "Event Management App",
      "Personal Finance Advisor",
      "Task Management System",
      "Content Management System(CMS)",
    ]
  },
  {
    phase: "Phase 2",
    title: "AI/ML with Full Stack Integration",
    duration: "Days 61–90",
    DSA: "Sorting, Searching",
    prompt: "AI debugging, API optimization using prompts.",
    subheading: [
      {
        title: "Capstone",
        content: "Personal Blog Application",
      },
    ],
    topics: ["Python Basics for AI/ML", "Machine Learning Basics", "AI with TensorFlow", "Integrating AI with MERN"],
    capstone: "Every student can select one option below.",
    scroll: [
      "IoT Home Automation Dashboard",
      "Blockchain-based Voting System",
      "Cybersecurity Threat Tracker",
      "Cloud-Powered File Storage System",
      "Smart Contract for Crowdfunding",
      "Real-time Analytics Dashboard",
      "Secure Payment Gateway",
      "Kubernetes-Based Microservices App",
      "Predictive Maintenance for IoT Devices",
      "AR/VR Product Showcase",
    ]
  },
  {
    phase: "Phase 3",
    title: "Future Tech & Industry Alignment",
    duration: "Days 91–120",
    DSA: "Dynamic Programming, Graphs",
    prompt: "Deployment optimization and DevOps with AI prompts.",
    subheading: [
      {
        title: "Capstone",
        content: "IoT Dashboard for Smart Device Monitoring"
      },
    ],
    topics: ["DevOps Basics", "Cloud Computing (AWS/GCP)", "Blockchain Basics", "Cybersecurity Essentials"],
    capstone: "Every student can select one option below.",
    scroll: [
      "Cloud-Native Application",
      "Microservices Architecture",
      "Blockchain-Based Voting System",
      "Smart Home Automation",
      "Real-time Analytics Platform",
      "Multi-cloud Deployment",
      "Secure Payment Gateway",
      "IoT Health Monitoring",
      "Decentralized Application (dApp)",
      "AI-Ops Monitoring System"
    ]
  },
];

const pricingOptions = [
  {
    type: "Full Program",
    price: "₹90,000",
    originalPrice: "₹1,20,000",
    description: "Complete 4-phase program with all capstone projects",
    features: ["All 4 Phases", "4 Capstone Projects", "Career Services", "Lifetime Access", "Future Tech Included", "AI/ML Integration Included"],
    popular: true,
  },
  {
    type: "Individual Phase",
    price: "₹25,000",
    originalPrice: "₹30,000",
    description: `You can choose any single phase based on your needs`,
    features: ["1 Phase Access", "Phase Capstone", "Community Access", "30-day Support"],
    popular: false,
  },
];

export default function FullStackPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [viewStates, setViewStates] = useState({}); // Track view state for each phase

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Toggle view for specific phase
  const toggleView = (phaseIndex) => {
    setViewStates(prev => ({
      ...prev,
      [phaseIndex]: !prev[phaseIndex]
    }));
  };

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
              Full Stack 4.0 @ <span className="font-bold g1">Wrench</span><span className="font-bold g2">Wise</span>
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">The Code. The Craft. The Career.</h1>
            <div className={`transition-all duration-800 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-xl text-gray-600 mb-8">
                From Frontend to Future-Tech. This isn't just full stack-it's Full Stack 4.0.
              </p>
            </div>
            <div className={`transition-all duration-800 ease-out delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-lg text-gray-500 mb-8">
                Welcome to the Full Stack 4.0 program-<span className="g1">Wrench</span> <span className="g2">Wise's</span> flagship course that blends MERN Stack expertise, AI
                Integration, and Future Tech readiness in a single, power-packed journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Program Structure: 4 Phases of Mastery
            </h2>
          </div>

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div key={index} className="hover:shadow-2xl transition-all duration-300 bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-emerald-500 text-white text-lg px-4 py-2 rounded-full font-medium">
                    {phase.phase}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {phase.duration}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">{phase.title}</h3>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 text-lg">Topics Covered:</h4>
                    <ul className="space-y-3">
                      {phase.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mr-3 flex-shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>

                    {phase.DSA && phase.DSA.length >= 1 && (
                      <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200 mt-6">
                        <h4 className="font-bold text-lg text-emerald-900 mb-2">DSA Topics:</h4>
                        <p className="text-emerald-800 font-medium">{phase.DSA}</p>
                        {phase.prompt && phase.prompt.length >= 1 && (
                          <div className="mt-4">
                            <h4 className="font-bold text-lg text-emerald-900 mb-2">Prompt Engineering Topics:</h4>
                            <p className="text-emerald-800 font-medium">{phase.prompt}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Scroll Bar Section */}
                  <div className="space-y-4">
                    <div className="bg-emerald-100 rounded-lg border border-emerald-300 overflow-hidden">
                      <div className="s-top p-4 flex justify-between items-center cursor-pointer hover:bg-emerald-200 transition-colors"
                        onClick={() => toggleView(index)}>
                        <div className="s-t-left">
                          <h4 className="font-semibold text-gray-900 text-lg mb-1">Capstone Project</h4>
                          <p className="text-emerald-800 font-medium">{phase.capstone}</p>
                        </div>
                        <button className="cursor-pointer rounded-lg p-1 hover:bg-emerald-300 transition-colors">
                          {viewStates[index] ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                        </button>
                      </div>

                      {/* Scroll Bar - Conditionally Rendered */}
                      {viewStates[index] && phase.scroll && phase.scroll.length > 0 && (
                        <div className="border-t border-emerald-300">
                          <div className="p-4 scroll overflow-y-auto">
                            <div className="space-y-2">
                              {phase.scroll.map((item, i) => (
                                <div key={i} className="flex items-center text-sm text-gray-700 py-1">
                                  <CheckCircle className="h-3 w-3 text-emerald-600 mr-2 flex-shrink-0" />
                                  <span className="text-sm">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Outcomes of Full Stack 4.0</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center p-4 bg-white rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
              <span className="font-medium text-gray-900">Hands-on MERN Stack development</span>
            </div>
            <div className="flex items-center p-4 bg-white rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
              <span className="font-medium text-gray-900">AI-enhanced applications</span>
            </div>
            <div className="flex items-center p-4 bg-white rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
              <span className="font-medium text-gray-900">Real deployment experience</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
            <div className="flex items-center p-4 bg-white rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
              <span className="font-medium text-gray-900">Project-based GitHub portfolio</span>
            </div>
            <div className="flex items-center p-4 bg-white rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
              <span className="font-medium text-gray-900">Interview-readiness</span>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Program Details</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <div className="font-medium">Duration</div>
                    <div className="text-sm text-gray-600">120 Days</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <div className="font-medium">Mode</div>
                    <div className="text-sm text-gray-600">Live Online + Mentorship</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <div className="font-medium">Projects</div>
                    <div className="text-sm text-gray-600">4 Capstones + Mini Challenges</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <div className="font-medium">Career Services</div>
                    <div className="text-sm text-gray-600">Resume, Mock Interviews, Job Referrals</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Learning Path</h2>
            <p className="text-xl text-gray-600">Flexible options to match your goals and budget</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingOptions.map((option, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-lg shadow-lg p-6 border-2 transition-all duration-300 hover:shadow-2xl ${option.popular ? "border-emerald-500 transform -translate-y-2" : "border-gray-200"
                  }`}
              >
                {option.popular && (
                  <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{option.type}</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-emerald-600">{option.price}</span>
                    <span className="text-lg text-gray-500 line-through ml-2">{option.originalPrice}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{option.description}</p>
                </div>

                <div className="space-y-4">
                  <ul className="space-y-3 mb-6">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-4">
                    {/* <Link to="/checkout">
                      <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center">
                        <BookAIcon className="mr-2 h-4 w-4" />
                         enroll
                      </button>
                    </Link> */}
                    <Link
                      to="/checkout"
                      state={{
                        selectedProgram: option
                      }}
                    >
                      <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center">
                        <BookAIcon className="mr-2 h-4 w-4" />
                        Enroll
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Ready to unlock Full Stack 4.0?</p>
            <p className="text-lg font-semibold text-gray-900 mb-6">
              Code it. Build it. Ship it. That's the <span className="font-bold g1">Wrench</span> <span className="font-bold g2">Wise</span> way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="bg-cyan-600 hover:bg-cyan-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Book a Demo
                </button>
              </Link>
            </div>
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

        .g1 {
          color: #059669;
        }

        .g2 {
          color: #0d9488;
        }
      `}</style>
    </div>
  );
}