import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";
import { FeaturedDomains } from "../components/ui/featureDom";
import { WhyChoose } from "../components/ui/whychoose";
import { CTA } from "../components/ui/cta";
export function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const blobStyle = {
    animation: 'blob 7s infinite'
  };

  const blobStyle2 = {
    animation: 'blob 7s infinite 2s'
  };

  const blobStyle4 = {
    animation: 'blob 7s infinite 4s'
  };

  return (
   <main className="">
    {/* hero */}
    <div className="py-20 bg-gradient-to-br from-emerald-50 to-cyan-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          style={blobStyle}
        ></div>
        <div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          style={blobStyle2}
        ></div>
        <div 
          className="absolute top-40 left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
          style={blobStyle4}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className={`transition-all duration-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Built by Engineers. <span className="text-emerald-600">Designed for Your Future.</span>
            </h1>
          </div>
          <div className={`transition-all duration-800 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
              Master Industry-Relevant Skills in Software, AI, and Mechanical Engineering.
            </h2>
          </div>
          <div className={`transition-all duration-800 ease-out delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              <span className="font-bold g1">Wrench</span>{" "}
              <span className="font-bold g2">Wise</span> empowers you with career-focused, project-based engineering education across CSE, Mechanical, and emerging tech domains.
            </p>
          </div>
          <div className={`transition-all duration-800 ease-out delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/domains/cse"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-lg font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center text-sm"
              >
                <ArrowRight className="mr-2 h-5 w-5" />
                Explore CSE Programs
              </Link>
              <button
                className="bg-transparent border-2 border-gray-300 text-gray-600 px-5 py-3 rounded-lg font-medium cursor-not-allowed opacity-60 flex items-center justify-center text-sm"
                disabled
              >
                <Zap className="mr-2 h-5 w-5" />
                Mechanical Programs - Coming Soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* about */}
    <div className="py-20 about bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            <span className="g1">Wrench</span> <span className="g2">Wise</span> - Bridging Education & Industry
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We're not just an EdTech company - we're an engineering upskilling ecosystem. Our goal is to make learners
            job-ready through real tools, hands - on projects, and mentorship from experienced industry professionals.
          </p>
        </div>
      </div>
    </div>
    {/*featureDomins*/}
    <FeaturedDomains/>
    {/* why choose us */}
    <WhyChoose/>
    {/* Cta  */}
    <CTA/>
   </main>
  );
}