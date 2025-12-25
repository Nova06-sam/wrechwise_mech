import { Gift } from "lucide-react";
import { useState, useEffect } from "react";

export function FlashBanner() {
  const [isPaused, setIsPaused] = useState(false);

  // Add the animation styles to the document head
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes scroll-left {
        0% {
          transform: translateX(100%);
        }
        100% {
          transform: translateX(-100%);
        }
      }
      
      .animate-scroll-left {
        animation: scroll-left 30s linear infinite;
      }
      
      .animate-scroll-left.paused {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white py-2 px-4 relative overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-50 animate-pulse"></div>

      {/* Scrolling content container */}
      <div className="relative z-10 overflow-hidden">
        <div 
          className={`animate-scroll-left whitespace-nowrap flex ${isPaused ? 'paused' : ''}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Duplicate the content multiple times for seamless loop */}
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex items-center space-x-8 mr-16">
              <div className="flex items-center space-x-3">
                <Gift className="h-5 w-5 animate-bounce flex-shrink-0" />
                <span className="text-sm md:text-base font-medium">
                  Don't miss out! Tap the{" "}
                  <span className="font-bold bg-white text-emerald-600 px-2 py-1 rounded-md mx-1">Contact Us</span> button
                  for your exclusive offers.
                </span>
              </div>

              {/* Separator */}
              <div className="flex items-center space-x-3">
                <span className="text-cyan-200">★</span>
                <span className="text-sm font-medium">Limited Time Offer</span>
                <span className="text-cyan-200">★</span>
              </div>

              <div className="flex items-center space-x-3">
                <Gift className="h-5 w-5 animate-bounce flex-shrink-0" />
                <span className="text-sm md:text-base font-medium">
                  Exclusive engineering resources waiting for you!{" "}
                  <span className="font-bold bg-white text-emerald-600 px-2 py-1 rounded-md mx-1">Claim Now</span>
                </span>
              </div>

              {/* Additional separator */}
              <div className="flex items-center space-x-3">
                <span className="text-cyan-200">🎯</span>
                {/* <span className="text-sm font-medium">Join 2000+ successful engineers</span> */}
                <span className="text-cyan-200">🎯</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}