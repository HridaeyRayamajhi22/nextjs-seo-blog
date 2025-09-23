"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import slothAnimation from "@/public/Sloth meditate.json";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 text-gray-800 dark:text-gray-100 flex items-center justify-center px-6 py-16 transition-colors">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border dark:border-slate-700 transition-colors">
        {/* Left Section - Animation */}
        <div className="flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-slate-800 dark:to-slate-700 p-10">
          <div className="w-72 h-72">
            <Lottie animationData={slothAnimation} loop={true} />
          </div>
          <h2 className="mt-6 text-2xl font-semibold text-gray-700 dark:text-gray-200 text-center dark:text-light">
            Slow and Steady, but Always Moving Forward 🦥
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 text-center max-w-md dark:text-light">
            Just like our sloth friend, we believe in deliberate, meaningful
            progress. Share your project details, and we'll help you move
            forward at the perfect pace.
          </p>
        </div>

        {/* Right Section - Contact Form */}
        <div className="p-10 lg:p-14 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-800 dark:text-light">
            Get In Touch
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Conversational Inputs */}
            <p className="text-xl text-gray-700 font-light dark:text-light">
              Good day, my name is{" "}
              <input
                type="text"
                placeholder="Your full name"
                {...register("Name", { required: "Please provide your name." })}
                className="inline-block border-0 border-b-2 border-gray-300 dark:border-gray-600 text-center
                           focus:border-indigo-500 focus:outline-none 
                           bg-transparent dark:text-gray-100 dark:placeholder-gray-400 px-1 transition w-48"
              />
              . I would like to get in touch with you to discuss an exciting
              project.
            </p>

            <p className="text-xl text-gray-700 dark:text-gray-200 font-light dark:text-light">
              You may kindly reach me at{" "}
              <input
                type="text"
                placeholder="Your email address"
                {...register("Email", {
                  required: "An email address is required.",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter a valid email.",
                  },
                })}
                className="inline-block border-0 border-b-2 border-gray-300 dark:border-gray-600 text-center
                           focus:border-indigo-500 focus:outline-none 
                           bg-transparent dark:text-gray-100 dark:placeholder-gray-400 px-1 transition w-56"
              />
              , or by phone at{" "}
              <input
                type="tel"
                placeholder="Your mobile number"
                {...register("MobileNumber", {
                  required: "A mobile number is required.",
                  minLength: { value: 6, message: "Number seems too short." },
                  maxLength: { value: 12, message: "Number seems too long." },
                })}
                className="inline-block border-0 border-b-2 border-gray-300 dark:border-gray-600 text-center
                           focus:border-indigo-500 focus:outline-none 
                           bg-transparent dark:text-gray-100 dark:placeholder-gray-400 px-1 transition w-40"
              />
              .
            </p>

            {/* Project Details */}
            <div>
              <p className="text-xl text-gray-700 dark:text-gray-200 font-light mb-3 dark:text-light">
                Allow me to share a few details regarding my project:
              </p>
              <textarea
                placeholder="Kindly describe your project here..."
                {...register("ProjectDetails", {
                  required: "Project details are required.",
                })}
                className="w-full border border-indigo-300 dark:border-gray-600 
               focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-600 
               focus:outline-none bg-transparent dark:bg-slate-800
               px-4 py-3 rounded-lg placeholder-indigo-200 dark:placeholder-gray-400 
               transition font-light resize-none dark:text-gray-100"
                rows={4}
              />
            </div>

            {/* Errors */}
            <div className="space-y-2">
              {errors.Name && <ErrorMessage msg={errors.Name.message} />}
              {errors.Email && <ErrorMessage msg={errors.Email.message} />}
              {errors.MobileNumber && (
                <ErrorMessage msg={errors.MobileNumber.message} />
              )}
              {errors.ProjectDetails && (
                <ErrorMessage msg={errors.ProjectDetails.message} />
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 dark:bg-teal-600 dark:hover:bg-teal-700 text-white px-8 py-3 rounded-md shadow-md transition font-medium"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

// Helper for error messages
const ErrorMessage = ({ msg }) => (
  <p className="text-red-500 text-sm">
    <span className="bg-red-50 dark:bg-red-900/30 px-3 py-1 rounded-full">
      ⚠️ {msg}
    </span>
  </p>
);
