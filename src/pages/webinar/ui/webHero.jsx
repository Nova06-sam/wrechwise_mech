import { ThumbsUp } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const nextWebinar = {
  title: "Full Stack x AI: The Skill Combo That Gets You Hired in 2026",
  date:null,
  time: null,
  seatsLeft: 120,
  view:false,
};

export default function WebinarsHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
    watch,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      sessionTitle: nextWebinar.title,
      sessionDate: nextWebinar.date,
      sessionTime: nextWebinar.time,
    }
  });

  // Enhanced validation rules
  const validationRules = {
    name: {
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
        value: /^[a-zA-Z\s.]*$/,
        message: "Name can only contain letters, spaces, and dots"
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
        value: /^(\+91)?[6-9]\d{9}$/,
        message: "Enter a valid Indian mobile number (e.g. 9876543210 or +919876543210)"
      },
      minLength: {
        value: 10,
        message: "Phone number must be at least 10 digits"
      },
      maxLength: {
        value: 13,
        message: "Phone number must be less than 13 digits"
      }
    }
  };

  const openBookingModal = () => {
    reset({
      name: "",
      email: "",
      phone: "",
      sessionTitle: nextWebinar.title,
      sessionDate: nextWebinar.date,
      sessionTime: nextWebinar.time,
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    reset();
  };

  const onSubmit = async (data) => {
    // Trigger validation for all fields
    const isValid = await trigger();
    
    if (!isValid) {
      toast.error("❌ Please fix the errors in the form before submitting.");
      return;
    }

    setIsSubmitting(true);

    const submitData = {
      name: data.name,
      email: data.email,
      phone: data.phone.replace(/\s+/g, ""),
      session: {
        title: data.sessionTitle,
        date: data.sessionDate,
        time: data.sessionTime,
      },
      type: "webinar-registration",
      timestamp: new Date().toISOString(),
      source: "website-webinar-hero",
    };

    try {
      const response = await axios.post(
        // "http://localhost:5000/api/brevo/webinar",
         "https://wrenchwisefinal.onrender.com/api/brevo/webinar",
        submitData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Show success toast notification
      toast.success("🎉 Success! Your seat has been booked. We've sent you a confirmation email!");
      console.log("Webinar registration data:", submitData);
      
      // Reset form and close modal
      reset();
      closeModal();
      
    } catch (error) {
      console.error("Webinar registration failed:", error);
      
      // Show error toast notification
      let errorMessage = "❌ Something went wrong. Please try again.";
      
      if (error?.response?.data?.message) {
        errorMessage = `❌ ${error.response.data.message}`;
      } else if (error.message.includes("Network Error")) {
        errorMessage = "❌ Network error. Please check your connection and try again.";
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

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        {/* animated / glow circles */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-pink-500/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 right-10 h-64 w-64 rounded-full bg-indigo-500/40 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-indigo-900/20" />

        <div className="relative mx-auto flex max-w-6xl min-h-[80vh] flex-col items-center gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:py-20 lg:px-8">
          {/* LEFT: text + CTAs */}
          <div className="max-w-3xl mx-auto text-center lg:mx-0 lg:text-left">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-900/40 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-purple-200">
              <span className="text-yellow-400">★</span>
              Wise Sessions by Wrench Wise-Live Expert-Led Micro Sessions
            </p>

            <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              <span className="inline-block">
                High-Impact Learning Experiences for Future-Ready Engineers
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-xs text-gray-300 sm:text-sm leading-relaxed mx-auto lg:mx-0">
              Wise Sessions are 60-90 minute live, expert-led classes that build
              fundamentals, explore modern tech, and provide practical
              demos-ending with a Wrench Wise Certificate of Participation.
            </p>

            {/* <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-red-600/20 px-4 py-1 text-xs text-red-300 border border-red-500/40">
              <span className="font-semibold text-red-500">
                Limited seats!
              </span>
              <span>Only a few spots left at this time.</span>
            </div> */}

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              {nextWebinar.view ?  <button
                type="button"
                onClick={openBookingModal}
                className="inline-flex gap-2 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/40 transition hover:from-pink-600 hover:to-purple-600 hover:shadow-pink-500/60"
              >
                Register free <ThumbsUp size={17}/>
              </button>
               :
               <button className="inline-flex gap-2 cursor-not-allowed  items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/40 transition hover:from-pink-600 hover:to-purple-600 hover:shadow-pink-500/60">
                coming soon
               </button>  
            }

              <button
                type="button"
                onClick={() =>
                  (window.location.href = "https://wrench-wise.com/")
                }
                className="text-sm font-semibold text-purple-200 underline underline-offset-4 hover:text-white"
              >
                Browse all courses
              </button>
            </div>
          </div>

          {/* RIGHT: next live card */}
          <div className="w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto">
            <div className="rounded-3xl bg-white p-7 text-left text-gray-900 shadow-xl shadow-indigo-900/40">
              <div className="mb-3 flex items-center justify-between gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-600">
                  Next live
                </p>
                <span className="rounded-full bg-gray-50 px-3 py-1 text/[11px] text-[11px] font-semibold text-green-400">
                  100% Live
                </span>
              </div>

              <h2 className="mt-1 text-lg font-semibold leading-snug text-gray-900">
                {nextWebinar.title}
              </h2>

              <hr className="my-4 border-gray-200" />

              <div className="space-y-2 text-sm">
                <p className="text-gray-600">
                  Seats left:{" "}
                  <span className="font-semibold text-green-400">
                    {nextWebinar.seatsLeft}
                  </span>
                </p>
                {/* <p className="text-xs text-red-500">
                  Hurry! This batch usually fills in{" "}
                  <span className="font-semibold text-red-600">
                    less than 48 hours
                  </span>
                  .
                </p> */}
              </div>

              {nextWebinar.view ?
                 <button
                type="button"
                onClick={openBookingModal}
                className="mt-6 inline-flex gap-2 w-full items-center justify-center rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-purple-500/40 transition hover:from-pink-600 hover:to-purple-600 hover:shadow-purple-500/60"
              >
                Claim Your Free Seat <ThumbsUp size={16} className="mt-[-3px]"/>
              </button>
              :  <button className="mt-6 cursor-not-allowed inline-flex gap-2 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-pink-500/40 transition hover:from-pink-600 hover:to-purple-600 hover:shadow-pink-500/60">
                coming soon
               </button>  
              }
            </div>
          </div>
        </div>
      </section>

      {/* BOOK SEAT MODAL */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/70 px-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-md rounded-3xl bg-gray-900 p-[1px] shadow-2xl shadow-black/60"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-3xl bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-500 p-[1px]">
              <div className="rounded-3xl bg-gray-900 px-6 py-6 text-white">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-purple-200">
                      Reserve your seat
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-white">
                      {nextWebinar.title}
                    </h3>
                    <p className="mt-1 text-xs text-gray-300">
                      {nextWebinar.date} • {nextWebinar.time}
                    </p>
                  </div>
                  <button
                    className="rounded-full p-1 text-gray-300 hover:bg-gray-800 hover:text-white"
                    onClick={closeModal}
                  >
                    ✕
                  </button>
                </div>

                {/* React Hook Form */}
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
                  {/* Hidden session fields */}
                  <input type="hidden" {...register("sessionTitle")} />
                  <input type="hidden" {...register("sessionDate")} />
                  <input type="hidden" {...register("sessionTime")} />

                  {/* NAME */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-gray-300">
                      Name{" "}
                      <span className="text-red-400" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      {...register("name", validationRules.name)}
                      onBlur={() => handleBlur("name")}
                      placeholder="Enter your full name"
                      className={`w-full rounded-2xl border bg-gray-900 px-3 py-2.5 text-sm text-white outline-none transition
                        ${
                          errors.name
                            ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/40"
                            : "border-gray-600 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/40"
                        }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400">{errors.name.message}</p>
                    )}
                  </div>

                  {/* EMAIL */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-gray-300">
                      Email{" "}
                      <span className="text-red-400" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      type="email"
                      {...register("email", validationRules.email)}
                      onBlur={() => handleBlur("email")}
                      placeholder="you@example.com"
                      className={`w-full rounded-2xl border bg-gray-900 px-3 py-2.5 text-sm text-white outline-none transition
                        ${
                          errors.email
                            ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/40"
                            : "border-gray-600 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/40"
                        }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400">{errors.email.message}</p>
                    )}
                  </div>

                  {/* PHONE */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-medium text-gray-300">
                      Phone number{" "}
                      <span className="text-red-400" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      type="tel"
                      {...register("phone", validationRules.phone)}
                      onBlur={() => handleBlur("phone")}
                      placeholder="+91 98765 43210"
                      className={`w-full rounded-2xl border bg-gray-900 px-3 py-2.5 text-sm text-white outline-none transition
                        ${
                          errors.phone
                            ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/40"
                            : "border-gray-600 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/40"
                        }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-400">{errors.phone.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`mt-2 w-full rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-pink-500/40 transition
                      ${
                        isSubmitting
                          ? "opacity-60 cursor-not-allowed"
                          : "hover:brightness-110"
                      }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Booking...
                      </>
                    ) : (
                      "Submit & Book Seat"
                    )}
                  </button>
                </form>

                <div className="mt-4 rounded-2xl bg-gray-900 border border-gray-600/60 px-4 py-3 text-[11px]">
                  <p className="text-gray-300">
                    <span className="mr-1 text-yellow-400">★</span>
                    We respect your privacy. Your details are used only to send
                    webinar updates and certificate information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast Container */}
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
    </>
  );
}