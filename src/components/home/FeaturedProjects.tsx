import React from "react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { Icons } from "@/components/ui/Icons";
import { ProjectThumbnail } from "@/components/ui/ProjectThumbnail";

export function FeaturedProjects() {
  const featured = projectsData.filter((p) => p.featured).slice(0, 4);

  const additionalDeployments = [
    "tribesalon.in",
    "gaspetworld.com",
    "harmanmotors.in",
    "signaturehardwares.com",
    "drksaesthetics.com",
    "comorinsolar.com",
  ];

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

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container border border-outline-variant/40 text-on-surface-variant font-label-sm text-label-sm self-start sm:self-auto shadow-sm">
            <Icons.CheckCircle2 className="text-tertiary" size={16} />
            <span className="font-medium text-on-surface">33 Total Verified Shipments</span>
          </div>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((proj) => {
            const projectUrl = proj.domain || proj.liveUrl;
            const displayHost = projectUrl
              ? projectUrl.replace(/^https?:\/\//, "").replace(/\/.*$/, "")
              : "";

            return (
              <div
                key={proj.id}
                className="group flex flex-col rounded-2xl bg-surface-container-low border border-outline-variant/40 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10 flex-1"
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

        {/* Directory CTA Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-surface-container-low border border-outline-variant/30">
          <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
            </span>
            <span>4 of 33 Live Products featured above</span>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-surface-container-high text-primary hover:bg-primary hover:text-on-primary font-label-md text-label-md font-semibold transition-all"
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
