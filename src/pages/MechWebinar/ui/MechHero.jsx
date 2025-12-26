import React, { useState } from "react";

// Enrollment Form Component
const EnrollmentForm = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    background: "",
    learningGoals: "",
    companyName: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    setStep(5); // Show confirmation
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl">
        {/* Progress Steps */}
        <div className="sticky top-0 z-10 flex items-center justify-between bg-white px-8 pt-8 pb-4 border-b">
          <div className="flex items-center space-x-2">
            {[1, 2, 3].map((num) => (
              <React.Fragment key={num}>
                <div className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= num ? "bg-[#4051E8] text-white" : "bg-gray-200 text-gray-500"}`}>
                  {num}
                </div>
                {num < 3 && (
                  <div className={`h-1 w-12 ${step > num ? "bg-[#4051E8]" : "bg-gray-200"}`} />
                )}
              </React.Fragment>
            ))}
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Personal Details */}
          {step === 1 && (
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Enroll in OpenFOAM Bootcamp</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4051E8] focus:ring-2 focus:ring-[#4051E8]/20 outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4051E8] focus:ring-2 focus:ring-[#4051E8]/20 outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 1234567890"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4051E8] focus:ring-2 focus:ring-[#4051E8]/20 outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Country *
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4051E8] focus:ring-2 focus:ring-[#4051E8]/20 outline-none transition"
                    required
                  >
                    <option value="">Select country</option>
                    <option value="usa">United States</option>
                    <option value="in">India</option>
                    <option value="uk">United Kingdom</option>
                    <option value="de">Germany</option>
                    <option value="fr">France</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Professional Background *
                  </label>
                  <select
                    name="background"
                    value={formData.background}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4051E8] focus:ring-2 focus:ring-[#4051E8]/20 outline-none transition"
                    required
                  >
                    <option value="">Select your background</option>
                    <option value="engineer-senior">Senior Engineer</option>
                    <option value="engineer-junior">Junior Engineer</option>
                    <option value="student">Student</option>
                    <option value="researcher">Researcher</option>
                    <option value="academic">Academic</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Learning Goals (Optional)
                  </label>
                  <textarea
                    name="learningGoals"
                    value={formData.learningGoals}
                    onChange={handleInputChange}
                    placeholder="e.g., Simulate internal combustion engines, improve meshing skills..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4051E8] focus:ring-2 focus:ring-[#4051E8]/20 outline-none transition resize-none"
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="rounded-full bg-[#4051E8] px-8 py-3 font-semibold text-white hover:bg-[#3242c5] transition"
                >
                  Review Order
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Order Summary */}
          {step === 2 && (
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-6">
                <div className="rounded-xl border border-gray-200 p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Enrolled in:</h3>
                  <p className="text-lg font-bold text-[#4051E8] mb-4">OpenFOAM Fundamentals Bootcamp</p>
                  
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm text-gray-600">Dates:</span>
                      <p className="font-medium">Jan 30-31 2026 , Feb 1 2026</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Duration:</span>
                      <p className="font-medium">3 Days Intensive</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-gray-200 p-6">
                  <div className="mb-4">
                    <span className="text-lg font-bold text-gray-900">Total:</span>
                     <p className=" font-bold text-4xl text-[#4051E8] ">₹2,999</p>
                  </div>
                  
                </div>

                <div className="rounded-xl border border-gray-200 p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Your Details:</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Name:</span> {formData.fullName || "Not provided"}</p>
                    <p><span className="font-medium">Email:</span> {formData.email || "Not provided"}</p>
                    <p><span className="font-medium">Phone:</span> {formData.phone || "Not provided"}</p>
                    <p><span className="font-medium">Country:</span> {formData.country || "Not provided"}</p>
                    <p><span className="font-medium">Background:</span> {formData.background || "Not provided"}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="rounded-full border border-gray-300 px-8 py-3 font-semibold text-gray-700 hover:bg-gray-50 transition"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="rounded-full bg-[#4051E8] px-8 py-3 font-semibold text-white hover:bg-[#3242c5] transition"
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Payment Method */}
          {step === 3 && (
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Method</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-4">Select Payment Method</h3>
                  
                  <div className="space-y-4">
                    <label className="flex items-start space-x-3 p-4 rounded-lg border border-gray-300 hover:border-[#4051E8] cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        className="mt-1 text-[#4051E8] focus:ring-[#4051E8]"
                        defaultChecked
                      />
                      <div>
                        <p className="font-medium">Credit/Debit Card</p>
                        <p className="text-sm text-gray-600">Secure payment via Stripe</p>
                      </div>
                    </label>

                    <label className="flex items-start space-x-3 p-4 rounded-lg border border-gray-300 hover:border-[#4051E8] cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="upi"
                        className="mt-1 text-[#4051E8] focus:ring-[#4051E8]"
                      />
                      <div>
                        <p className="font-medium">UPI / Net Banking</p>
                        <p className="text-sm text-gray-600">Pay via Razorpay</p>
                      </div>
                    </label>

                    <label className="flex items-start space-x-3 p-4 rounded-lg border border-gray-300 hover:border-[#4051E8] cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="bank"
                        className="mt-1 text-[#4051E8] focus:ring-[#4051E8]"
                      />
                      <div>
                        <p className="font-medium">Bank Transfer</p>
                        <p className="text-sm text-gray-600">Direct bank transfer</p>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="rounded-xl bg-gray-50 p-6">
                  <h3 className="font-semibold text-gray-700 mb-2">Total Amount:</h3>
                  <p className="text-3xl font-bold text-[#4051E8] ">₹2,999</p>
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="rounded-full border border-gray-300 px-8 py-3 font-semibold text-gray-700 hover:bg-gray-50 transition"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="rounded-full bg-[#4051E8] px-8 py-3 font-semibold text-white hover:bg-[#3242c5] transition"
                >
                  Complete Enrollment
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {step === 5 && (
            <div className="p-8 text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Enrollment Confirmed!</h2>
              
              <div className="space-y-4 text-gray-600 mb-8">
                <p>
                  Thank you for enrolling in the OpenFOAM Fundamentals Bootcamp. We've sent a confirmation email to{" "}
                  <span className="font-semibold text-gray-900">{formData.email}</span> with all the details.
                </p>
                <p>
                  You will receive the bootcamp access link and preparation materials 24 hours before the start date.
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="rounded-full bg-[#4051E8] px-8 py-3 font-semibold text-white hover:bg-[#3242c5] transition"
              >
                Close
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

// Main Hero Component
export default function MechHero() {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-[#4051E8] text-white pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-20 lg:pb-28">
        {/* glow effects */}
        <div className="pointer-events-none absolute -top-32 -left-32 h-60 w-60 sm:h-72 sm:w-72 rounded-full bg-indigo-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 right-6 h-60 w-60 sm:h-72 sm:w-72 rounded-full bg-purple-300/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* LEFT CONTENT */}
            <div className="max-w-2xl">
              {/* badge */}
              <p className="mb-5 inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.25em]">
                3-Day Intensive Bootcamp
              </p>

              {/* heading */}
              <h1 className="text-2xl sm:text-3xl lg:text-[44px] font-extrabold leading-snug tracking-tight">
                Master OpenFOAM:
                <br className="hidden sm:block" />
                <span className="block sm:inline">
                  {" "}From Zero to Battery Cooling Simulation
                </span>
              </h1>

              {/* description */}
              <p className="mt-4 sm:mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-white/90">
                OpenFOAM is the industry standard for free, open-source CFD-but the
                learning curve is steep. Most students quit due to Linux complexity
                and confusing file structures.
              </p>

              {/* CTA */}
              <div className="mt-8 sm:mt-10">
                <button 
                  onClick={() => setIsEnrollmentOpen(true)}
                  className="rounded-full bg-white px-7 py-2.5 sm:px-8 sm:py-3 text-sm font-semibold text-[#4051E8] shadow-lg transition hover:bg-gray-100"
                >
                  Enroll now
                </button>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-sm sm:max-w-md rounded-[28px] bg-white p-6 sm:p-8 text-gray-900 shadow-[0_20px_60px_-15px_rgba(64,81,232,0.45)]">
                {/* header */}
                <div className="mb-3 sm:mb-4 flex items-center justify-between">
                  <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-[#4051E8]">
                    Bootcamp
                  </p>
                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-500">
                    Limited Seats
                  </span>
                </div>

                <p className="text-sm sm:text-base font-semibold leading-snug">
                  A 3-Day Intensive Bootcamp for Engineering Students &
                  Professionals
                </p>

                {/* price */}
                <div className="my-5 sm:my-6 rounded-2xl bg-gradient-to-r from-[#4051E8] to-[#5f6dff] px-5 py-4 sm:px-6 sm:py-5 text-white">
                  <p className="text-xs uppercase tracking-wider text-white/80">
                    Bootcamp Fee
                  </p>
                  <p className="mt-1 text-2xl sm:text-3xl font-extrabold">
                    ₹2,999
                  </p>
                </div>

                <p className="text-sm text-gray-600">
                  Limited seats available.{" "}
                  <span className="font-semibold text-[#4051E8]">
                    Secure your spot today!
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Modal */}
      <EnrollmentForm 
        isOpen={isEnrollmentOpen} 
        onClose={() => setIsEnrollmentOpen(false)} 
      />
    </>
  );
}