import React, { useState } from "react";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitting(true);
  };

  return (
      <div className="mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="px-6 py-8 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">
              Guitar Lesson Registration
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Register for comprehensive guitar instruction tailored to your
              preferences
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="px-6 py-8 space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contactNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Contact Number (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    id="contactNumber"
                    {...register("contactNumber", {
                      required: "Contact number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Please enter a valid 10-digit phone number",
                      },
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {errors.contactNumber && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.contactNumber.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="goals"
                    className="block text-sm font-medium text-gray-700"
                  >
                    What are your main goals for learning guitar?
                  </label>
                  <textarea
                    id="goals"
                    {...register("goals", {
                      required: "Please describe your goals",
                    })}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {errors.goals && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.goals.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Preferences */}
              <div className="space-y-6">
                {/* Guitar Ownership */}
                <div>
                  <span className="block text-sm font-medium text-gray-700 mb-2">
                    Do you have a guitar?
                  </span>
                  <div className="flex gap-4">
                    {["yes", "no"].map((option) => (
                      <label key={option} className="inline-flex items-center">
                        <input
                          type="radio"
                          value={option}
                          {...register("hasGuitar", {
                            required: "Please select an option",
                          })}
                          className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700 capitalize">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                  {errors.hasGuitar && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.hasGuitar.message}
                    </p>
                  )}
                </div>

                {/* Previous Experience */}
                <div>
                  <span className="block text-sm font-medium text-gray-700 mb-2">
                    Have you played guitar before?
                  </span>
                  <div className="flex gap-4">
                    {["yes", "no"].map((option) => (
                      <label key={option} className="inline-flex items-center">
                        <input
                          type="radio"
                          value={option}
                          {...register("playedBefore", {
                            required: "Please select an option",
                          })}
                          className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700 capitalize">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                  {errors.playedBefore && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.playedBefore.message}
                    </p>
                  )}
                </div>

                {/* Availability */}
                <div>
                  <span className="block text-sm font-medium text-gray-700 mb-2">
                    Availability for Session
                  </span>
                  <div className="flex flex-wrap gap-4">
                    {["morning", "afternoon", "evening"].map((time) => (
                      <label key={time} className="inline-flex items-center">
                        <input
                          type="radio"
                          value={time}
                          {...register("availability", {
                            required: "Please select an option",
                          })}
                          className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700 capitalize">
                          {time}
                        </span>
                      </label>
                    ))}
                  </div>
                  {errors.availability && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.availability.message}
                    </p>
                  )}
                </div>

                {/* Days */}
                <div>
                  <span className="block text-sm font-medium text-gray-700 mb-2">
                    Days
                  </span>
                  <div className="flex gap-4">
                    {["weekdays", "weekend"].map((option) => (
                      <label key={option} className="inline-flex items-center">
                        <input
                          type="radio"
                          value={option}
                          {...register("days", {
                            required: "Please select an option",
                          })}
                          className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700 capitalize">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                  {errors.days && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.days.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Current Status */}
              <div>
                <span className="block text-sm font-medium text-gray-700 mb-2">
                  What is your current status?
                </span>
                <div className="flex flex-wrap gap-4">
                  {["student", "working", "self-employed"].map((status) => (
                    <label key={status} className="inline-flex items-center">
                      <input
                        type="radio"
                        value={status}
                        {...register("status", {
                          required: "Please select an option",
                        })}
                        className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700 capitalize">
                        {status}
                      </span>
                    </label>
                  ))}
                </div>
                {errors.status && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.status.message}
                  </p>
                )}
              </div>

              {/* Learning Method */}
              <div>
                <span className="block text-sm font-medium text-gray-700 mb-2">
                  What&apos;s your preferred learning method?
                </span>
                <div className="flex flex-wrap gap-4">
                  {[
                    ["online", "Online"],
                    ["offline", "Offline"],
                    ["personal", "Personal (At Home)"],
                  ].map(([value, label]) => (
                    <label key={value} className="inline-flex items-center">
                      <input
                        type="radio"
                        value={value}
                        {...register("learningMethod", {
                          required: "Please select an option",
                        })}
                        className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        {label}
                      </span>
                    </label>
                  ))}
                </div>
                {errors.learningMethod && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.learningMethod.message}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Registration"}
              </button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default RegisterForm;