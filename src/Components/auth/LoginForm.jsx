"use client";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import React, { useState } from "react";
import Link from "next/link";
import SocialButton from "../buttons/SocialButton";
import { useSearchParams, useRouter } from "next/navigation";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const searchParams = useSearchParams();
  const router = useRouter();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  console.log("CallbackUrl from URL:", callbackUrl);
  console.log("Decoded CallbackUrl:", decodeURIComponent(callbackUrl));

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        callbackUrl: callbackUrl, // Pass callbackUrl to NextAuth
        redirect: false,
      });

      console.log("Login result:", result);
      console.log("CallbackUrl to redirect:", callbackUrl);

      if (result?.error) {
        toast.error("Invalid email or password");
      } else if (result?.ok) {
        toast.success("Login successful!");
        console.log("Redirecting to:", callbackUrl);
        
        // Redirect to callback URL
        window.location.href = callbackUrl;
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Something went wrong");
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
            Welcome Back!
          </h1>
          <p className="text-base-content/60">
            Sign in to continue to Hero Kidz
          </p>
        </div>

        {/* Login Card */}
        <div className="card bg-base-100 shadow-xl border border-base-300/50">
          <div className="card-body p-8">
            <form
              onSubmit={handleSubmit}
              onChange={handleChange}
              className="space-y-6"
            >
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
                    name="email"
                    id="email"
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
                    name="password"
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="input input-bordered w-full pl-10 focus:input-primary transition-all"
                    required
                  />
                </div>
                <Link
                  href="/forgot"
                  className="label-text-alt link link-hover text-primary font-medium"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary w-full text-base h-12 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                Sign in
              </button>
            </form>

            {/* Divider */}
            <div className="divider text-xs text-base-content/40 my-6">
              OR CONTINUE WITH
            </div>

            {/* Social Login */}
            <SocialButton />
          </div>
        </div>

        {/* Sign Up Link */}
        <p className="mt-6 text-center text-sm text-base-content/60">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="link link-hover text-primary font-semibold"
          >
            Create a free account
          </Link>
        </p>
      </div>
    </div>
  );
}
