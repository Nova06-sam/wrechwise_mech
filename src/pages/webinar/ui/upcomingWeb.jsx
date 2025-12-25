import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import fsd from "../../../assets/model.jpeg";
import axios from "axios";

/**
 * Sessions Data
 */
const sessions = {
  upcoming: [
    {
      id: 1,
      img: fsd,
      title: "Full Stack x AI",
      date: "26th Dec 2025",
      time: "7.30 pm to 9 pm",
      duration: "1:30 hours",
      description:
        "Wise Sessions by Wrench Wise - Live Expert-Led Micro Sessions: The Skill Combo That Gets You Hired in 2026",
      seats: 120,
    },
  ],
  // You can later add:
  // "about-to-come": [...],
  // past: [...],
};

export default function WebinarsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("upcoming");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null);
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
      sessionTitle: "",
      sessionDate: "",
      sessionTime: "",
    },
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Enhanced validation rules
  const validationRules = {
    name: {
      required: "Full name is required",
      minLength: {
        value: 2,
        message: "Name must be at least 2 characters",
      },
      maxLength: {
        value: 50,
        message: "Name must be less than 50 characters",
      },
      pattern: {
        value: /^[a-zA-Z\s.]*$/,
        message: "Name can only contain letters, spaces, and dots",
      },
    },
    email: {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address",
      },
    },
    phone: {
      required: "Phone number is required",
      pattern: {
        value: /^(\+91)?[6-9]\d{9}$/,
        message:
          "Enter a valid Indian mobile number (e.g. 9876543210 or +919876543210)",
      },
      minLength: {
        value: 10,
        message: "Phone number must be at least 10 digits",
      },
      maxLength: {
        value: 13,
        message: "Phone number must be less than 13 digits",
      },
    },
  };

  // 🔁 SWAP UPCOMING & ABOUT-TO-COME CONTENT
  const list =
    activeTab === "upcoming"
      ? sessions["about-to-come"] || []
      : activeTab === "about-to-come"
      ? sessions.upcoming || []
      : sessions[activeTab] || [];

  const openBookingForm = (session) => {
    setSelectedSession(session);

    // Pre-fill form with session data
    reset({
      name: "",
      email: "",
      phone: "",
      sessionTitle: session.title,
      sessionDate: session.date,
      sessionTime: session.time,
    });

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSession(null);
    reset();
  };

  const onSubmit = async (data) => {
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
      source: "website-webinar-form",
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

      toast.success(
        "🎉 Success! Your seat has been booked. We've sent you a confirmation email!"
      );
      console.log(submitData);
      reset();
      closeModal();
    } catch (error) {
      console.error("Webinar registration failed:", error);

      let errorMessage = "❌ Something went wrong. Please try again.";

      if (error?.response?.data?.message) {
        errorMessage = `❌ ${error.response.data.message}`;
      } else if (error.message.includes("Network Error")) {
        errorMessage =
          "❌ Network error. Please check your connection and try again.";
      }

      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  // validate individual fields on blur
  const handleBlur = async (fieldName) => {
    await trigger(fieldName);
  };

  // Watch form values (if needed later)
  const watchedValues = watch();

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16">
        {/* Background Glows */}
        <div className="pointer-events-none absolute -top-40 -left-32 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 right-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Wise Sessions by Wrench Wise
            </h2>

            <div className="mt-3 flex justify-center">
              <div className="h-1 w-24 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500" />
            </div>

            <p className="mt-4 mx-auto max-w-2xl text-sm text-gray-600 sm:text-base">
              Short, practical sessions focused on Computer Science &amp;
              Engineering topics- live demos, projects, and career guidance.
            </p>
          </div>

          {/* Tabs */}
          <div className="mb-6 flex flex-wrap justify-center gap-3">
            {/* 🔹 Updated: just "Upcoming" */}
            <TabButton
              label="Upcoming"
              active={activeTab === "upcoming"}
              onClick={() => setActiveTab("upcoming")}
            />
            {/* 🔹 Updated: About to come(1) */}
            <TabButton
              label={`About to come(${sessions.upcoming.length})`}
              active={activeTab === "about-to-come"}
              onClick={() => setActiveTab("about-to-come")}
            />
            <TabButton
              label="Past Sessions"
              active={activeTab === "past"}
              onClick={() => setActiveTab("past")}
            />
          </div>

          {/* Cards */}
          <div className="mx-auto max-w-4xl space-y-4">
            {activeTab === "past" && (
              <div className="flex items-center justify-between rounded-2xl border border-gray-300 bg-white px-5 py-4 shadow-md">
                <p className="flex items-center text-sm font-semibold text-gray-900">
                  <span className="mr-2 text-yellow-400">★</span>
                  Past Sessions
                </p>
                <button className="text-sm font-semibold text-indigo-500 underline underline-offset-4 hover:text-indigo-900">
                  Show recordings
                </button>
              </div>
            )}

            {list.length > 0 ? (
              list.map((session) => (
                <SessionCard
                  key={session.id}
                  session={session}
                  type={activeTab}
                  onBook={() => openBookingForm(session)}
                />
              ))
            ) : activeTab === "about-to-come" ? (
              <EmptyState message="No ‘About to Come’ sessions yet. Check Upcoming for current events." />
            ) : activeTab === "past" ? (
              <EmptyState message="No past sessions added here yet." />
            ) : (
              <EmptyState message="No upcoming sessions at the moment. Stay tuned!" />
            )}
          </div>
        </div>
      </section>

      {/* BOOKING MODAL */}
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
                      {selectedSession?.title}
                    </h3>
                    <p className="mt-1 text-xs text-gray-300">
                      {selectedSession?.date} • {selectedSession?.time}
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
                <form
                  className="space-y-4"
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                >
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
                      <p className="text-xs text-red-400">
                        {errors.name.message}
                      </p>
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
                      <p className="text-xs text-red-400">
                        {errors.email.message}
                      </p>
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
                      <p className="text-xs text-red-400">
                        {errors.phone.message}
                      </p>
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
                        <div className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Booking...
                      </>
                    ) : (
                      "Submit & Book Seat"
                    )}
                  </button>
                </form>

                {/* Privacy note */}
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
          fontSize: "14px",
        }}
      />
    </>
  );
}

