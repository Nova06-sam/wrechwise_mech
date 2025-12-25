import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";

const features = [
  "Industry-Driven Curriculum",
  "Hands-On Project Portfolios",
  "Placement Preparation & Mentorship",
  "Live + Self-Paced Learning Tracks",
  "Real-World Industry Tools & Software",
  "1-on-1 Career Guidance Sessions",
  "Alumni Network & Community Support",
  "Lifetime Access to Course Materials",
];

export function WhyChoose() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center max-w-4xl mx-auto mb-16 transition-all duration-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="font-bold g1">Wrench</span>{" "}
            <span className="font-bold g2">Wise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-100 transform border border-gray-100 hover:border-emerald-200 ${
                isVisible ? 'opacity-100 translate-y-0 hover:-translate-y-2' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                transitionDuration: '800ms'
              }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-100 shadow-lg flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors duration-100">
                  {feature}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add animation styles to global CSS */}
      {/* <style>{`
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style> */}
    </section>
  );
}