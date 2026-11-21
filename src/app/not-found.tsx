import React from "react";
import Link from "next/link";
import { Icons } from "@/components/ui/Icons";
import { GlowOrb } from "@/components/ui/GlowOrb";

export default function NotFound() {
  return (
    <main className="w-full min-h-[calc(100vh-160px)] bg-surface relative flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Ambient Radial Glow Accents */}
      <GlowOrb color="primary" size="lg" className="-top-24 left-1/4" />
      <GlowOrb color="secondary" size="lg" className="bottom-10 right-1/4" />
      <GlowOrb color="tertiary" size="md" className="top-1/2 left-10" />

      <div className="relative z-10 max-w-xl w-full p-8 sm:p-12 rounded-3xl bg-[#1D2330]/80 backdrop-blur-xl border border-outline-variant/30 shadow-2xl text-center flex flex-col items-center">
        {/* 404 Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container border border-outline-variant/40 text-tertiary font-label-sm text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
          </span>
          <span>404 · Route Not Found</span>
        </div>

        {/* 404 Large Display */}
        <div className="font-display text-7xl sm:text-8xl font-extrabold bg-gradient-to-r from-[#8B5CF6] via-primary to-[#FB923C] bg-clip-text text-transparent tracking-tighter leading-none mb-4 select-none">
          404
        </div>

        {/* Headline */}
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-on-surface tracking-tight mb-3">
          Page not found — looks like this route hasn&apos;t shipped yet.
        </h1>

        {/* Subtitle / Context */}
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto mb-8 leading-relaxed">
          The requested coordinate or project branch is not part of this deployment. Check the navigation or explore shipped platforms in the directory.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-on-primary font-label-md text-label-md font-semibold hover:opacity-95 transition-all shadow-lg shadow-primary/20"
          >
            <Icons.Home size={17} />
            <span>Return Home</span>
          </Link>
          <Link
            href="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/40 text-on-surface font-label-md text-label-md font-semibold transition-all"
          >
            <Icons.KanbanSquare size={17} />
            <span>Browse Projects</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
