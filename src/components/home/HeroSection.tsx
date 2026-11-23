import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { Icons } from "@/components/ui/Icons";
import { GlowOrb } from "@/components/ui/GlowOrb";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-x-clip py-16 lg:py-24">
      {/* Ambient atmospheric glows */}
      <GlowOrb color="primary" size="lg" className="-top-32 -left-20" />
      <GlowOrb color="secondary" size="xl" className="top-1/3 right-0" />

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center relative z-10">
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
          <h1 className="font-display text-display lg:text-[60px] xl:text-[68px] lg:leading-[68px] xl:leading-[76px] font-bold text-on-surface tracking-tight">
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
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl xl:max-w-3xl leading-relaxed">
              {siteConfig.bio}
            </p>
          </div>

          {/* Action Button Row with WhatsApp Quick-Chat */}
          <div className="w-full grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:w-auto sm:items-center sm:gap-3 pt-2">
            <Link
              href="/contact"
              className="h-11 sm:h-12 px-3 sm:px-6 rounded-xl bg-gradient-to-r from-primary-container to-secondary text-on-primary font-headline-sm text-label-sm sm:text-label-md font-semibold shadow-glow-amber hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-1.5 sm:gap-2"
            >
              <span>Contact Me</span>
              <Icons.ArrowRight size={16} className="shrink-0" />
            </Link>

            {/* WhatsApp Me (UAE Recruiter Quick-Chat) */}
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Sebin on WhatsApp"
              className="h-11 sm:h-12 px-3 sm:px-5 rounded-xl bg-tertiary/10 hover:bg-tertiary/20 text-tertiary border border-tertiary/30 font-label-md text-label-sm sm:text-label-md font-semibold shadow-[0_0_20px_-5px_rgba(45,212,191,0.25)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-1.5 sm:gap-2"
            >
              <Icons.WhatsApp size={16} className="shrink-0" />
              <span>WhatsApp Me</span>
            </a>

            <a
              href={siteConfig.contact.phoneHref}
              className="h-11 sm:h-12 px-3 sm:px-5 rounded-xl bg-surface-container-high/80 hover:bg-surface-container-highest border border-outline-variant/30 text-on-surface font-label-md text-label-sm sm:text-label-md font-medium hover:border-tertiary/40 active:scale-95 transition-all flex items-center justify-center gap-1.5 sm:gap-2"
            >
              <Icons.Phone size={16} className="text-tertiary shrink-0" />
              <span>Call Me</span>
            </a>

            <a
              href={siteConfig.contact.cvPath}
              download
              className="h-11 sm:h-12 px-3 sm:px-5 rounded-xl bg-surface-container-high/80 hover:bg-surface-container-highest border border-outline-variant/30 text-on-surface font-label-md text-label-sm sm:text-label-md font-medium hover:text-primary hover:border-primary/40 active:scale-95 transition-all flex items-center justify-center gap-1.5 sm:gap-2"
            >
              <Icons.Download size={16} className="shrink-0" />
              <span>Download CV</span>
            </a>
          </div>
        </div>

        {/* Right Column (Portrait & Floating Badges) */}
        <div className="lg:col-span-5 relative flex items-center justify-center mt-12 lg:mt-0 py-8">
          {/* Portrait Container with Relative Anchor for Floating Badges */}
          <div className="relative">
            {/* Subtle Glows behind portrait (contained within portrait anchor) */}
            <div className="absolute w-64 h-64 rounded-full bg-primary/20 blur-[80px] -top-4 -left-4 pointer-events-none"></div>
            <div className="absolute w-60 h-60 rounded-full bg-secondary/20 blur-[80px] -bottom-4 -right-4 pointer-events-none"></div>

            {/* Central Portrait Frame */}
            <div className="relative w-[280px] sm:w-[320px] md:w-[340px] lg:w-[350px] xl:w-[380px] aspect-[4/5] rounded-3xl overflow-hidden bg-surface-container-high shadow-2xl ring-1 ring-outline-variant/30">
              <Image
                src={siteConfig.contact.portraitPath}
                alt={siteConfig.name}
                fill
                sizes="(max-width: 768px) 320px, 400px"
                className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent opacity-50"></div>
            </div>

            {/* Floating Glass Card 1: PRD (Top-Left) */}
            <div
              className="absolute -top-3 -left-2 sm:-left-5 z-20 flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-surface-container-high/95 backdrop-blur-xl border border-outline-variant/40 shadow-xl shadow-surface-container-lowest/50 animate-float-1 hover:scale-105 active:scale-95 transition-transform duration-300 cursor-pointer"
            >
              <div className="p-1.5 rounded-lg bg-primary/20 text-primary flex items-center justify-center shrink-0">
                <Icons.FileText size={16} />
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-xs sm:text-label-md font-bold text-on-surface">PRD</span>
                <span className="font-label-sm text-[10px] sm:text-label-sm text-on-surface-variant whitespace-nowrap">Specs & Scopes</span>
              </div>
            </div>

            {/* Floating Glass Card 2: Agile (Upper-Right) */}
            <div
              className="absolute top-12 sm:top-16 -right-2 sm:-right-5 z-20 flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-surface-container-high/95 backdrop-blur-xl border border-outline-variant/40 shadow-xl shadow-surface-container-lowest/50 animate-float-2 hover:scale-105 active:scale-95 transition-transform duration-300 cursor-pointer"
            >
              <div className="p-1.5 rounded-lg bg-tertiary/20 text-tertiary flex items-center justify-center shrink-0">
                <Icons.RefreshCw size={16} />
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-xs sm:text-label-md font-bold text-on-surface">Agile</span>
                <span className="font-label-sm text-[10px] sm:text-label-sm text-on-surface-variant whitespace-nowrap">2-Wk Sprints</span>
              </div>
            </div>

            {/* Floating Glass Card 3: Sebin Mathew Identity Badge (Bottom-Left) */}
            <div
              className="absolute -bottom-3 -left-2 sm:-left-5 z-20 flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-surface-container-high/95 backdrop-blur-xl border border-outline-variant/40 shadow-xl shadow-surface-container-lowest/50 animate-float-3 hover:scale-105 active:scale-95 transition-transform duration-300 cursor-pointer"
            >
              <div className="p-1.5 rounded-xl bg-tertiary/20 text-tertiary flex items-center justify-center shrink-0">
                <Icons.ShieldCheck size={18} />
              </div>
              <div className="flex flex-col">
                <span className="font-label-md text-xs sm:text-label-md font-bold text-on-surface whitespace-nowrap">
                  {siteConfig.name}
                </span>
                <span className="font-label-sm text-[10px] sm:text-label-sm text-on-surface-variant whitespace-nowrap">
                  {siteConfig.certifications}
                </span>
              </div>
            </div>

            {/* Floating Glass Card 4: AI-Ready (Lower-Right) */}
            <div
              className="absolute bottom-12 sm:bottom-16 -right-2 sm:-right-5 z-20 flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-surface-container-high/95 backdrop-blur-xl border border-outline-variant/40 shadow-xl shadow-surface-container-lowest/50 animate-float-4 hover:scale-105 active:scale-95 transition-transform duration-300 cursor-pointer"
            >
              <div className="p-1.5 rounded-lg bg-secondary/20 text-secondary flex items-center justify-center shrink-0">
                <Icons.Sparkles size={16} />
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-xs sm:text-label-md font-bold text-on-surface whitespace-nowrap">AI-ready</span>
                <span className="font-label-sm text-[10px] sm:text-label-sm text-on-surface-variant whitespace-nowrap">LLM Workflows</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
