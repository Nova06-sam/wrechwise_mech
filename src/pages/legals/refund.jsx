import React, { useState, useEffect } from 'react';
import { Mail, Phone, Clock } from 'lucide-react';

const SectionCard = ({ id, title, children, delay = 0 }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <section
      id={id}
      className={`group hover:shadow-lg transition-all duration-300 border-l-4 border-l-emerald-600 bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 mb-8 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
          {title}
        </h2>
        <div className="text-gray-700">{children}</div>
      </div>
    </section>
  );
};

const RefundPolicy = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className={`transition-all duration-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6 inline-block hover:bg-emerald-300 transition-colors shadow-md">
              REFUND & CANCELLATION POLICY — WRENCH WISE
            </span> */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight">Refund & Cancellation Policy</h1>
            
            <div className={`bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-emerald-100 shadow-lg transition-all ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <p className="text-lg text-gray-700">
                <span className='g1'>Wrench</span> <span className='g2'>Wise</span> offers specialized educational content. Please review our refund terms carefully before making a purchase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content container */}
      <main className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* 1. Digital Products */}
          <SectionCard id="digital-products" title="1. Digital Products (Books, PDFs, LMS Content)" delay={100}>
            <p>
              All digital products are <strong>non-refundable</strong> once delivered, as they cannot be returned.
            </p>
          </SectionCard>

          {/* 2. Courses, Workshops & Online Programs */}
          <SectionCard id="courses" title="2. Courses, Workshops & Online Programs" delay={200}>
            <p className="mb-3">Refunds may be approved if both of the following are true:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>The course has <strong>not been accessed</strong>.</li>
              <li>The request is made within <strong>48 hours</strong> of purchase.</li>
            </ul>
            <p className="mt-3">After accessing the content, refunds will not be provided.</p>
          </SectionCard>

          {/* 3. Subscription Services */}
          <SectionCard id="subscriptions" title="3. Subscription Services" delay={300}>
            <ul className="list-disc list-inside space-y-2">
              <li>Subscriptions renew automatically unless cancelled before the renewal date.</li>
              <li>Partial refunds are <strong>not</strong> provided for unused subscription periods.</li>
              <li>Subscription cancellations take effect at the end of the current billing cycle.</li>
            </ul>
          </SectionCard>

          {/* 4. Technical Issues */}
          <SectionCard id="technical-issues" title="4. Technical Issues" delay={400}>
            <p>
              If a technical issue caused by <span className='g1'>Wrench</span> <span className='g2'>wise</span> prevents access, we will assist in resolving it. If the issue remains unresolved, a refund <strong>may</strong> be considered at our discretion.
            </p>
            <p className="mt-2">Issues caused by third-party tools (LMS, AI tools, payment gateways) are <strong>not refundable</strong>.</p>
          </SectionCard>

          {/* 5. Duplicate Payments */}
          <SectionCard id="duplicate-payments" title="5. Duplicate Payments" delay={500}>
            <p>In cases of double charges, the duplicate payment will be fully refunded.</p>
          </SectionCard>

          {/* 6. Institutional / B2A Contracts */}
          {/* <SectionCard id="institutional" title="6. Institutional / B2A Contracts" delay={600}>
            <p>Refunds for colleges or institutions follow <strong>separate written agreements</strong>. Contract terms override these general refund rules.</p>
          </SectionCard> */}

          {/* 7. Non-Refundable Situations */}
          <SectionCard id="non-refundable" title="6. Non-Refundable Situations" delay={700}>
            <p>Refunds will <strong>not</strong> be issued for:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Change of mind</li>
              <li>Disliking content style</li>
              <li>Slow learning progress</li>
              <li>Misinterpretation of content</li>
              <li>External tool limitations (third-party AI platforms, outages, etc.)</li>
            </ul>
          </SectionCard>

          {/* 8. Cancellation by the Student */}
          <SectionCard id="cancellation-student" title="7. Cancellation by the Student" delay={800}>
            <p className="font-semibold">a) Before Course Commencement:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>If a student cancels at least <strong>7 days</strong> before the start of the course: → <strong>90% refund</strong> of the total course fee (10% retained as administrative charges).</li>
              <li>If a student cancels within <strong>7 days</strong> but before the course begins: → <strong>50% refund</strong> of the total course fee.</li>
              <li>If a student cancels less than <strong>24 hours</strong> before the course begins: → <strong>No refund</strong> will be issued.</li>
            </ul>

            <p className="mt-4 font-semibold">b)After Course Commencement:</p>
            <p className="mt-2">Once a course has started, <strong>no refund</strong> will be provided, regardless of attendance or participation.</p>
          </SectionCard>

          {/* 9. Refund Processing Time */}
          <SectionCard id="processing-time" title="8. Refund Processing Time" delay={900}>
            <p>Approved refunds are processed within <strong>7–10 business days</strong>.</p>
          </SectionCard>

          {/* 10. Contact */}
          <SectionCard id="contact" title="9. Contact" delay={1000}>
            <p>For refund and cancellation requests, contact our support team. Please include: name, email, order ID, and reason for refund.</p>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="group bg-gradient-to-br from-emerald-50 to-cyan-50 p-6 rounded-xl border border-emerald-200">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-full bg-emerald-100">
                    <Mail className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">Email</h4>
                    <a href="mailto:grievance@wrench-wise.com" className="text-emerald-600 hover:underline" style={{textTransform:'lowercase'}}>grievance@wrench-wise.com</a>
                    <p className="text-xs text-gray-600 mt-1">Include: name, email, order ID, and reason for refund.</p>
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-emerald-50 to-cyan-50 p-6 rounded-xl border border-emerald-200">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-full bg-emerald-100">
                    <Phone className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">Call / WhatsApp</h4>
                    <a href="tel:+917550077725" className="text-emerald-600 hover:underline">+91 75500 77725</a>
                    <p className="text-xs text-gray-600 mt-1">Available Mon–Sat, 9 AM–7 PM IST</p>
                  </div>
                </div>
              </div>
            </div>
          </SectionCard>

          <div className="mt-6 text-sm text-gray-500">These terms form part of your order agreement. In case of any conflict, the written contract (for institutional clients) will prevail.</div>
        </div>
      </main>

      {/* Styles (kept from PrivacyPolicy) */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .filter { filter: blur(40px); }
        .delay-300 { transition-delay: 300ms; }
        .delay-500 { transition-delay: 500ms; }
      `}</style>
    </div>
  );
};
export default RefundPolicy;