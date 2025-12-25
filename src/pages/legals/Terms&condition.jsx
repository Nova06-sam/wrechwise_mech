import React, { useState, useEffect } from 'react';
import { CheckCircle, Mail, Phone, Clock } from 'lucide-react';

const TermsAndConditions = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className={`transition-all duration-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {/* <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6 inline-block hover:bg-emerald-300 transition-colors shadow-md">
                WrenchWise - Terms & Conditions
              </span> */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Terms & Conditions
              </h1>
            </div>
            <div className={`transition-all duration-800 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
             
            </div>
            <div className={`transition-all duration-800 ease-out delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-emerald-100 shadow-lg">
                <p className="text-lg text-gray-700 mb-4">
                  Welcome to <span className='g1'> Wrench</span> <span className='g2'>Wise</span> ("Company", "we", "our"). These Terms and Conditions ("Terms") govern your access to and use of our website, digital content, books, LMS, subscriptions, and other services ("Services").
                </p>
                <p className="text-lg font-semibold text-emerald-700">
                  By using our Services, you agree to these Terms. If you do not agree, please discontinue use of the platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section 1 */}
          <div className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-emerald-600 bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing our website or using our Services-free or paid-you acknowledge that you have read, understood, and agree to these Terms.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-emerald-600 bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                2. Account Creation & Security
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Users may be required to create an account to access certain Services. You agree to:
              </p>
              <div className="space-y-3 mb-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Provide accurate information</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Maintain confidentiality of your login credentials</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Notify us if unauthorized access is suspected</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <span className='g1'>Wrench </span> <span className='g2'>Wise</span> is not responsible for losses caused by compromised accounts.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-emerald-600 bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                3. Subscriptions & Recurring Payments
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Some Services may operate on a subscription or recurring billing model. By subscribing, you agree to:
              </p>
              <div className="space-y-3 mb-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Authorize recurring charges</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Maintain valid payment information</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Cancel before the renewal date to avoid automatic renewal</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Subscription benefits and pricing may evolve as we improve features and offerings.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-emerald-600 bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                4. Use of Services
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree not to:
              </p>
              <div className="space-y-3 mb-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Copy, reproduce, modify, or distribute our content</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Sell or resell any <span className='g1'>Wrench</span> <span className='g2'>Wise</span> materials</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Share paid materials with unauthorized persons</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Misuse or disrupt the platform or LMS</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Engage in fraudulent activity</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Your access may be suspended for violating these conditions.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-emerald-600 bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                5. Intellectual Property
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All learning materials-books, diagrams, videos, frameworks, illustrations, visuals, downloadable content, and LMS content-are the exclusive property of <span className='g1'>Wrench</span> <span className='g2'>Wise</span>.
              </p>
              <p className="text-gray-700 leading-relaxed">
                No part of our content may be used for commercial or public distribution without written permission.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-emerald-600 bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                6. Payments & Billing
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Payments may include:
              </p>
              <div className="space-y-3 mb-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Subscription fees</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">One-time purchases</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Taxes or gateway charges</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                All payments must successfully process before access is granted.
              </p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-emerald-600 bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                7. Third-Party Tools & Integrations
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <span className='g1'>Wrench</span> <span className='g2'>Wise</span> may integrate with:
              </p>
              <div className="space-y-3 mb-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Payment gateways</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">LMS platforms</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Analytics tools</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Cloud hosting providers</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We are not responsible for interruptions, delays, or errors caused by these external systems.
              </p>
            </div>
          </div>

          {/* Section 8 */}
          <div className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-emerald-600 bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                8. Service Availability & Limitations
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Services may undergo maintenance or updates. We do not guarantee:
              </p>
              <div className="space-y-3 mb-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Uninterrupted access</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Error-free platforms</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Unlimited use of third-party tools embedded in our Services</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Some features depend on external platforms beyond our control.
              </p>
            </div>
          </div>

          {/* Section 9 */}
          {/* <div className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-emerald-600 bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                9. Institutional Contracts (B2A)
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Colleges, universities, or partners using our Services may be governed by separate contractual agreements. Where applicable, those agreements override terms that conflict with these general Terms.
              </p>
            </div>
          </div> */}

          {/* Section 10 */}
          <div className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-emerald-600 bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                9. Termination of Access
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may suspend or terminate user access if:
              </p>
              <div className="space-y-3 mb-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Misuse or unauthorized sharing of content is detected</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Fraudulent or suspicious activity occurs</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Payment failures remain unresolved</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Terms are violated</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                No refunds are provided for violations of Terms.
              </p>
            </div>
          </div>

          {/* Section 11 */}
          <div className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-emerald-600 bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                10. Indemnification
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree to indemnify <span className='g2'>Wrench</span> <span className='g2'>Wise</span> against claims, damages, or losses arising from:
              </p>
              <div className="space-y-3 mb-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Misuse of Services</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Unauthorized distribution of content</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Violation of these Terms</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 12 */}
          <div className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-emerald-600 bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                11. Updates to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may revise these Terms as our Services evolve. Continued use of the platform constitutes acceptance of updated Terms.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center bg-gradient-to-r from-cyan-50 to-emerald-50 rounded-2xl p-10 shadow-lg border border-cyan-100">
            <h3 className="text-3xl font-bold mb-8 text-gray-900">Contact Us</h3>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Email Section */}
              <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-emerald-100 hover:border-emerald-300">
                <div className="flex flex-col items-center">
                  <div className="bg-emerald-100 p-3 rounded-full mb-4 group-hover:bg-emerald-200 transition-colors">
                    <Mail className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Email Us</h4>
                  <a 
                    style={{textTransform:'lowercase'}}
                    href="mailto:hello@wrench-wise.com" 
                    className="text-emerald-600 hover:text-emerald-700 text-lg font-medium mb-2 transition-colors"
                  >
                    hello@wrench-wise.com
                  </a>
                  <div className="flex items-center gap-2 text-gray-600 mt-1">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm click">We'll respond within 24 hours</span>
                  </div>
                </div>
              </div>

              {/* Phone Section */}
              <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-emerald-100 hover:border-emerald-300">
                <div className="flex flex-col items-center">
                  <div className="bg-emerald-100 p-3 rounded-full mb-4 group-hover:bg-emerald-200 transition-colors">
                    <Phone className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Call or WhatsApp</h4>
                  <a 
                    href="tel:+917550077725" 
                    className="text-emerald-600 hover:text-emerald-700 text-lg font-medium mb-2 transition-colors"
                  >
                    +91 7550077725
                  </a>
                  <div className="flex gap-2 items-center text-gray-600 mt-1">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm click">Available Mon-Sat, 9 AM - 7 PM IST</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-emerald-200">
              <p className="text-gray-600 text-lg mb-4">
                Have questions about our Terms and Conditions?
              </p>
              <p className="text-gray-500">
                Our team is here to help clarify any points and assist you with any concerns.
              </p>
            </div>
          </div>

        </div>
      </section>

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
      `}</style>
    </div>
  );
};

export default TermsAndConditions;