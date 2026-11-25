import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";
import { ContactForm } from "@/components/contact/ContactForm";
import { DirectCoordinates } from "@/components/contact/DirectCoordinates";
import { Icons } from "@/components/ui/Icons";
import { GlowOrb } from "@/components/ui/GlowOrb";

export const metadata: Metadata = {
  title: "Contact & Dubai Coordinates",
  description:
    "Direct contact coordinates for Sebin Mathew — Technical Project Manager & Full Stack Developer based in Dubai. Available immediately for full-time leadership and contract engagements.",
  openGraph: {
    title: "Contact & Dubai Coordinates | Sebin Mathew",
    description:
      "Direct contact coordinates for Sebin Mathew — Technical Project Manager & Full Stack Developer based in Dubai. Available immediately for full-time leadership and contract engagements.",
  },
};

export default function ContactPage() {
  return (
    <main className="w-full bg-surface min-h-[calc(100vh-80px)] relative overflow-hidden">
      {/* Ambient Atmospheric Glows */}
      <GlowOrb color="primary" size="lg" className="-top-32 -left-40" />
      <GlowOrb color="secondary" size="lg" className="top-1/3 right-0" />
      <GlowOrb color="tertiary" size="xl" className="bottom-10 left-1/4" />

      {/* Breadcrumb & Status Ribbon */}
      <section className="w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 pt-6 lg:pt-8 relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 px-space-md rounded-xl bg-surface-container-low border border-outline-variant/30 shadow-sm">
          {/* Breadcrumb Path */}
          <nav aria-label="Breadcrumbs" className="flex items-center gap-2">
            <Link
              href="/"
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1"
            >
              <Icons.KanbanSquare size={16} />
              <span>Home</span>
            </Link>
            <span className="text-outline-variant font-label-md">/</span>
            <span className="font-label-md text-label-md text-primary font-semibold">
              Contact & Engagement
            </span>
          </nav>

          {/* Pulsing Mint Dubai Availability Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-container/30 text-tertiary-fixed shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
            </span>
            <span className="font-label-sm text-label-sm tracking-wide font-medium">
              {siteConfig.availability.status}
            </span>
          </div>
        </div>
      </section>

      {/* Hero Header & 3-Pillar SLA Highlights */}
      <section className="w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 pt-8 lg:pt-10 pb-6 relative z-10">
        <div className="flex flex-col gap-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 self-start rounded-full bg-tertiary/10 text-tertiary border border-tertiary/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
            </span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">
              Available immediately in Dubai · UAE
            </span>
          </div>

          <h1 className="font-display text-display lg:text-[52px] text-on-surface tracking-tight leading-tight">
            Let&apos;s Start a{" "}
            <span className="bg-gradient-to-r from-primary via-primary-container to-secondary bg-clip-text text-transparent">
              Conversation
            </span>
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Hiring for a Technical Project Manager, Product Owner, or Full-Stack Developer, or planning a new product build? Share your goals and timeline below, and let’s bring it to launch.
          </p>
        </div>

        {/* 3-Pillar SLA & Availability Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary shrink-0">
              <Icons.Sparkles size={20} />
            </div>
            <div className="flex flex-col">
              <span className="font-label-md text-label-md text-on-surface font-semibold">
                Under 24 Hours
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Average response SLA for recruiters & clients
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-tertiary shrink-0">
              <Icons.MapPin size={20} />
            </div>
            <div className="flex flex-col">
              <span className="font-label-md text-label-md text-on-surface font-semibold">
                Dubai, UAE Base
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Open to in-person workshops, on-site, or hybrid
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary shrink-0">
              <Icons.Briefcase size={20} />
            </div>
            <div className="flex flex-col">
              <span className="font-label-md text-label-md text-on-surface font-semibold">
                Versatile Engagement
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Technical Project Manager | Full Stack Developer
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Engagement Suite: Balanced 50/50 Dual Column */}
      <section className="w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 pb-16 lg:pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Column: Direct Coordinates */}
          <div className="h-full">
            <DirectCoordinates />
          </div>

          {/* Right Column: Contact Form */}
          <div className="h-full">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
