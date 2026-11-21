"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  Layers,
  Smartphone,
  Globe,
  Building2,
  ExternalLink,
  Code2,
} from "lucide-react";

interface ProjectThumbnailProps {
  src: string;
  title: string;
  category: string;
  domain?: string;
  className?: string;
}

export function ProjectThumbnail({
  src,
  title,
  category,
  domain,
  className = "",
}: ProjectThumbnailProps) {
  const [imgError, setImgError] = useState(false);

  // Category-specific visual accents
  const getCategoryConfig = (cat: string) => {
    switch (cat.toLowerCase()) {
      case "ai & automation":
        return {
          icon: Sparkles,
          glow: "from-primary/20 to-primary-container/10",
          border: "border-primary/30",
          badgeColor: "text-primary bg-primary/10 border-primary/20",
          accentColor: "#D0BCFF",
        };
      case "saas":
        return {
          icon: Layers,
          glow: "from-secondary/20 to-secondary-container/10",
          border: "border-secondary/30",
          badgeColor: "text-secondary bg-secondary/10 border-secondary/20",
          accentColor: "#FFB783",
        };
      case "mobile app":
        return {
          icon: Smartphone,
          glow: "from-tertiary/20 to-tertiary-container/10",
          border: "border-tertiary/30",
          badgeColor: "text-tertiary bg-tertiary/10 border-tertiary/20",
          accentColor: "#3CDDC7",
        };
      case "web platform":
        return {
          icon: Globe,
          glow: "from-blue-500/20 to-primary/10",
          border: "border-blue-400/30",
          badgeColor: "text-blue-400 bg-blue-500/10 border-blue-400/20",
          accentColor: "#60A5FA",
        };
      default: // Business Websites
        return {
          icon: Building2,
          glow: "from-amber-500/15 to-surface-container-high/40",
          border: "border-outline-variant/40",
          badgeColor: "text-on-surface-variant bg-surface-container border-outline-variant/30",
          accentColor: "#E2E2E9",
        };
    }
  };

  const config = getCategoryConfig(category);
  const IconComponent = config.icon;

  // Clean hostname for watermark
  const cleanDomain = domain
    ? domain.replace(/^https?:\/\//, "").replace(/\/.*$/, "")
    : "";

  return (
    <div
      className={`relative aspect-[16/10] w-full overflow-hidden bg-surface-container-lowest ${className}`}
    >
      {!imgError && src ? (
        <Image
          src={src}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => setImgError(true)}
        />
      ) : (
        /* Styled Branded Architectural Fallback */
        <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-br from-surface-container-low via-surface-container to-surface-container-lowest border border-outline-variant/30 transition-all duration-500 group-hover:border-primary/40">
          {/* Subtle ambient radial glow orb */}
          <div
            className={`absolute inset-0 bg-gradient-to-tr ${config.glow} opacity-60 blur-xl pointer-events-none group-hover:opacity-90 transition-opacity`}
          />

          {/* Background Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
              backgroundSize: "16px 16px",
            }}
          />

          {/* Top Bar: Category Pill */}
          <div className="relative z-10 flex items-center justify-between">
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-label-sm font-semibold tracking-wide backdrop-blur-md ${config.badgeColor}`}
            >
              <IconComponent size={12} />
              <span>{category}</span>
            </span>

            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-surface-container-high/80 text-[10px] font-mono text-outline uppercase tracking-wider">
              <Code2 size={11} />
              <span>LIVE</span>
            </span>
          </div>

          {/* Center Brand Feature */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto py-2 text-center">
            <div
              className={`w-12 h-12 rounded-2xl bg-surface-container-high/80 border ${config.border} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1`}
              style={{ color: config.accentColor }}
            >
              <IconComponent size={24} />
            </div>
            <span className="font-headline-sm text-sm font-bold text-on-surface mt-2 tracking-tight group-hover:text-primary transition-colors line-clamp-1">
              {title}
            </span>
          </div>

          {/* Bottom Watermark: Domain Pill */}
          <div className="relative z-10 flex items-center justify-between pt-2 border-t border-outline-variant/20">
            <span className="font-mono text-[11px] text-on-surface-variant group-hover:text-on-surface transition-colors truncate max-w-[190px]">
              {cleanDomain || "Live Deployment"}
            </span>
            <ExternalLink
              size={12}
              className="text-outline group-hover:text-primary transition-colors shrink-0"
            />
          </div>
        </div>
      )}
    </div>
  );
}
