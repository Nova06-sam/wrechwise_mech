import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Monitor, Settings, ArrowRight } from "lucide-react";

const domains = [
  {
    icon: Monitor,
    title: "Computer Science & Software Engineering",
    description: "From Full Stack to AI-powered applications - we help you code smarter, faster, and better.",
    href: "/domains/cse",
    available: true,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Settings,
    title: "Mechanical Engineering",
    description: "Go beyond theory - learn to design, simulate, and optimize like the pros.",
    href: "#",
    available: false,
    gradient: "from-emerald-500 to-green-500",
  },
];

export function FeaturedDomains() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Domains</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {domains.map((domain, index) => (
            <div
              key={index}
              className={`group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg rounded-lg bg-white transform hover:-translate-y-2 ${
                isVisible 
                  ? index === 0 
                    ? 'opacity-100 translate-x-0 transition-all duration-800 delay-100' 
                    : 'opacity-100 translate-x-0 transition-all duration-800 delay-100'
                  : index === 0 
                    ? 'opacity-0 -translate-x-12' 
                    : 'opacity-0 translate-x-12'
              }`}
            >
              <div className="text-center pb-4 relative overflow-hidden rounded-t-lg">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${domain.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-t-lg`}
                ></div>
                <div className="relative z-10 pt-6">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${domain.gradient} p-3 transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    <domain.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all duration-300 px-4">
                    {domain.title}
                  </h3>
                </div>
              </div>
              <div className="text-center p-6 pt-0">
                <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  {domain.description}
                </p>
                {domain.available ? (
                  <Link
                    to={domain.href}
                    className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white px-6 py-3 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                ) : (
                  <div className="text-gray-500 font-medium">Coming Soon</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add these styles to your global CSS */}
      <style>{`
        .delay-200 {
          transition-delay: 200ms;
        }
        
        .delay-400 {
          transition-delay: 400ms;
        }
      `}</style>
    </section>
  );
}