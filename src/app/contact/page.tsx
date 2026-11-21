import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { ContactForm } from "@/components/contact/ContactForm";
import { DirectCoordinates } from "@/components/contact/DirectCoordinates";
import { Icons } from "@/components/ui/Icons";
import { GlowOrb } from "@/components/ui/GlowOrb";

export default function ContactPage() {
  return (
    <main className="w-full bg-surface min-h-[calc(100vh-80px)] relative overflow-hidden">
      {/* Ambient Atmospheric Glows */}
      <GlowOrb color="primary" size="lg" className="-top-32 -left-40" />
      <GlowOrb color="secondary" size="lg" className="top-1/3 -right-32" />
      <GlowOrb color="tertiary" size="xl" className="bottom-10 left-1/4" />

      {/* Breadcrumb & Status Ribbon */}
      <section className="w-full max-w-[1240px] mx-auto px-margin-mobile lg:px-margin pt-6 lg:pt-10 relative z-10">
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
              {siteConfig.availability.status} ({siteConfig.availability.visa})
            </span>
          </div>
        </div>
      </section>

      {/* Main Engagement Suite */}
      <section className="w-full max-w-[1240px] mx-auto px-margin-mobile lg:px-margin py-8 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* LEFT COLUMN: Value Proposition & Direct Coordinates (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-space-lg">
            {/* Heading & Summary */}
            <div className="flex flex-col gap-space-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 self-start rounded-full bg-tertiary/10 text-tertiary border border-tertiary/30">
                <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                  Available immediately in Dubai
                </span>
              </div>
              <h1 className="font-display text-display lg:text-[52px] text-on-surface tracking-tight leading-tight">
                Let&apos;s{" "}
                <span className="bg-gradient-to-r from-primary via-primary-container to-secondary bg-clip-text text-transparent">
                  Connect
                </span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Have a leadership vacancy, a high-stakes cross-functional project, or need fractional technical BA oversight? Let me know your vision and target milestone.
              </p>
            </div>

            {/* Value Metric Indicators */}
            <div className="flex flex-col gap-2 rounded-2xl bg-surface-container-low p-space-md border border-outline-variant/30 shadow-sm">
              <div className="flex items-center gap-3 py-2 px-1">
                <div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
                  <Icons.Sparkles size={18} />
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

              <div className="flex items-center gap-3 py-2 px-1">
                <div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-tertiary">
                  <Icons.MapPin size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    Dubai, UAE
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Open to in-person workshops, on-site, or hybrid
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 py-2 px-1">
                <div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                  <Icons.Briefcase size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    Versatile Engagement
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Full-time Staff, Contract TPM, or Tech Advisory
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Coordinates Component */}
            <DirectCoordinates />
          </div>

          {/* RIGHT COLUMN: Interactive Web3Forms Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
