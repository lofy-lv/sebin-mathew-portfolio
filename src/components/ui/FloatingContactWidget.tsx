"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/site-config";
import { Icons } from "@/components/ui/Icons";

export function FloatingContactWidget() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <aside
      aria-label="Quick Contact Floating Actions"
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex flex-col items-end gap-3 pointer-events-auto"
    >
      {/* 1. Direct Call Action Button */}
      <div className="relative group flex items-center">
        {/* Tooltip (Desktop) */}
        <div
          role="tooltip"
          className="pointer-events-none absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-[#1D2330]/95 backdrop-blur-xl border border-outline-variant/30 text-on-surface text-xs font-label-md font-semibold whitespace-nowrap opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shadow-xl hidden sm:flex items-center gap-1.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
          <span>Call: {siteConfig.contact.phone}</span>
        </div>

        {/* Call Link */}
        <a
          href={siteConfig.contact.phoneHref}
          aria-label={`Call Sebin Mathew in UAE at ${siteConfig.contact.phone}`}
          className="w-12 h-12 rounded-full bg-[#1D2330]/90 backdrop-blur-md border border-secondary/40 text-secondary hover:text-white hover:bg-secondary/20 hover:border-secondary hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center shadow-lg shadow-black/50 group focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-surface"
        >
          <Icons.Phone size={19} className="transition-transform group-hover:rotate-12" />
        </a>
      </div>

      {/* 2. WhatsApp Action Button */}
      <div className="relative group flex items-center">
        {/* Tooltip (Desktop) */}
        <div
          role="tooltip"
          className="pointer-events-none absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-[#1D2330]/95 backdrop-blur-xl border border-tertiary/30 text-on-surface text-xs font-label-md font-semibold whitespace-nowrap opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shadow-xl hidden sm:flex items-center gap-1.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
          <span>WhatsApp Quick-Chat</span>
        </div>

        {/* Subtle Ambient Pulse Ring */}
        <span
          className="absolute -inset-1 rounded-full bg-[#25D366] opacity-25 animate-ping pointer-events-none"
          aria-hidden="true"
        />

        {/* WhatsApp Link */}
        <a
          href={siteConfig.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Sebin Mathew on WhatsApp"
          className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-[#25D366] to-[#2DD4BF] text-white shadow-xl shadow-[#25D366]/30 hover:shadow-2xl hover:shadow-[#25D366]/50 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#2DD4BF] focus:ring-offset-2 focus:ring-offset-surface"
        >
          <Icons.WhatsApp size={28} className="drop-shadow-sm transition-transform group-hover:scale-110" />

          {/* Online / Active Badge Indicator */}
          <span
            className="absolute top-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-[#2DD4BF] border-2 border-[#0B0D12] shadow-sm"
            title="Available in UAE"
            aria-hidden="true"
          />
        </a>
      </div>
    </aside>
  );
}
