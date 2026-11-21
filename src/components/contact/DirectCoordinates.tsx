"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site-config";
import { Icons } from "@/components/ui/Icons";

export function DirectCoordinates() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-surface-container-low/90 backdrop-blur-xl border border-outline-variant/30 shadow-xl flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
          Direct Coordinates
        </h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Immediate response for recruitment, contracts, and full-time leadership inquiries.
        </p>
      </div>

      <div className="flex flex-col gap-3.5">
        {/* Email Item with Copy Button */}
        <div className="flex items-center justify-between p-3.5 rounded-xl bg-surface-container-high/60 hover:bg-surface-container-high border border-outline-variant/20 transition-all group">
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="p-2.5 rounded-lg bg-primary/20 text-primary group-hover:scale-110 transition-transform">
              <Icons.Mail size={20} />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Direct Inbox
              </span>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="font-body-md text-body-md text-on-surface hover:text-primary font-medium truncate"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
          <button
            onClick={handleCopyEmail}
            className="p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-highest text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center shrink-0"
            title="Copy email to clipboard"
          >
            {copied ? (
              <span className="flex items-center gap-1 text-tertiary font-label-sm text-xs font-semibold">
                <Icons.Check size={16} /> Copied!
              </span>
            ) : (
              <Icons.Copy size={16} />
            )}
          </button>
        </div>

        {/* UAE Phone Line */}
        <a
          href={siteConfig.contact.phoneHref}
          className="flex items-center justify-between p-3.5 rounded-xl bg-surface-container-high/60 hover:bg-surface-container-high border border-outline-variant/20 transition-all group"
        >
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-lg bg-tertiary/20 text-tertiary group-hover:scale-110 transition-transform">
              <Icons.Phone size={20} />
            </div>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                UAE Direct Line
              </span>
              <span className="font-body-md text-body-md text-on-surface font-medium">
                {siteConfig.contact.phone}
              </span>
            </div>
          </div>
          <span className="p-2 rounded-lg text-tertiary font-label-sm text-xs font-semibold group-hover:translate-x-0.5 transition-transform">
            Call <Icons.ArrowRight size={14} className="inline ml-0.5" />
          </span>
        </a>

        {/* LinkedIn */}
        <a
          href={siteConfig.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-3.5 rounded-xl bg-surface-container-high/60 hover:bg-surface-container-high border border-outline-variant/20 transition-all group"
        >
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="p-2.5 rounded-lg bg-secondary/20 text-secondary group-hover:scale-110 transition-transform">
              <Icons.Share2 size={20} />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                LinkedIn Profile
              </span>
              <span className="font-body-md text-body-md text-on-surface font-medium truncate">
                {siteConfig.contact.linkedinDisplay}
              </span>
            </div>
          </div>
          <Icons.ExternalLink size={16} className="text-outline group-hover:text-secondary shrink-0 mr-2" />
        </a>

        {/* Dubai Physical Base */}
        <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-surface-container-high/60 border border-outline-variant/20">
          <div className="p-2.5 rounded-lg bg-primary-container/20 text-primary">
            <Icons.Building size={20} />
          </div>
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Location & Availability
            </span>
            <span className="font-body-md text-body-md text-on-surface font-medium">
              {siteConfig.availability.location} · Immediate Joiner
            </span>
          </div>
        </div>
      </div>

      {/* SLA Note */}
      <div className="p-4 rounded-xl bg-tertiary/10 border border-tertiary/20 flex items-center gap-3">
        <Icons.Sparkles className="text-tertiary shrink-0" size={20} />
        <span className="font-label-sm text-label-sm text-tertiary font-medium">
          Under 24 hours average response SLA for recruiters & clients in UAE/Global.
        </span>
      </div>
    </div>
  );
}
