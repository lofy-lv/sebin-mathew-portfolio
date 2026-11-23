"use client";

import React, { useRef, useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { Icons } from "@/components/ui/Icons";
import { ProjectThumbnail } from "@/components/ui/ProjectThumbnail";

export function FeaturedProjects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // Prioritize featured projects first, followed by remaining live shipments
  const sortedProjects = useMemo(() => {
    return [
      ...projectsData.filter((p) => p.featured),
      ...projectsData.filter((p) => !p.featured),
    ];
  }, []);

  const additionalDeployments = [
    "tribesalon.in",
    "gaspetworld.com",
    "harmanmotors.in",
    "signaturehardwares.com",
    "drksaesthetics.com",
    "comorinsolar.com",
  ];

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  // Autoplay effect: advances card every 3.5 seconds, pauses when user hovers or interacts
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;
      const { scrollLeft, scrollWidth, clientWidth } = el;
      const card = el.firstElementChild as HTMLElement;
      const cardWidth = card ? card.offsetWidth + 20 : 340;

      // Loop back to start if at the end of the carousel
      if (scrollLeft + clientWidth >= scrollWidth - 25) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleScroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const card = el.firstElementChild as HTMLElement;
    const cardWidth = card ? card.offsetWidth + 20 : 340;
    const multiplier = typeof window !== "undefined" && window.innerWidth >= 1024 ? 2 : 1;
    const distance = cardWidth * multiplier;

    if (direction === "right" && scrollLeft + clientWidth >= scrollWidth - 20) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else if (direction === "left" && scrollLeft <= 10) {
      el.scrollTo({ left: scrollWidth, behavior: "smooth" });
    } else {
      el.scrollBy({
        left: direction === "left" ? -distance : distance,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full py-20 px-6 md:px-10 lg:px-14 bg-surface-container-lowest/40 relative overflow-hidden" id="projects">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
                PORTFOLIO EVIDENCE
              </span>
            </div>
            <h2 className="font-display text-headline-lg font-bold text-on-surface tracking-tight">
              Selected Live Products & Platforms{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Delivered
              </span>
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Real enterprise SaaS, EdTech, recruitment, and marketplace systems delivered across cross-functional engineering teams.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-auto">
            <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container border border-outline-variant/40 text-on-surface-variant font-label-sm text-label-sm shadow-sm">
              <Icons.CheckCircle2 className="text-tertiary" size={16} />
              <span className="font-medium text-on-surface">33 Total Verified Shipments</span>
            </div>

            {/* Manual Next & Previous Carousel Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleScroll("left")}
                disabled={!canScrollLeft}
                aria-label="Previous projects"
                className="p-2.5 rounded-xl bg-surface-container-high/90 hover:bg-surface-container-highest border border-outline-variant/40 hover:border-primary/50 text-on-surface hover:text-primary transition-all disabled:opacity-30 disabled:pointer-events-none active:scale-95 shadow-sm cursor-pointer"
              >
                <Icons.ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => handleScroll("right")}
                disabled={!canScrollRight}
                aria-label="Next projects"
                className="p-2.5 rounded-xl bg-surface-container-high/90 hover:bg-surface-container-highest border border-outline-variant/40 hover:border-primary/50 text-on-surface hover:text-primary transition-all disabled:opacity-30 disabled:pointer-events-none active:scale-95 shadow-sm cursor-pointer"
              >
                <Icons.ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Container with Floating Next/Prev Overlays & Auto-play Pause on Hover */}
        <div
          className="relative group/carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Floating Left Button (Desktop) */}
          <button
            type="button"
            onClick={() => handleScroll("left")}
            disabled={!canScrollLeft}
            aria-label="Previous project"
            className={`absolute -left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-11 h-11 rounded-full bg-surface-container-highest/90 hover:bg-surface-container-high backdrop-blur-md border border-outline-variant/60 text-on-surface hover:text-primary shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer ${
              !canScrollLeft ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <Icons.ChevronLeft size={22} />
          </button>

          {/* Floating Right Button (Desktop) */}
          <button
            type="button"
            onClick={() => handleScroll("right")}
            disabled={!canScrollRight}
            aria-label="Next project"
            className={`absolute -right-3 lg:-right-5 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-11 h-11 rounded-full bg-surface-container-highest/90 hover:bg-surface-container-high backdrop-blur-md border border-outline-variant/60 text-on-surface hover:text-primary shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer ${
              !canScrollRight ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <Icons.ChevronRight size={22} />
          </button>

          {/* Scrollable Track */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory py-3 px-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {sortedProjects.map((proj) => {
              const projectUrl = proj.domain || proj.liveUrl;
              const displayHost = projectUrl
                ? projectUrl.replace(/^https?:\/\//, "").replace(/\/.*$/, "")
                : "";

              return (
                <div
                  key={proj.id}
                  className="group snap-start shrink-0 flex flex-col rounded-2xl bg-surface-container-low border border-outline-variant/40 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10 w-[85vw] xs:w-[320px] sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[calc(25%-15px)] select-none"
                >
                  <div className="w-full mb-4">
                    <ProjectThumbnail
                      src={proj.image}
                      title={proj.title}
                      category={proj.category}
                      domain={proj.domain}
                      className="rounded-xl overflow-hidden border border-outline-variant/40"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="px-2 py-0.5 rounded-full bg-secondary/15 text-secondary font-label-sm text-[10px] font-bold uppercase tracking-wider">
                      {proj.category}
                    </span>
                    {projectUrl && (
                      <a
                        href={projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-label-sm text-xs text-secondary hover:underline flex items-center gap-0.5 font-medium"
                      >
                        <span>{displayHost}</span>
                        <Icons.ExternalLink size={12} />
                      </a>
                    )}
                  </div>

                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-1.5">
                    {proj.title}
                  </h3>

                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-3 line-clamp-3">
                    {proj.description}
                  </p>

                  {/* Role Attribution Badge */}
                  <div className="mb-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-container-high/80 border border-outline-variant/30 text-[11px] font-label-sm font-medium text-on-surface-variant w-fit">
                    <span className="text-tertiary font-semibold">Role:</span>
                    <span className="text-on-surface">{proj.role || "Technical PM @ Esight"}</span>
                  </div>

                  <div className="mt-auto flex flex-wrap gap-1.5 pt-2 border-t border-outline-variant/40">
                    {proj.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-[11px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Directory CTA Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-surface-container-low border border-outline-variant/30">
          <div className="flex items-center gap-2.5 text-on-surface-variant font-label-sm text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
            </span>
            <span>
              Auto-moving showcase ({sortedProjects.length} live products) • Hover or swipe to pause, or use arrows
            </span>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-surface-container-high text-primary hover:bg-primary hover:text-on-primary font-label-md text-label-md font-semibold transition-all shrink-0"
          >
            <span>Explore All 33 Projects Directory</span>
            <Icons.ArrowRight size={16} />
          </Link>
        </div>

        {/* Additional Verified Deployments Strip */}
        <div className="pt-4 border-t border-outline-variant/40 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center">
          <span className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider font-semibold">
            Additional Verified Deployments:
          </span>
          {additionalDeployments.map((domain, i) => (
            <React.Fragment key={domain}>
              <Link
                href="/projects"
                className="font-label-sm text-xs text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
              >
                {domain}
              </Link>
              {i < additionalDeployments.length - 1 && (
                <span className="text-outline-variant/40">•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
