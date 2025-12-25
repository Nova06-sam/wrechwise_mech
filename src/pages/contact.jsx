import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Mail, Phone, Send } from "lucide-react";
import axios from "axios";

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      Name: "",
      email: "",
      phone: "",
      interest: "",
      message: ""
    }
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Enhanced validation rules
  const validationRules = {
    Name: {
      required: "Full name is required",
      minLength: {
        value: 2,
        message: "Name must be at least 2 characters"
      },
      maxLength: {
        value: 50,
        message: "Name must be less than 50 characters"
      },
      pattern: {
        value: /^[a-zA-Z\s]*$/,
        message: "Name can only contain letters and spaces"
      }
    },
    email: {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address"
      }
    },
    phone: {
      required: "Phone number is required",
      pattern: {
        value: /^[\+]?[1-9][\d]{0,15}$|^[\+]?[(]?[\d\s\-\(\)]{10,}$/,
        message: "Please enter a valid phone number"
      },
      minLength: {
        value: 10,
        message: "Phone number must be at least 10 digits"
      },
      maxLength: {
        value: 15,
        message: "Phone number must be less than 15 digits"
      }
    },
    interest: {
      required: "Please select an area of interest"
    },
  };

  const onSubmit = async (data) => {
    // Trigger validation for all fields
    const isValid = await trigger();

    if (!isValid) {
      toast.error("❌ Please fix the errors in the form before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Show loading toast
      const loadingToast = toast.loading("📤 Sending your message...");

      // Prepare data for backend
      const submitData = {
        name: data.Name,
        email: data.email,
        phone: data.phone,
        interest: data.interest,
        message: data.message,
        subject: `New Contact Form: ${data.interest}`,
        timestamp: new Date().toISOString(),
        source: "website-contact-form"
      };

      setFormData(submitData);

      console.log("Sending form data to backend:", submitData);

      // Send data to your backend API
      const response = await axios.post(
        // 'http://localhost:5000/api/brevo/send-email'
"           https://wrenchwisefinal.onrender.com/api/brevo/send-email",
            { payload: submitData });

      // Dismiss loading toast
      toast.dismiss(loadingToast);

      if (response.data.success) {
        console.log("Form submitted successfully:", response.data);

        toast.success("🎉 Thank you! Your message has been sent successfully. We'll get back to you within 24 hours!");
        reset();
      } else {
        throw new Error(response.data.message || 'Form submission failed');
      }

    } catch (error) {
      console.error("Form submission failed:", error);

      // Enhanced error handling
      let errorMessage = "❌ Failed to send message. Please try again later or contact us directly.";

      if (error.message.includes("Network Error") || error.message.includes("Failed to fetch")) {
        errorMessage = "❌ Network error. Please check your internet connection and try again.";
      } else if (error.message.includes("500")) {
        errorMessage = "❌ Server error. Please try again later.";
      } else if (error.message.includes("400")) {
        errorMessage = "❌ Invalid form data. Please check your information and try again.";
      } else if (error.message.includes("429")) {
        errorMessage = "❌ Too many requests. Please wait a moment and try again.";
      } else if (error.response?.data?.message) {
        errorMessage = `❌ ${error.response.data.message}`;
      }

      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to validate individual fields on blur
  const handleBlur = async (fieldName) => {
    await trigger(fieldName);
  };

  // Alternative send function using your existing backend route
  const handleSendAlternative = async () => {
    if (!formData.name) {
      toast.error("❌ Please fill out the form first");
      return;
    }

    try {
      setIsSubmitting(true);
      const loadingToast = toast.loading("📤 Sending your message...");

      const response = await axios.post(
      // "http://localhost:5000/api/brevo/send-email"
      "https://wrenchwisefinal.onrender.com/api/brevo/send-email",
      { payload: formData });

      toast.dismiss(loadingToast);

      if (response.data.success) {
        toast.success("🎉 Message sent successfully!");
        reset();
        setFormData({});
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      console.error("Send failed:", error);
      toast.error(`❌ Failed to send: ${error.response?.data?.message || error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center max-w-4xl mx-auto transition-all duration-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600">
              Ready to start your engineering journey? We're here to help you choose the right path and answer all your
              questions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Let's Start a Conversation</h2>
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                  <div>
                    <label htmlFor="Name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      id="Name"
                      type="text"
                      {...register("Name", validationRules.Name)}
                      onBlur={() => handleBlur("Name")}
                      className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors ${errors.Name ? "border-red-500 bg-red-50" : "border-gray-300 focus:border-emerald-500"
                        }`}
                      placeholder="Enter your full name"
                    />
                    {errors.Name && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <span className="mr-1">⚠</span>
                        {errors.Name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      style={{textTransform:'lowercase'}}
                      {...register("email", validationRules.email)}
                      onBlur={() => handleBlur("email")}
                      className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors ${errors.email ? "border-red-500 bg-red-50" : "border-gray-300 focus:border-emerald-500"
                        }`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <span className="mr-1">⚠</span>
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      {...register("phone", validationRules.phone)}
                      onBlur={() => handleBlur("phone")}
                      className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors ${errors.phone ? "border-red-500 bg-red-50" : "border-gray-300 focus:border-emerald-500"
                        }`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <span className="mr-1">⚠</span>
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                      Area of Interest *
                    </label>
                    <select
                      id="interest"
                      {...register("interest", validationRules.interest)}
                      onBlur={() => handleBlur("interest")}
                      className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors ${errors.interest ? "border-red-500 bg-red-50" : "border-gray-300 focus:border-emerald-500"
                        }`}
                    >
                      <option value="">Select your interest</option>
                      <option value="full-stack">Full Stack Development</option>
                      <option value="ai-core">AI Core 5.0</option>
                      <option value="dsa">DSA & Prompt Engineering</option>
                      <option value="mechanical">Mechanical Engineering</option>
                      <option value="webinar">UI/UX Webinar</option>
                      <option value="general">General Inquiry</option>
                    </select>
                    {errors.interest && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <span className="mr-1">⚠</span>
                        {errors.interest.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      {...register("message", validationRules.message)}
                      onBlur={() => handleBlur("message")}
                      className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors`}
                      placeholder="Tell us about your goals and how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-md font-medium transition-all duration-300 flex items-center justify-center ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:scale-105 hover:shadow-lg"
                      }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </button>

                  {/* Alternative send button for testing
                  <button
                    type="button"
                    onClick={handleSendAlternative}
                    disabled={isSubmitting || !formData.name}
                    className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md font-medium transition-all duration-300 flex items-center justify-center ${
                      (isSubmitting || !formData.name) ? "opacity-50 cursor-not-allowed" : "hover:scale-105 hover:shadow-lg"
                    }`}
                  >
                    Test Send (Alternative)
                  </button> */}
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-emerald-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email Us</h3>
                      <a className="text-gray-900 hover:text-emerald-400 transition-colors" href="mailto:hello@wrench-wise.com" style={{ textTransform: 'lowercase' }}>
                        hello@wrench-wise.com
                      </a>
                      <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-emerald-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Call or WhatsApp</h3>
                      <a className="text-gray-900 hover:text-emerald-400 transition-colors" href="tel:+91-755-007-7725">
                        +91 7550077725
                      </a>
                      <p className="text-sm text-gray-500">Available Mon-Sat, 9 AM - 7 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Free Consultation Card */}
              <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-lg p-6 shadow-md border border-emerald-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Book a Free Consultation</h3>
                <p className="text-gray-600 mb-4">
                  Not sure which program is right for you? Book a free 30-minute consultation with our career
                  counselors.
                </p>
                <a
                  href="https://wa.me/917550077725?text=Hi! I'd like to book a free consultation to discuss my career goals and course options."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-md font-medium transition-all duration-300 hover:scale-105 inline-flex items-center justify-center text-center"
                >
                  Book Free Consultation
                </a>
              </div>

              {/* FAQ Card */}
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">What are the payment options?</h4>
                    <p className="text-sm text-gray-600">
                      We offer flexible payment plans including EMI options and full payment discounts.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Do you provide placement assistance?</h4>
                    <p className="text-sm text-gray-600">
                      Yes, we provide comprehensive career services including resume building, interview prep, and job
                      referrals.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Can I switch between programs?</h4>
                    <p className="text-sm text-gray-600">
                      Yes, we offer flexibility to switch or upgrade your program based on your learning progress and
                      career goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Toast Container */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{
          fontSize: '14px',
        }}
      />

      {/* Animation Styles */}
      <style jsx>{`
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
      `}</style>

      {/* Add this for the blur filter */}
      <style jsx global>{`
        .filter {
          filter: blur(40px);
        }
      `}</style>
    </div>
  );
}