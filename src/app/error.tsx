"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { Icons } from "@/components/ui/Icons";
import { GlowOrb } from "@/components/ui/GlowOrb";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log unexpected client or server render errors
    console.error("ErrorBoundary caught:", error);
  }, [error]);

  return (
    <main className="w-full min-h-[calc(100vh-160px)] bg-surface relative flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Ambient background glows */}
      <GlowOrb color="secondary" size="lg" className="-top-20 left-1/3" />
      <GlowOrb color="primary" size="lg" className="bottom-10 right-1/4" />

      <div className="relative z-10 max-w-lg w-full p-8 sm:p-10 rounded-3xl bg-[#1D2330]/90 backdrop-blur-xl border border-outline-variant/30 shadow-2xl text-center flex flex-col items-center">
        {/* Warning Icon Badge */}
        <div className="w-14 h-14 rounded-2xl bg-secondary/15 border border-secondary/30 text-secondary flex items-center justify-center mb-5 shadow-inner">
          <Icons.AlertTriangle size={28} />
        </div>

        {/* Error Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-outline-variant/40 text-secondary font-label-sm text-xs font-semibold uppercase tracking-wider mb-4">
          <span>System Exception Encountered</span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-on-surface tracking-tight mb-3">
          Something interrupted this interface.
        </h1>

        <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto mb-6 leading-relaxed">
          An unexpected rendering error occurred. Our logging captured this event, and you can reload the component tree or reach out directly.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full mb-6">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-on-primary font-label-md text-label-md font-semibold hover:opacity-95 transition-all shadow-lg shadow-primary/20 cursor-pointer"
          >
            <Icons.RefreshCw size={17} />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/40 text-on-surface font-label-md text-label-md font-semibold transition-all"
          >
            <Icons.Home size={17} />
            <span>Home</span>
          </Link>
        </div>

        {/* Fallback Contact Links */}
        <div className="pt-4 border-t border-outline-variant/30 w-full flex items-center justify-center gap-4 text-xs font-label-sm text-on-surface-variant">
          <span>Need immediate assistance?</span>
          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Sebin on WhatsApp"
            className="text-tertiary hover:underline inline-flex items-center gap-1 font-semibold"
          >
            <Icons.WhatsApp size={14} /> WhatsApp Me
          </a>
          <span>•</span>
          <Link href="/contact" className="hover:text-primary transition-colors font-medium">
            Contact Form
          </Link>
        </div>
      </div>
    </main>
  );
}
