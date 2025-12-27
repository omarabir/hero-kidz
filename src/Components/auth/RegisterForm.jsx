"use client";

import React, { useState } from "react";
import Link from "next/link";
import SocialButton from "../buttons/SocialButton";
import { postUser } from "@/actions/server/auth";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function RegisterForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data being submitted:", formData);

    // Validate that all fields are filled
    if (!formData.name || !formData.email || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }

    // Handle form submission logic here
    const result = await postUser(formData);
    console.log("Result from postUser:", result);

    if (result?.acknowledged) {
      toast.success("Registration successful! Please log in.");
      router.push("/login");
    } else {
      toast.error("Registration failed. Email may already be in use.");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-200 via-base-100 to-base-200 px-4 py-12">
      <div className="w-full max-w-md">
        {/* Hero Logo/Brand Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-base-content mb-2">
            Create Account
          </h1>
          <p className="text-base-content/60">
            Join Hero Kidz and start your adventure!
          </p>
        </div>

        {/* Registration Card */}
        <div className="card bg-base-100 shadow-xl border border-base-300/50">
          <div className="card-body p-8">
            <form
              onSubmit={handleSubmit}
              onChange={handleChange}
              className="space-y-5"
            >
              {/* Name Fields Row */}
              <div className="">
                {/* First Name */}
                <div className="form-control">
                  <label htmlFor="firstName" className="label">
                    <span className="label-text font-medium">Name</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-base-content/40"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <input
                      id="firstName"
                      name="name"
                      type="text"
                      placeholder="John"
                      className="input input-bordered w-full pl-10 focus:input-primary transition-all"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Email Input */}
              <div className="form-control">
                <label htmlFor="email" className="label">
                  <span className="label-text font-medium">Email Address</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-base-content/40"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="input input-bordered w-full pl-10 focus:input-primary transition-all"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="form-control">
                <label htmlFor="password" className="label">
                  <span className="label-text font-medium">Password</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-base-content/40"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Create a strong password"
                    className="input input-bordered w-full pl-10 focus:input-primary transition-all"
                    required
                  />
                </div>
                <label className="label">
                  <span className="label-text-alt text-base-content/60">
                    Must be at least 8 characters
                  </span>
                </label>
              </div>

              {/* Terms and Conditions */}
              <div className="form-control">
                <label className="label cursor-pointer justify-start gap-3">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary checkbox-sm"
                    required
                  />
                  <span className="label-text text-sm">
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      className="link link-hover text-primary font-medium"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="link link-hover text-primary font-medium"
                    >
                      Privacy Policy
                    </Link>
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary w-full text-base h-12 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                Create Account
              </button>
            </form>

            {/* Divider */}
            <div className="divider text-xs text-base-content/40 my-6">
              OR SIGN UP WITH
            </div>

            {/* Social Registration */}
            <SocialButton />
          </div>
        </div>

        {/* Sign In Link */}
        <p className="mt-6 text-center text-sm text-base-content/60">
          Already have an account?{" "}
          <Link
            href="/login"
            className="link link-hover text-primary font-semibold"
          >
            Sign in instead
          </Link>
        </p>
      </div>
    </div>
  );
}
