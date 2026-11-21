import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { Icons } from "@/components/ui/Icons";
import { GlowOrb } from "@/components/ui/GlowOrb";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-24 px-margin-mobile lg:px-margin">
      {/* Ambient atmospheric glows */}
      <GlowOrb color="primary" size="lg" className="-top-32 -left-20" />
      <GlowOrb color="secondary" size="xl" className="top-1/3 -right-24" />

      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center relative z-10">
        {/* Left Column (Hero Content) */}
        <div className="lg:col-span-7 flex flex-col items-start gap-space-md">
          {/* Live Status Chip */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high/80 backdrop-blur-md border border-outline-variant/40 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-tertiary"></span>
            </span>
            <span className="font-label-sm text-label-sm text-tertiary font-semibold tracking-wide">
              {siteConfig.availability.subtitle}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-display lg:text-[62px] lg:leading-[70px] font-bold text-on-surface tracking-tight">
            Hi, I&apos;m Sebin. I turn ideas into{" "}
            <span className="bg-gradient-to-r from-primary via-primary-container to-secondary bg-clip-text text-transparent">
              products people actually use.
            </span>
          </h1>

          {/* Subtitle & Bio */}
          <div className="flex flex-col gap-2">
            <p className="font-headline-sm text-headline-sm text-primary-fixed-dim font-medium tracking-tight">
              {siteConfig.title}
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
              {siteConfig.bio}
            </p>
          </div>

          {/* Action Button Row */}
          <div className="flex flex-wrap items-center gap-space-sm pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-container to-secondary text-on-primary font-headline-sm text-label-md font-semibold shadow-glow-amber hover:brightness-110 active:scale-95 transition-all"
            >
              <span>Contact Me</span>
              <Icons.ArrowRight size={18} />
            </Link>

            <a
              href={siteConfig.contact.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-surface-container/70 backdrop-blur-md text-on-surface font-label-md font-medium hover:bg-surface-container-high transition-colors border border-outline-variant/30"
            >
              <Icons.Phone size={18} className="text-tertiary" />
              <span>Call Me</span>
            </a>

            <a
              href={siteConfig.contact.cvPath}
              download
              className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-on-surface-variant hover:text-primary font-label-md font-medium transition-colors"
            >
              <Icons.Download size={18} />
              <span>Download CV</span>
            </a>
          </div>
        </div>

        {/* Right Column (Portrait & Floating Badges) */}
        <div className="lg:col-span-5 relative flex items-center justify-center mt-12 lg:mt-0">
          {/* Subtle Glows behind portrait */}
          <div className="absolute w-72 h-72 rounded-full bg-primary/25 blur-[90px] -top-6 -left-6 pointer-events-none"></div>
          <div className="absolute w-64 h-64 rounded-full bg-secondary/20 blur-[90px] -bottom-6 -right-6 pointer-events-none"></div>

          {/* Central Portrait Frame */}
          <div className="relative w-72 sm:w-80 lg:w-84 aspect-[4/5] rounded-3xl overflow-hidden bg-surface-container-high shadow-2xl ring-1 ring-outline-variant/30">
            <Image
              src={siteConfig.contact.portraitPath}
              alt={siteConfig.name}
              fill
              sizes="(max-width: 768px) 320px, 380px"
              className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-surface-container-lowest/85 backdrop-blur-lg border border-outline-variant/30 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-label-md text-label-md font-bold text-on-surface">
                  {siteConfig.name}
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  {siteConfig.certifications}
                </span>
              </div>
              <Icons.ShieldCheck className="text-tertiary" size={22} />
            </div>
          </div>

          {/* Floating Glass Card 1: PRD */}
          <div
            className="absolute -top-4 -left-4 sm:left-4 z-20 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-surface-container-high/85 backdrop-blur-xl border border-outline-variant/40 shadow-xl shadow-surface-container-lowest/40 animate-bounce"
            style={{ animationDuration: "4s" }}
          >
            <div className="p-2 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
              <Icons.FileText size={18} />
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-label-md font-bold text-on-surface">PRD</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">Specs & Scopes</span>
            </div>
          </div>

          {/* Floating Glass Card 2: Agile */}
          <div className="absolute top-1/2 -right-6 sm:-right-4 z-20 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-surface-container-high/85 backdrop-blur-xl border border-outline-variant/40 shadow-xl shadow-surface-container-lowest/40">
            <div className="p-2 rounded-lg bg-tertiary/20 text-tertiary flex items-center justify-center">
              <Icons.RefreshCw size={18} />
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-label-md font-bold text-on-surface">Agile</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">2-Wk Sprints</span>
            </div>
          </div>

          {/* Floating Glass Card 3: AI-Ready */}
          <div className="absolute -bottom-5 left-10 z-20 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-surface-container-high/85 backdrop-blur-xl border border-outline-variant/40 shadow-xl shadow-surface-container-lowest/40">
            <div className="p-2 rounded-lg bg-secondary/20 text-secondary flex items-center justify-center">
              <Icons.Sparkles size={18} />
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-label-md font-bold text-on-surface">AI-ready</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">LLM Workflows</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
