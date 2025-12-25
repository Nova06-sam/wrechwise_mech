import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  Clock,
  Users,
  Award,
  Palette,
  Code,
  Figma,
  ArrowRight,
  Star,
  Zap,
  Sparkles,
  Timer,
  Gift,
} from "lucide-react";

const highlights = [
  {
    icon: Palette,
    title: "Master the Complete UX Process",
    description: "From user research to final prototype - learn industry-standard methodologies that top companies use",
  },
  {
    icon: Code,
    title: "Design AI-First Interfaces",
    description: "Create cutting-edge interfaces for AI & SaaS applications that users love and convert",
  },
  {
    icon: Figma,
    title: "Build Portfolio-Ready Projects",
    description: "Walk away with 2-3 professional projects that showcase your skills to potential employers",
  },
  {
    icon: ArrowRight,
    title: "Fast-Track to Full Stack",
    description: "Seamlessly transition to our Full Stack 4.0 program and become a complete product builder",
  },
];

const stats = [
  { number: "15", label: "Days Only", icon: Timer },
  { number: "1.5", label: "Hours Daily", icon: Clock },
  { number: "100%", label: "Live & Interactive", icon: Users },
  { number: "2-3", label: "Portfolio Projects", icon: Award },
];

const bonuses = [
  "Lifetime access to all session recordings",
  "Exclusive UI/UX toolkit worth $297",
  "1-on-1 portfolio review session",
  "Direct access to our design community",
  "Early bird access to Full Stack 4.0",
  "Certificate of completion",
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Designer at Google",
    text: "This bootcamp completely transformed my design skills. I landed a $85k job within 2 months!",
    rating: 5,
  },
  {
    name: "Mike Rodriguez",
    role: "UX Designer at Spotify",
    text: "The hands-on approach and real projects made all the difference. Highly recommended!",
    rating: 5,
  },
  {
    name: "Emily Johnson",
    role: "Design Lead at Airbnb",
    text: "Best investment I made in my career. The mentorship was invaluable.",
    rating: 5,
  },
];

export default function WebinarClientPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 animate-pulse"></div>
          <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/30 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/30 rounded-full blur-xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-500/20 rounded-full blur-2xl animate-spin-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center flex flex-col justify-center items-center max-w-4xl mx-auto">
            <div className={`transition-all duration-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white mb-6 px-6 py-2 rounded-full text-lg font-medium flex justify-center items-center animate-bounce">
                <Gift className="mr-2 h-5 w-5" />
                Limited Time - 67% OFF
              </div>
            </div>

            <div className={`transition-all duration-800 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                Master UI/UX Design in Just 15 Days
              </h1>
            </div>

            <div className={`transition-all duration-800 ease-out delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-2xl md:text-3xl font-semibold text-purple-200 mb-6">
                Design Next-Gen Interfaces for AI & Future Tech Products
              </h2>
            </div>

            <div className={`transition-all duration-800 ease-out delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join 500+ designers who transformed their careers with our intensive bootcamp. Learn from industry
                experts, build real projects, and land your dream design job.
              </p>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 transition-all duration-800 ease-out delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center transform hover:scale-105 transition-all duration-300">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <stat.icon className="h-8 w-8 text-purple-300 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-white">{stat.number}</div>
                    <div className="text-purple-200 text-sm">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className={`transition-all duration-800 ease-out delay-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/webinar/checkout">
                  <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center text-lg animate-pulse-glow">
                    <Zap className="mr-2 h-6 w-6" />
                    Enroll Now - $97 Only
                  </button>
                </Link>
                <div className="text-center">
                  <div className="text-gray-400 line-through text-lg">Regular Price: $297</div>
                  <div className="text-green-400 font-bold">You Save: $200</div>
                </div>
              </div>
            </div>

            {/* Urgency Timer */}
            <div className={`mt-8 transition-all duration-800 ease-out delay-1800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="bg-red-600/20 border border-red-500/30 rounded-lg p-4 max-w-md mx-auto">
                <div className="flex items-center justify-center text-red-300 mb-2">
                  <Timer className="mr-2 h-5 w-5" />
                  <span className="font-semibold">Offer Expires Soon!</span>
                </div>
                <div className="text-white text-sm">Only 23 spots left at this price</div>
              </div>
            </div>
          </div>
        </div>

        {/* Animation Styles */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          
          @keyframes float-delayed {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-30px); }
          }
          
          @keyframes spin-slow {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
          }
          
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.4); }
            50% { box-shadow: 0 0 40px rgba(168, 85, 247, 0.8); }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          .animate-float-delayed {
            animation: float-delayed 8s ease-in-out infinite;
          }
          
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
          
          .animate-pulse-glow {
            animation: pulse-glow 2s ease-in-out infinite;
          }
          
          .delay-300 {
            transition-delay: 300ms;
          }
          
          .delay-600 {
            transition-delay: 600ms;
          }
          
          .delay-900 {
            transition-delay: 900ms;
          }
          
          .delay-1200 {
            transition-delay: 1200ms;
          }
          
          .delay-1500 {
            transition-delay: 1500ms;
          }
          
          .delay-1800 {
            transition-delay: 1800ms;
          }
        `}</style>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-xl font-semibold">4.9/5</span>
            </div>
            <p className="text-gray-300">
              "This bootcamp completely transformed my design skills. I landed a $85k job within 2 months!"
              <span className="text-purple-400 font-semibold"> - Sarah Chen, Product Designer at Google</span>
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Transform Your Career in Just 15 Days</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our intensive program is designed to take you from beginner to job-ready designer with real portfolio
              projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 bg-white rounded-lg shadow-lg p-6 transform hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-x-0' : index % 2 === 0 ? 'opacity-0 -translate-x-8' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-lg transform group-hover:scale-110 transition-transform duration-300">
                    <highlight.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                      {highlight.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">See how our students transformed their careers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Exclusive Bonuses Worth $897</h2>
            <p className="text-xl text-purple-200">Get these incredible bonuses when you enroll today</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bonuses.map((bonus, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 transform hover:scale-105 transition-all duration-300 hover:bg-white/15"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="font-medium">{bonus}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Future?</h2>
          <p className="text-xl mb-8 text-pink-100">
            Join hundreds of successful designers who started their journey with us
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="text-6xl font-bold mb-2">$97</div>
            <div className="text-gray-300 line-through text-xl mb-2">Regular: $297</div>
            <div className="text-green-300 font-semibold text-lg">Limited Time: 67% OFF</div>
          </div>

          <Link to="/webinar/checkout">
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-12 py-4 rounded-lg text-xl font-bold transition-all duration-300 hover:scale-105 shadow-2xl flex items-center justify-center mx-auto">
              <Sparkles className="mr-2 h-6 w-6" />
              Secure My Spot Now
            </button>
          </Link>

          <div className="mt-6 text-pink-200">
            <p>30-day money-back guarantee • Secure payment • Instant access</p>
          </div>
        </div>
      </section>

    </div>
  );
}