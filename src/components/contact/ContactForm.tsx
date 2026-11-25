/**
 * @file src/components/contact/ContactForm.tsx
 * @description Contact Form Component with Web3Forms Integration
 * Features: Client-side validation, loading spinners, success message states,
 * and fallback to direct email on network failure.
 */

"use client";

import React, { useState } from "react";
import { Icons } from "@/components/ui/Icons";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Technical PM / Product Owner",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const apiKey =
        process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "73676eb6-e8ad-49d8-b6f1-64ed14ad726c";

      const payload = {
        access_key: apiKey,
        subject: `New Portfolio Inquiry from ${formData.name}`,
        from_name: formData.name,
        email: formData.email,
        message: `Project/Role Type: ${formData.projectType}\n\nMessage:\n${formData.message}`,
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          projectType: "Technical PM / Product Owner",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Submission failed. Please email directly.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error occurred. Please email directly to sebinmdom@gmail.com.");
    }
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-surface-container-low/90 backdrop-blur-xl border border-outline-variant/30 shadow-xl flex flex-col justify-between h-full gap-6">
      <div className="flex flex-col gap-1.5">
        <div className="inline-flex items-center gap-2 px-3 py-1 self-start rounded-full bg-secondary/10 text-secondary border border-secondary/20 font-label-sm text-xs font-semibold uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
          Direct Message
        </div>
        <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
          Send a Direct Message
        </h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Messages route silently to Sebin&apos;s direct inbox. Guaranteed response within 24 hours.
        </p>
      </div>

      {status === "success" ? (
        <div className="p-6 rounded-2xl bg-tertiary/10 border border-tertiary/30 flex flex-col items-center text-center gap-3 animate-in fade-in duration-300 my-auto">
          <div className="w-12 h-12 rounded-full bg-tertiary/20 text-tertiary flex items-center justify-center">
            <Icons.Check size={28} />
          </div>
          <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">
            Message Dispatched!
          </h4>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
            Thank you for reaching out. I will review your requirements and reply to your email within 24 hours.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-2 px-4 py-2 rounded-xl bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold hover:bg-surface-container"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col flex-1 justify-between gap-4">
          <div className="flex flex-col gap-3.5 flex-1">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label className="font-label-md text-label-md text-on-surface font-semibold">
                Your Name or Company *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Sarah Jenkins or TechCorp LLC"
                className="w-full px-4 py-3 rounded-xl bg-surface-container-high border border-outline-variant/30 text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="font-label-md text-label-md text-on-surface font-semibold">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@company.com"
                className="w-full px-4 py-3 rounded-xl bg-surface-container-high border border-outline-variant/30 text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md"
              />
            </div>

            {/* Engagement Type */}
            <div className="flex flex-col gap-1.5 min-w-0">
              <label className="font-label-md text-label-md text-on-surface font-semibold">
                Engagement Nature
              </label>
              <div className="relative w-full min-w-0">
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full max-w-full truncate px-4 py-3 pr-10 rounded-xl bg-surface-container-high border border-outline-variant/30 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md cursor-pointer appearance-none"
                >
                  <option value="Technical PM / Product Owner" className="bg-[#1e1f25] text-[#e2e2e9]">
                    Technical PM / Product Owner
                  </option>
                  <option value="Full-Stack Developer (MERN / Next.js)" className="bg-[#1e1f25] text-[#e2e2e9]">
                    Full-Stack Developer (MERN / Next.js)
                  </option>
                  <option value="Freelance / Project Delivery" className="bg-[#1e1f25] text-[#e2e2e9]">
                    Freelance / Project Delivery
                  </option>
                  <option value="Consultation & Advisory" className="bg-[#1e1f25] text-[#e2e2e9]">
                    Consultation & Advisory
                  </option>
                </select>
                <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-outline">
                  <Icons.ChevronDown size={18} />
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5 flex-1">
              <label className="font-label-md text-label-md text-on-surface font-semibold">
                Project Details or Opportunity *
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your product requirements, target timelines, or open role..."
                className="w-full min-h-[120px] flex-1 px-4 py-3 rounded-xl bg-surface-container-high border border-outline-variant/30 text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md resize-none"
              />
            </div>
          </div>

          {status === "error" && (
            <div className="p-3 rounded-xl bg-error-container/30 border border-error/40 text-error font-body-sm text-body-sm">
              {errorMessage}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-4 mt-1 rounded-xl bg-gradient-to-r from-primary-container to-secondary text-on-primary font-headline-sm text-label-md font-bold shadow-glow-amber hover:brightness-110 active:scale-[0.99] disabled:opacity-50 transition-all flex items-center justify-center gap-2"
          >
            {status === "loading" ? (
              <>
                <Icons.Loader2 className="animate-spin" size={18} />
                <span>Dispatching Message...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Icons.Send size={18} />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
