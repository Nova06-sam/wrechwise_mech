import React, { useState, useEffect } from 'react';
import { CheckCircle, Mail, Phone, Clock } from 'lucide-react';

const PrivacyPolicy = () => {
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
                WrenchWise - Privacy Policy
              </span> */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Privacy Policy
              </h1>
            </div>
            <div className={`transition-all duration-800 ease-out delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-emerald-100 shadow-lg">
                <p className="text-lg text-gray-700 mb-4">
                 <span className='g1'>Wrench</span> <span className='g2'>Wise</span> ("Company", "we", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your information when you use our Services.
                </p>
                <p className="text-lg font-semibold text-emerald-700">
                  By accessing our Services, you agree to the practices described in this Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section 1 */}
          <div className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-emerald-600 bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                1. Information We Collect
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We may collect the following types of information:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-700">Name</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-700">Email address</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-700">Phone number</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-700">Educational details</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Usage Information</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-700">Login activity</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-700">Device/browser details</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-700">LMS interaction history</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-700">Navigation patterns</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Payment Information</h3>
                  <p className="text-gray-700">
                    Processed securely via third-party gateways. We do <strong>not</strong> store full payment details.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-emerald-600 bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We use your data to:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Provide learning materials and platform access</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Personalize the learning experience</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Improve content and platform features</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Communicate updates and support</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Process payments and subscriptions</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Ensure safety and performance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-emerald-600 bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                3. Third-Party Tools & Integrations
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may use third-party:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
                  <span className="text-gray-700">Website analytics tools</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Cloud hosting & data storage</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                These providers operate under their own privacy policies.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-emerald-600 bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                4. Cookies & Tracking
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and tracking technologies to:
              </p>
              <div className="space-y-3 mb-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Enhance website performance</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Improve navigation</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Analyze user behaviour</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                You may disable cookies in your browser settings, but some features may not function optimally.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-emerald-600 bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                5. Data Security
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We employ technical and administrative safeguards such as:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Encrypted data storage</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Secure servers</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Limited internal access</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Secure payment processing</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                While we work to protect your information, no system can guarantee absolute security.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-emerald-600 bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                6. Data Retention
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We retain your data for as long as necessary to:
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Provide Services</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Fulfill legal obligations</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Improve customer experience</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                You may request deletion, subject to limitations.
              </p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-emerald-600 bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                7. Sharing of Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do <strong>not sell</strong> your personal data.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                We may share information with:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Hosting providers</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">LMS platforms</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Payment gateways</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Legal authorities (if required)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 8 */}
          <div className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-emerald-600 bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                8. User Rights
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                You may request:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Access to your data</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Correction of inaccurate data</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Deletion of your data (where legally permitted)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Opt-out from marketing communication</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Requests can be made via email.
              </p>
            </div>
          </div>

          {/* Section 9 */}
          <div className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-emerald-600 bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                9. Communication Consent
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                By creating an account or interacting with our platform, you consent to receive:
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Learning updates</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Account notifications</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Support communication</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                You may unsubscribe at any time.
              </p>
            </div>
          </div>

          {/* Section 10 */}
          <div className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-emerald-600 bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                10. Updates to Policy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may modify this Privacy Policy as our Services evolve. Updates will be posted on this page.
              </p>
            </div>
          </div>

          {/* Section 11 - Contact */}
          <div className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-emerald-600 bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                11. Contact
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                For any questions about this Privacy Policy or your data, please contact us:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {/* Email Section */}
                <div className="group bg-gradient-to-br from-emerald-50 to-cyan-50 p-6 rounded-xl border border-emerald-200 hover:border-emerald-300 transition-colors">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-emerald-100 p-3 rounded-full mb-4 group-hover:bg-emerald-200 transition-colors">
                      <Mail className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Email Us</h4>
                    <a 
                      href="mailto:hello@wrench-wise.com" 
                      className="text-emerald-600 hover:text-emerald-700 text-lg font-medium mb-2 transition-colors"
                    >
                      hello@wrench-wise.com
                    </a>
                    <div className="flex items-center justify-center text-gray-600 mt-2">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">We'll respond within 24 hours</span>
                    </div>
                  </div>
                </div>

                {/* Phone Section */}
                <div className="group bg-gradient-to-br from-emerald-50 to-cyan-50 p-6 rounded-xl border border-emerald-200 hover:border-emerald-300 transition-colors">
                  <div className="flex flex-col items-center text-center">
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
                    <div className="flex items-center justify-center text-gray-600 mt-2">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">Available Mon-Sat, 9 AM - 7 PM IST</span>
                    </div>
                  </div>
                </div>
              </div>
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

export default PrivacyPolicy;