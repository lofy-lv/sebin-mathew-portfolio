"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { projectCategories, projectsData } from "@/data/projects";
import { ProjectCategory } from "@/types";
import { Icons } from "@/components/ui/Icons";
import { GlowOrb } from "@/components/ui/GlowOrb";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" || project.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
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
                Portfolio Directory · 34+ Deliveries
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

            {/* Quick Metrics Bento Bar */}
            <div className="lg:col-span-4 flex items-center justify-end">
              <div className="w-full grid grid-cols-3 sm:grid-cols-5 gap-2 p-2.5 rounded-xl bg-surface-container-low/90 backdrop-blur-xl border border-outline-variant/30 shadow-lg">
                <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-surface-container/60 text-center">
                  <span className="font-display text-headline-sm text-primary font-bold leading-none">
                    34
                  </span>
                  <span className="font-label-sm text-[10px] text-on-surface-variant uppercase mt-1">
                    Total
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-surface-container/60 text-center">
                  <span className="font-display text-headline-sm text-tertiary font-bold leading-none">
                    28
                  </span>
                  <span className="font-label-sm text-[10px] text-on-surface-variant uppercase mt-1">
                    Shipped
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-surface-container/60 text-center">
                  <span className="font-display text-headline-sm text-secondary font-bold leading-none">
                    4
                  </span>
                  <span className="font-label-sm text-[10px] text-on-surface-variant uppercase mt-1">
                    Ongoing
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-surface-container/60 text-center">
                  <span className="font-display text-headline-sm text-primary-fixed-dim font-bold leading-none">
                    2
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

        {/* CONTROLS BAR: Filters & Search */}
        <div className="p-3 md:p-4 rounded-2xl bg-surface-container-low/90 backdrop-blur-xl border border-outline-variant/30 shadow-md flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Interactive Category Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
            {projectCategories.map((cat) => {
              const isActive = selectedCategory === cat.id;
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
                    {cat.count}
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

        {/* PROJECTS GRID */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 flex flex-col items-center justify-center text-center gap-3">
            <Icons.Search size={36} className="text-outline" />
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
              No matching projects found
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Try adjusting your search criteria or filter categories.
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
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col rounded-2xl bg-surface-container-low hover:bg-surface-container border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-container-highest">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/20 to-transparent"></div>

                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded-full bg-primary/20 backdrop-blur-md text-primary font-label-sm text-[11px] font-semibold tracking-wide">
                      {project.categoryLabel}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-tertiary-container/30 backdrop-blur-md text-tertiary-fixed font-label-sm text-[11px] font-medium">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        project.status === "shipped"
                          ? "bg-tertiary"
                          : project.status === "ongoing"
                          ? "bg-secondary animate-pulse"
                          : "bg-outline"
                      }`}
                    ></span>
                    {project.status === "shipped"
                      ? "Shipped"
                      : project.status === "ongoing"
                      ? "Ongoing"
                      : "Planning"}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1 justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-outline group-hover:text-primary transition-colors"
                          title="Open Live Website"
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

                    <div className="flex items-center justify-between pt-1 border-t border-outline-variant/20">
                      <span className="font-label-sm text-[11px] text-tertiary font-semibold flex items-center gap-1">
                        <Icons.CheckCircle2 size={13} />
                        {project.metrics || "Delivered"}
                      </span>
                      <Link
                        href="/contact"
                        className="px-3 py-1 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface font-label-sm text-[11px] font-semibold transition-all"
                      >
                        Inquire
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