/* ---------------- SESSION CARD ------------------ */
function SessionCard({ session, type, onBook }) {
  const isUpcoming = type === "upcoming";
  const isAboutToCome = type === "about-to-come";
  const isPast = type === "past";

  const mainButtonLabel =
    isUpcoming ? "enroll free" : isAboutToCome ? "Upcoming session" : "View videos";

  const hasSeats = session.seats > 0;
  const seatsTextColor = hasSeats ? "text-green-400" : "text-red-500";

  const handleClick = () => {
    if (isUpcoming && onBook) onBook();
  };

  const [view, Setview] = useState(false);

  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-gray-300 bg-white px-5 py-5 shadow-md md:flex-row md:items-stretch">
      {/* LEFT: IMAGE OR TRACK */}
      <div className="flex-shrink-0 md:w-40">
        {session.img ? (
          <img
            src={session.img}
            alt={session.title}
            className="h-full w-full rounded-2xl object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500 px-4 py-6 text-sm font-semibold text-white shadow-md">
            {session.track}
          </div>
        )}
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-base font-semibold text-gray-900 sm:text-lg">
              {session.title}
            </h3>
            {/* 🔹 Hide date/time/duration when tab is "about-to-come" */}
            {!isAboutToCome && (
              <p className="mt-1 text-xs text-gray-600 sm:text-sm">
                {session.date} • {session.time} • {session.duration}
              </p>
            )}
          </div>

          <p className="text-xs text-gray-600 sm:text-sm">{session.speaker}</p>
        </div>

        <p className="mt-3 max-w-xl text-sm text-gray-700">
          {session.description}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          {view ? (
            <button
              onClick={handleClick}
              className={`rounded-full px-4 py-2 text-xs font-semibold shadow-sm sm:text-sm ${
                isUpcoming
                  ? "bg-indigo-500 text-white hover:bg-indigo-900"
                  : isAboutToCome
                  ? "cursor-default border border-gray-300 bg-gray-50 text-gray-700"
                  : "bg-pink-500 text-white hover:bg-pink-600"
              }`}
            >
              {mainButtonLabel}
            </button>
          ) : (
            <button className="bg-indigo-500 text-white hover:bg-indigo-900 rounded-full px-4 py-2 text-xs font-semibold shadow-sm sm:text-sm cursor-not-allowed">
              coming soon
            </button>
          )}

          <p className="ml-auto text-xs text-gray-600 sm:text-sm">
            Seats:{" "}
            <span className={`font-semibold ${seatsTextColor}`}>
              {session.seats}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------------- TAB BUTTON ------------------ */
function TabButton({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-5 py-2 text-sm font-medium transition ${
        active
          ? "bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white shadow-md"
          : "border border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-50"
      }`}
    >
      {label}
    </button>
  );
}

/* ---------------- EMPTY STATE ------------------ */
function EmptyState({ message }) {
  return (
    <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-5 py-6 text-center text-sm text-gray-600 shadow-md">
      {message}
    </div>
  );
}