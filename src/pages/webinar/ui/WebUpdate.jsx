import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function StayUpdatedCard() {
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // ✅ FIXED
  const [message, setMessage] = useState(""); // ✅ FIXED

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  const validationRules = {
    email: {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address",
      },
    },
  };

  const handleBlur = async (fieldName) => {
    await trigger(fieldName);
  };

  // ======================================
  // ✅ FIXED – FULL WORKING onSubmit
  // ======================================
  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        // "http://localhost:5000/api/brevo/coming-updates",
        "https://wrenchwisefinal.onrender.com/api/brevo/coming-updates",
        { email: data.email },
        { headers: { "Content-Type": "application/json" } }
      );

      setMessage("Subscribed successfully!");
      toast.success("Subscribed successfully!");

      reset();

      // Show success popup for 3 seconds
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);

    } catch (error) {
      console.error("Coming Updates failed:", error);

      const serverMessage =
        error?.response?.data?.message || "Something went wrong";

      setMessage(serverMessage);
      toast.error(serverMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Success Popup */}
      {showPopup && (
        <div
          className="
            fixed top-6 left-1/2 -translate-x-1/2
            w-full max-w-xl
            bg-gradient-to-br from-pink-500 via-fuchsia-500 to-pink-600
            text-white rounded-3xl
            px-10 py-8 text-center shadow-xl z-50
          "
        >
          <h2 className="text-2xl font-bold">Wrench Wise</h2>
          <p className="mt-3 text-lg font-medium">Thank you for Registering!</p>
          <p className="mt-2 text-sm text-pink-100">
            We will reach you soon with updates.
          </p>
        </div>
      )}

      <section className="w-full flex justify-center py-10 relative">
        <div
          className="
            w-full max-w-md bg-white border border-gray-200
            rounded-[28px] shadow-[0_12px_35px_rgba(15,23,42,0.12)]
            px-8 py-8 text-center
          "
        >
          <h3 className="text-xl font-semibold text-gray-900">Stay updated</h3>

          <p className="mt-2 text-sm text-gray-600">
            Wise Sessions by Wrench Wise
            <span className="block">Live Expert-Led Micro Sessions</span>
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-6 flex flex-col items-center gap-4"
            noValidate
          >
            <div className="w-full flex flex-col items-center">
              <input
                type="email"
                placeholder="Email address"
                {...register("email", validationRules.email)}
                onBlur={() => handleBlur("email")}
                className={`
                  w-64 rounded-full border bg-white px-4 py-2.5
                  text-sm text-gray-900 placeholder:text-gray-400
                  outline-none focus:ring-2 transition
                  ${
                    errors.email
                      ? "border-red-500 bg-red-50 focus:ring-red-300"
                      : "border-gray-300 focus:ring-pink-400/30"
                  }
                `}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-600 flex items-center">
                  <span className="mr-1">⚠</span>
                  {errors.email.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`
                rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-pink-600
                px-8 py-2.5 text-sm font-semibold text-white
                shadow-md shadow-pink-500/30 transition
                ${isSubmitting ? "opacity-60 cursor-not-allowed" : "hover:brightness-110"}
              `}
            >
              {isSubmitting ? "Submitting..." : "Get Updates"}
            </button>
          </form>

          <p className="mt-3 text-[11px] text-gray-500">
            No spam - only updates & seat alerts.
          </p>
        </div>
      </section>

      <ToastContainer />
    </>
  );
}
