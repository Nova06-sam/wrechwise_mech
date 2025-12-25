import React, { useState, useEffect } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-10 sm:py-14 lg:py-10 relative overflow-hidden">
      <style>{`
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .slide-up { animation: slideUp 1s ease-out forwards; opacity: 0; }
        .delay-200 { animation-delay: 200ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-600 { animation-delay: 600ms; }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          style={{
            transition: 'all 800ms ease-out',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(32px)'
          }}
        >
          {/* Card Wrapper */}
          <div className="space-y-6 sm:space-y-8">
            {[ 
              { title: 'Our Why – What We Do', content: (
                <><span className='g1'>Wrench</span> <span className='g2'>Wise</span> is a next-generation EdTech company committed to transforming engineering education into real-world mastery.<br /><br />We believe true technical understanding comes from clarity, application, and hands-on thinking-far beyond memorising formulas.</>
              )},
              { title: 'Expert Foundation', content: (
                <>Founded by experts in automotive engineering, mechanical education, industrial quality systems, and learning design,<span className='g1'>Wrench</span> <span className='g2'>Wise</span> blends real-world experience with modern learning frameworks.</>
              )},
              { title: 'Learning Ecosystem', content: (
                <>Our ecosystem includes structured books, visual frameworks, and application-driven content that bridges academic learning with industry readiness.</>
              )},
              { title: 'Our Philosophy', content: (
                <>Engineering should be accessible, practical, and empowering. We help learners grow into confident engineers who can think independently and solve real problems.</>
              )}
            ].map((item, i) => (
              <div key={i} className={`slide-up delay-${(i + 1) * 200}`}>
                <div
                  className="bg-white/90 backdrop-blur-xl rounded-2xl border border-emerald-100 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl px-6 py-8 sm:px-10 sm:py-12"
                >
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-emerald-600 mb-6">
                    {item.title}
                  </h2>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed text-center">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;