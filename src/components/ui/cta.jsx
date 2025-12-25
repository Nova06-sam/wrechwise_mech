import { Link } from "react-router-dom";
import { ArrowRight, Phone, Users, Award, Target, Rocket } from "lucide-react";

const journeySteps = [
  {
    icon: Target,
    title: "Discover",
    description: "Choose your domain: Mechanical, CS, DADS, or AI+ML - based on your goals and interests.",
  },
  {
    icon: Users,
    title: "Learn",
    description:
      "Get started with mentor-guided live programs or self-paced learning tracks designed by industry professionals.",
  },
  {
    icon: Award,
    title: "Apply",
    description: "Work on hands-on projects, tackle real-world challenges, and build your personal portfolio.",
  },
  {
    icon: Users,
    title: "Prepare",
    description:
      "Join our career readiness bootcamp with resume reviews, mock interviews, and profile-building sessions.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "Apply confidently to job roles, internships, or higher education with a portfolio that speaks for itself.",
  },
];

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 to-cyan-600 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Engineering Career?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            From Exploration to Placement – What Your Learning Path Looks Like
          </p>
        </div>

        {/* Desktop: 5-column layout */}
        <div className="hidden lg:flex justify-between items-start space-x-6 mb-12">
          {journeySteps.map((step, index) => (
            <div key={index} className="flex-1 text-center group">
              <div className="mb-4 relative">
                {/* Connecting line (except for last item) */}
                {index < journeySteps.length - 1 && (
                  <div className="absolute top-8 left-1/2 w-full h-0.5 bg-white/30 transform translate-x-8"></div>
                )}
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 transform group-hover:scale-110 transition-all duration-300 group-hover:bg-white/30 relative z-10">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-50 transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-emerald-100 group-hover:text-white transition-colors">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: Vertical stack */}
        <div className="lg:hidden space-y-8 mb-12">
          {journeySteps.map((step, index) => (
            <div key={index} className="flex items-start space-x-4 group">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                  <step.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="text-lg font-semibold text-white group-hover:text-emerald-50 transition-colors">
                    {step.title}
                  </h3>
                </div>
                <p className="text-emerald-100 group-hover:text-white transition-colors">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/contact"
            className="inline-flex items-center bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ArrowRight className="mr-2 h-5 w-5" />
            Start Your Journey
          </Link>
          <a
            href="https://wa.me/917358102193?text=Hi! I'm interested in WrenchWise programs. Can you help me?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-lg font-medium transform hover:scale-105 transition-all duration-300"
          >
            <Phone className="mr-2 h-5 w-5" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}