import React, { useState, useEffect } from 'react';

const AboutVersion = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
      {/* Background blobs (hidden on small screens for performance) */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        <div className="absolute -top-40 -right-40 w-72 h-72 lg:w-80 lg:h-80 rounded-full mix-blend-multiply blur-3xl opacity-70 bg-emerald-200 animate-[blob_7s_infinite]"></div>
        <div className="absolute -bottom-40 -left-40 w-72 h-72 lg:w-80 lg:h-80 rounded-full mix-blend-multiply blur-3xl opacity-70 bg-cyan-200 animate-[blob_7s_infinite_2s]"></div>
        <div className="absolute top-40 left-40 w-72 h-72 lg:w-80 lg:h-80 rounded-full mix-blend-multiply blur-3xl opacity-70 bg-blue-200 animate-[blob_7s_infinite_4s]"></div>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0,0) scale(1); }
          33% { transform: translate(30px,-50px) scale(1.1); }
          66% { transform: translate(-20px,20px) scale(0.9); }
          100% { transform: translate(0,0) scale(1); }
        }
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .slide-up { animation: slideUp 1s ease-out forwards; opacity: 0; }
        .delay-200 { animation-delay: 200ms; }
        .delay-400 { animation-delay: 400ms; }
      `}</style>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          style={{
            transition: 'all 800ms ease-out',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(32px)'
          }}
        >
          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Vision Card */}
            <div className="slide-up delay-200">
              <div className="h-full bg-white/90 backdrop-blur-xl rounded-2xl border border-emerald-100 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl p-6 sm:p-8 lg:p-12">
                <div className="flex justify-center mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-emerald-600 to-cyan-600">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2z" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-emerald-800 mb-4">
                  OUR ASPIRATIONS
                </h2>
                <div className="text-center mb-4">
                  <span className="inline-block px-4 py-1 rounded-full text-xs sm:text-sm font-medium bg-emerald-100 text-emerald-800">
                    To Become A Leading Global EdTech Platform
                  </span>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center">
                  That transforms technical learning into practical mastery. We empower learners everywhere to build confident, future-ready skills through clarity and real-world application.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="slide-up delay-400">
              <div className="h-full bg-white/90 backdrop-blur-xl rounded-2xl border border-emerald-100 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl p-6 sm:p-8 lg:p-12">
                <div className="flex justify-center mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-cyan-600 to-emerald-600">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-emerald-800 mb-4">
                  OUR PROMISES 
                </h2>
                <div className="text-center mb-4">
                  <span className="inline-block px-4 py-1 rounded-full text-xs sm:text-sm font-medium bg-emerald-100 text-emerald-800">
                    We Promise To Turn Learning Into Doing
                  </span>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center">
                  By delivering practical, immersive, and industry-aligned education that helps learners understand deeply, apply confidently, and lead tomorrow’s industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVersion;