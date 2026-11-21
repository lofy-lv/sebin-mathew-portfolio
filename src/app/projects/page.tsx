"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { projectCategories, projectsData } from "@/data/projects";
import { Icons } from "@/components/ui/Icons";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { ProjectThumbnail } from "@/components/ui/ProjectThumbnail";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Dynamic Dashboard Counters
  const totalCount = projectsData.length;
  const shippedCount = useMemo(
    () => projectsData.filter((p) => p.status.toLowerCase() === "shipped").length,
    []
  );
  const ongoingCount = useMemo(
    () => projectsData.filter((p) => p.status.toLowerCase() === "ongoing").length,
    []
  );
  const planningCount = useMemo(
    () => projectsData.filter((p) => p.status.toLowerCase() === "planning").length,
    []
  );

  // Dynamic Category Counts
  const getCategoryCount = (catId: string) => {
    if (catId === "all") return totalCount;
    return projectsData.filter(
      (p) => p.category.toLowerCase() === catId.toLowerCase()
    ).length;
  };

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" ||
        project.category.toLowerCase() === selectedCategory.toLowerCase();

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.category.toLowerCase().includes(q) ||
        project.tags.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="w-full bg-surface min-h-[calc(100vh-80px)] relative overflow-hidden">
      {/* Top Ambient Glow Accents */}
      <GlowOrb color="primary" size="lg" className="-top-32 left-1/4" />
      <GlowOrb color="secondary" size="lg" className="top-10 right-10" />
      <GlowOrb color="tertiary" size="xl" className="top-96 left-10" />

      {/* Main Container */}
      <div className="max-w-[1400px] w-full mx-auto px-margin-mobile lg:px-margin py-8 md:py-12 flex flex-col gap-10 relative z-10">
        {/* HEADER BLOCK */}
        <div className="flex flex-col gap-6">
          {/* Breadcrumb & Directory Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
              <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1.5">
                <Icons.KanbanSquare size={16} /> Home
              </Link>
              <span className="text-outline-variant">/</span>
              <span className="text-on-surface font-semibold">Projects</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-low border border-outline-variant/30 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold">
                Portfolio Directory · {totalCount} Deliveries
              </span>
            </div>
          </div>

          {/* Title & Bento Bar Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                  Engineered Platforms & Shipped Systems
                </span>
              </div>
              <h1 className="font-display text-headline-lg lg:text-display text-on-surface tracking-tight leading-none">
                My{" "}
                <span className="bg-gradient-to-r from-primary-container via-primary to-secondary bg-clip-text text-transparent">
                  Projects
                </span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl pt-1 leading-relaxed">
                A comprehensive archive of high-throughput web platforms, SaaS ecosystems, cross-platform mobile apps, and agentic AI automations delivered from discovery to scaled production.
              </p>
            </div>

            {/* Quick Metrics Bento Bar (Dynamically Computed) */}
            <div className="lg:col-span-4 flex items-center justify-end">
              <div className="w-full grid grid-cols-3 sm:grid-cols-5 gap-2 p-2.5 rounded-xl bg-surface-container-low/90 backdrop-blur-xl border border-outline-variant/30 shadow-lg">
                <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-surface-container/60 text-center">
                  <span className="font-display text-headline-sm text-primary font-bold leading-none">
                    {totalCount}
                  </span>
                  <span className="font-label-sm text-[10px] text-on-surface-variant uppercase mt-1">
                    Total
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-surface-container/60 text-center">
                  <span className="font-display text-headline-sm text-tertiary font-bold leading-none">
                    {shippedCount}
                  </span>
                  <span className="font-label-sm text-[10px] text-on-surface-variant uppercase mt-1">
                    Shipped
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-surface-container/60 text-center">
                  <span className="font-display text-headline-sm text-secondary font-bold leading-none">
                    {ongoingCount}
                  </span>
                  <span className="font-label-sm text-[10px] text-on-surface-variant uppercase mt-1">
                    Ongoing
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-surface-container/60 text-center">
                  <span className="font-display text-headline-sm text-primary-fixed-dim font-bold leading-none">
                    {planningCount}
                  </span>
                  <span className="font-label-sm text-[10px] text-on-surface-variant uppercase mt-1">
                    Planning
                  </span>
                </div>
                <div className="col-span-3 sm:col-span-1 flex flex-col items-center justify-center p-2 rounded-lg bg-surface-container-high/80 text-center">
                  <span className="font-display text-headline-sm text-tertiary-fixed font-bold leading-none">
                    100%
                  </span>
                  <span className="font-label-sm text-[10px] text-on-surface-variant uppercase mt-1">
                    CSAT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CONTROLS BAR: Category Filters & Search */}
        <div className="p-3 md:p-4 rounded-2xl bg-surface-container-low/90 backdrop-blur-xl border border-outline-variant/30 shadow-md flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Interactive Category Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
            {projectCategories.map((cat) => {
              const isActive = selectedCategory.toLowerCase() === cat.id.toLowerCase();
              const count = getCategoryCount(cat.id);
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-label-md text-label-md transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-gradient-to-r from-primary-container to-secondary text-on-primary font-semibold shadow-sm"
                      : "bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface font-medium"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                      isActive
                        ? "bg-surface-container-lowest/40 text-on-primary"
                        : "bg-surface-container-lowest text-primary"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative flex-1 sm:w-80">
            <Icons.Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-outline" size={18} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects, stack, role..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-surface-container border border-outline-variant/30 text-on-surface placeholder:text-outline text-body-sm font-body-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-inner"
            />
          </div>
        </div>

        {/* PROJECTS GRID: ALL 33 CARDS */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 flex flex-col items-center justify-center text-center gap-3">
            <Icons.Search size={36} className="text-outline" />
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
              No matching projects found
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Try adjusting your search criteria or category filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-2 px-4 py-2 rounded-xl bg-surface-container-high text-primary font-label-md text-label-md font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project) => {
              const projectLink = project.domain || project.liveUrl;
              const displayDomain = projectLink
                ? projectLink.replace(/^https?:\/\//, "").replace(/\/.*$/, "")
                : "";

              return (
                <div
                  key={project.id}
                  className="group flex flex-col rounded-2xl bg-surface-container-low hover:bg-surface-container border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                >
                  {/* Thumbnail with styled branded fallback */}
                  <div className="relative">
                    <ProjectThumbnail
                      src={project.image}
                      title={project.title}
                      category={project.category}
                      domain={project.domain}
                    />

                    {/* Shipped Status Pill */}
                    <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-lowest/80 backdrop-blur-md border border-outline-variant/40 text-tertiary font-label-sm text-[11px] font-medium shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                      <span>{project.status}</span>
                    </div>
                  </div>

                  {/* Content Block */}
                  <div className="p-5 flex flex-col flex-1 justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-1">
                          {project.title}
                        </h3>
                        {projectLink && (
                          <a
                            href={projectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-outline group-hover:text-primary transition-colors shrink-0 mt-0.5"
                            title={`Open ${displayDomain}`}
                          >
                            <Icons.ExternalLink size={16} />
                          </a>
                        )}
                      </div>

                      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-col gap-3.5 pt-2">
                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-md bg-surface-container-high text-on-surface-variant font-label-sm text-[11px]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Footer: Metric & External CTA */}
                      <div className="flex items-center justify-between pt-2 border-t border-outline-variant/20">
                        <span className="font-label-sm text-[11px] text-tertiary font-semibold flex items-center gap-1 truncate max-w-[190px]">
                          <Icons.CheckCircle2 size={13} className="shrink-0" />
                          <span className="truncate">{project.metric || project.metrics || "Delivered"}</span>
                        </span>

                        {projectLink ? (
                          <a
                            href={projectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2.5 py-1 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface font-label-sm text-[11px] font-semibold transition-all shrink-0 flex items-center gap-1"
                          >
                            <span>Visit</span>
                            <Icons.ArrowRight size={11} />
                          </a>
                        ) : (
                          <Link
                            href="/contact"
                            className="px-2.5 py-1 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface font-label-sm text-[11px] font-semibold transition-all shrink-0"
                          >
                            Inquire
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
