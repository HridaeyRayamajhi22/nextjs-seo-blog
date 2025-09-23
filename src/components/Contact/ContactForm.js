'use client'
import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-2xl mx-auto p-6 space-y-10"
    >
      {/* Intro Paragraph */}
      <div className="space-y-8">
        <p className="text-lg leading-relaxed text-gray-800 font-light">
          Good day, my name is{" "}
          <input
            type="text"
            placeholder="your full name"
            {...register("Name", { required: "Please provide your name." })}
            className="inline-block bg-transparent border-b border-gray-400 focus:border-blue-500 focus:outline-none px-2 placeholder-gray-400 transition w-48"
          />
          . I would like to get in touch with you to discuss an exciting project.
        </p>

        <p className="text-lg leading-relaxed text-gray-800 font-light">
          You may kindly reach me at{" "}
          <input
            type="text"
            placeholder="your email address"
            {...register("Email", {
              required: "An email address is required.",
              pattern: { value: /^\S+@\S+$/i, message: "Please enter a valid email." },
            })}
            className="inline-block bg-transparent border-b border-gray-400 focus:border-blue-500 focus:outline-none px-2 placeholder-gray-400 transition w-56"
          />
          , or by phone at{" "}
          <input
            type="tel"
            placeholder="your mobile number"
            {...register("MobileNumber", {
              required: "A mobile number is required.",
              minLength: { value: 6, message: "Number seems too short." },
              maxLength: { value: 12, message: "Number seems too long." },
            })}
            className="inline-block bg-transparent border-b border-gray-400 focus:border-blue-500 focus:outline-none px-2 placeholder-gray-400 transition w-40"
          />
          .
        </p>
      </div>

      {/* Project Details */}
      <div>
        <p className="text-lg leading-relaxed text-gray-800 font-light mb-3">
          Allow me to share a few details regarding my project:
        </p>
        <textarea
          placeholder="Kindly describe your project here..."
          {...register("ProjectDetails", { required: "Project details are required." })}
          className="w-full bg-gray-50 border-l-4 border-gray-300 focus:border-blue-500 focus:outline-none px-4 py-3 rounded-r-lg resize-none transition font-light"
          rows={4}
        />
      </div>

      {/* Error Messages */}
      <div className="space-y-2 text-right">
        {errors.Name && (
          <p className="text-red-500 text-sm">
            <span className="bg-red-50 px-3 py-1 rounded-full">
              ⚠️ {errors.Name.message}
            </span>
          </p>
        )}
        {errors.Email && (
          <p className="text-red-500 text-sm">
            <span className="bg-red-50 px-3 py-1 rounded-full">
              ⚠️ {errors.Email.message}
            </span>
          </p>
        )}
        {errors.MobileNumber && (
          <p className="text-red-500 text-sm">
            <span className="bg-red-50 px-3 py-1 rounded-full">
              ⚠️ {errors.MobileNumber.message}
            </span>
          </p>
        )}
        {errors.ProjectDetails && (
          <p className="text-red-500 text-sm">
            <span className="bg-red-50 px-3 py-1 rounded-full">
              ⚠️ {errors.ProjectDetails.message}
            </span>
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition font-medium"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
