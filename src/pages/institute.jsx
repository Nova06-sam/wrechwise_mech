import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  Users,
  Award,
  BookOpen,
  Briefcase,
  Code,
  Wrench,
  Target,
  Building,
  GraduationCap,
} from "lucide-react";

export default function InstitutePage() {
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className={`transition-all duration-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                <span className="font-bold g1">Wrench</span>
                <span className="font-bold g2">Wise</span>-Shaping College
              </h1>
              <span className="text-emerald-600 text-3xl md:text-5xl font-bold pb-10 block">
                Talent into Career - Ready Professionals
              </span>
            </div>
            <div className={`transition-all duration-800 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-xl md:text-2xl font-semibold text-gray-700 my-4">
                "Placements are not about luck - they are about preparation."
              </p>
            </div>
            <div className={`transition-all duration-800 ease-out delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                At <span className="g1">Wrench</span> <span className="g2">Wise</span>, we help colleges deliver placement-ready graduates by aligning learning with real job
                roles, sharpening student skills, and ensuring they stand out in technical, business, and core-sector
                interviews.
              </p>
            </div>
            <div className={`transition-all duration-800 ease-out delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/contact">
                  <button
                    className="bg-emerald-600 cursor-pointer  hover:bg-emerald-700 text-white px-5 py-3 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-medium text-lg"
                  >
                    Partner With Us
                  </button>
                </Link>
                <Link to="/domains/cse">
                  <button
                    className="border-2 border-gray-300 text-gray-600 hover:bg-gray-50 px-5 py-3  cursor-pointer rounded-lg transform hover:scale-105 transition-all duration-300 bg-transparent font-medium text-lg"
                  >
                    View Programs
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Add animation styles */}
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
          
          .delay-300 {
            transition-delay: 300ms;
          }
          
          .delay-500 {
            transition-delay: 500ms;
          }
          
          .delay-700 {
            transition-delay: 700ms;
          }
          
          .filter {
            filter: blur(40px);
          }
        `}</style>
      </section>

      {/* Unique Promise Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Unique Promise (UPV)</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlike generic training providers,<span className="g1">Wrench</span> <span className="g2">Wise</span> delivers comprehensive, placement-focused education
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* For Students Card */}
            <div className="text-center hover:shadow-2xl transition-shadow duration-300 bg-white rounded-lg p-6 shadow-md">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-emerald-600 mb-4">For Students</h3>
              <p className="text-gray-600">
                Gain the skills, confidence, and clarity to transition smoothly from college to career.
              </p>
            </div>

            {/* For Colleges Card */}
            <div className="text-center hover:shadow-2xl transition-shadow duration-300 bg-white rounded-lg p-6 shadow-md">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-emerald-600 mb-4">For Colleges</h3>
              <p className="text-gray-600">
                Position your institution as a hub of industry-ready graduates, improving placement outcomes and brand
                reputation.
              </p>
            </div>

            {/* For Parents Card */}
            <div className="text-center hover:shadow-2xl transition-shadow duration-300 bg-white rounded-lg p-6 shadow-md">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-emerald-600 mb-4">For Parents</h3>
              <p className="text-gray-600">
                Assurance that their child is not just studying, but also building a strong career pathway.
              </p>
            </div>
          </div>

          <div className="bg-white border-2 border-emerald-200 rounded-lg p-8 shadow-md hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What Makes Us Different</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Curriculum-aligned tracks (Engineering, Arts/Science, MBA)</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Last-mile placement sprints for final-year students</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  Deep-tech programs for Mechanical engineers (CFD, FEA, CAD Design)
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  Bootcamps for specific skills → Digital Marketing, CRM, Coding, Data Analytics
                </span>
              </div>
              <div className="flex items-start space-x-3 md:col-span-2">
                <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Custom-fit programs designed in partnership with each college</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Tracks Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Program Tracks</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive career paths designed for different academic backgrounds
            </p>
          </div>

          <div className="space-y-8">
            {/* Engineering Career Path */}
            <div className="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-50 p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Code className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-emerald-600 text-xl font-bold">1. Engineering Career Path</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Full 8-Sem Track:</h4>
                    <p className="text-gray-600">From coding & core engineering to projects & placements.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Final Year Tech Sprint (15 Days):</h4>
                    <p className="text-gray-600">
                      Intensive placement-focused prep for students already in interview season.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Arts & Science Tech Path */}
            <div className="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-50 p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-emerald-600 text-xl font-bold">
                      2. Arts & Science Tech Path (BSc CS / BCA)
                    </h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Full 6-Sem Track:</h4>
                    <p className="text-gray-600">
                      Foundations in programming, databases, web development, and capstone projects.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Final Year Sprint (15 Days):</h4>
                    <p className="text-gray-600">Fast-track training for immediate job readiness.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* MBA Career Accelerator */}
            <div className="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-50 p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-emerald-600 text-xl font-bold">3. MBA Career Accelerator</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">8-Week Program:</h4>
                    <p className="text-gray-600">
                      Digital tools, domain-specific training (Marketing, Finance, HR, Ops), simulations, and
                      placements.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">15-Day Interview Booster:</h4>
                    <p className="text-gray-600">Resume polish, GD, mock interviews, and case study prep.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mechanical Engineering Specialization */}
            <div className="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-50 p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Wrench className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-emerald-600 text-xl font-bold">4. Mechanical Engineering Specialization</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Advanced Tech Modules:</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-gray-900">CFD</h5>
                      <p className="text-sm text-gray-600">Computational Fluid Dynamics</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-gray-900">FEA</h5>
                      <p className="text-sm text-gray-600">Finite Element Analysis</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-gray-900">CAD/Design</h5>
                      <p className="text-sm text-gray-600">Engineering Design</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-4">
                    Programs built to make mechanical graduates industry-ready for core sector jobs.
                  </p>
                </div>
              </div>
            </div>

            {/* Bootcamp Model */}
            <div className="hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-50 p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Target className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-emerald-600 text-xl font-bold">5. Bootcamp Model (Value-Added Programs)</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Short-term intensive programs designed to enhance one specific skill set.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Examples:</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• CRM & Customer Success</li>
                      <li>• Digital Marketing</li>
                      <li>• Data Analytics</li>
                      <li>• Full-Stack Basics</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-600">Colleges use this as value-added coursework or job-ready bootcamps.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Colleges Partner With <span className="g1">Wrench</span> <span className="g2">Wise</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center hover:shadow-2xl transition-shadow duration-300 bg-white rounded-lg p-6 shadow-md">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Industry-Relevant Curriculum</h3>
              <p className="text-gray-600 text-sm">Updated with market trends, not outdated slides.</p>
            </div>

            <div className="text-center hover:shadow-2xl transition-shadow duration-300 bg-white rounded-lg p-6 shadow-md">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Placement-Driven Approach</h3>
              <p className="text-gray-600 text-sm">Every program is designed backward from job roles.</p>
            </div>

            <div className="text-center hover:shadow-2xl transition-shadow duration-300 bg-white rounded-lg p-6 shadow-md">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Flexible & Collaborative</h3>
              <p className="text-gray-600 text-sm">Curriculum is tailored to each college's need.</p>
            </div>

            <div className="text-center hover:shadow-2xl transition-shadow duration-300 bg-white rounded-lg p-6 shadow-md">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Comprehensive Coverage</h3>
              <p className="text-gray-600 text-sm">
                Engineering, Arts/Science, MBA, Mechanical core, and skill bootcamps under one umbrella.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Outcome</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                When students graduate under <span className="g1">Wrench</span> <span className="g2">Wise's</span> guidance, they are:
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                  <span className="text-lg text-gray-700">Confident communicators</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                  <span className="text-lg text-gray-700">Digitally skilled</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                  <span className="text-lg text-gray-700">Project-ready</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                  <span className="text-lg text-gray-700">Placement-prepared</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">For colleges, this means:</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                  <span className="text-lg text-gray-700">Stronger placement percentages</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                  <span className="text-lg text-gray-700">Higher student satisfaction</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                  <span className="text-lg text-gray-700">Elevated institutional reputation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            With <span className="g1">Wrench</span> <span className="g2">Wise</span>,colleges don't just produce graduates.
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-emerald-100">They produce industry-ready professionals.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button
                className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 rounded-lg"
              >
                Schedule a Partnership Call
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}