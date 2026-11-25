"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icons } from "@/components/ui/Icons";
import { siteConfig } from "@/data/site-config";

interface CaseStudyDetail {
  id: string;
  tags: string[];
  tagColor: string;
  buttonColor: string;
  title: string;
  description: string;
  role: string;
  organization: string;
  problem: string;
  solution: string;
  deliverables: string[];
  metrics: { label: string; value: string }[];
}

export function CaseStudiesSection() {
  const [selectedCase, setSelectedCase] = useState<CaseStudyDetail | null>(null);

  const caseStudies: CaseStudyDetail[] = [
    {
      id: "virtune-realtors",
      tags: ["AI Property Matching", "Real Estate CRM", "Next.js & MERN"],
      tagColor: "bg-primary/20 text-primary",
      buttonColor: "text-primary hover:bg-primary hover:text-on-primary",
      title: "Virtune Realtors: AI Property Matching & Real Estate CRM",
      role: "Technical Project Manager",
      organization: "Esight Business Solutions",
      description:
        "Led end-to-end product discovery, PRD authoring, and sprint delivery for an AI-powered property recommendation engine, cutting agent matchmaking time by 60%.",
      problem:
        "Real estate brokers faced high triage latency manually evaluating client criteria against massive luxury listing inventories, leading to missed client conversion windows.",
      solution:
        "Architected an automated vector similarity scoring engine with Next.js and FastAPI, integrated real-time webhook updates, and managed 2-week agile sprints with bi-weekly client demo cadence.",
      deliverables: [
        "Comprehensive 45-page Functional PRD with architecture diagrams and API specs",
        "Jira backlog grooming with user stories and Gherkin acceptance criteria",
        "Role-Based Access Control (RBAC) matrix for brokers, branch managers, and admins",
        "Comprehensive UAT testing with Postman test suites and regression checklists",
      ],
      metrics: [
        { label: "Triage Latency", value: "-60%" },
        { label: "Sprint Velocity", value: "98% On-Time" },
        { label: "Platform Uptime", value: "99.9%" },
      ],
    },
    {
      id: "connective-india",
      tags: ["MSME Ecosystem", "Workflow Automation", "API Gateway"],
      tagColor: "bg-tertiary/20 text-tertiary",
      buttonColor: "text-tertiary hover:bg-tertiary hover:text-on-tertiary",
      title: "Connective India: MSME Digital Ecosystem & Multi-Service Hub",
      role: "Technical Project Manager",
      organization: "Esight Business Solutions",
      description:
        "Governed technical specifications, third-party vendor integrations, and role-based permissions across 5+ regional business modules with automated status sync.",
      problem:
        "MSME vendors and field verification officers operated in fragmented silos with manual paper-based identity checks and disjointed procurement pipelines.",
      solution:
        "Engineered a unified digital verification portal with dynamic digital ID generation, multi-tier admin approval hierarchies, and secure AWS S3 document vault storage.",
      deliverables: [
        "Detailed System Architecture and Entity Relationship Diagrams (ERDs)",
        "Daily scrum coordination across 6 frontend and backend software engineers",
        "Field inspection digital workflows with cryptographic QR identity badges",
        "Production deployment coordination on Hostinger VPS with zero downtime",
      ],
      metrics: [
        { label: "Entities Managed", value: "14,000+" },
        { label: "Verification Time", value: "3x Faster" },
        { label: "Paperless Audit", value: "100%" },
      ],
    },
    {
      id: "manwish-online",
      tags: ["Multi-Tenant SaaS", "RBAC Matrix", "Automated Payouts"],
      tagColor: "bg-secondary/20 text-secondary",
      buttonColor: "text-secondary hover:bg-secondary hover:text-on-secondary",
      title: "ManWish Online: Enterprise Multi-Tenant SaaS & Partner Portal",
      role: "Technical Project Manager",
      organization: "Esight Business Solutions",
      description:
        "Architected multi-tenant user hierarchies, partner onboarding workflows, and automated financial transaction reconciliation handling high concurrent volumes.",
      problem:
        "Scaling multi-vendor partner onboarding while preventing commission calculation discrepancies and managing granular access levels across tenant partitions.",
      solution:
        "Authored rigorous multi-tenant data isolation specifications, built automated commission reconciliation algorithms, and directed end-to-end UAT sign-off cycles.",
      deliverables: [
        "Multi-Tenant Tenant Isolation & Granular RBAC specification documents",
        "Automated commission settlement math with edge-case dispute workflows",
        "Sprint delivery schedule tracking in ClickUp with sprint burndown reports",
        "Cloudflare CDN caching and DDoS protection configuration",
      ],
      metrics: [
        { label: "Commission Accuracy", value: "99.99%" },
        { label: "Partner Onboarding", value: "< 24 Hrs" },
        { label: "Peak Concurrency", value: "Zero Drops" },
      ],
    },
    {
      id: "millijobs",
      tags: ["Talent Marketplace", "Search Optimization", "MERN & REST APIs"],
      tagColor: "bg-[#38BDF8]/20 text-[#38BDF8]",
      buttonColor: "text-[#38BDF8] hover:bg-[#38BDF8] hover:text-on-primary",
      title: "MilliJobs: Scalable Recruitment Engine & Employer Portal",
      role: "Technical Project Manager",
      organization: "Esight Business Solutions",
      description:
        "Directed product discovery, full-text job indexing architecture, and candidate pipeline tracking, optimizing search speed and scaling employer job postings.",
      problem:
        "Recruiters faced dropped applicant submissions and high bounce rates due to unindexed database queries and lack of structured application pipelines during peak hiring seasons.",
      solution:
        "Architected full-text search indexing with Express & MongoDB, engineered modular recruiter dashboards with Kanban candidate tracking, and governed weekly agile releases with automated CI/CD.",
      deliverables: [
        "Comprehensive Functional PRD covering candidate application funnels & recruiter portals",
        "High-performance MongoDB indexing strategy achieving sub-100ms multi-filter search",
        "Candidate pipeline Kanban board specs with automated status notification triggers",
        "Rigorous end-to-end UAT regression test suites across mobile and desktop browsers",
      ],
      metrics: [
        { label: "Search Latency", value: "< 100ms" },
        { label: "Funnel Conversion", value: "+45%" },
        { label: "Application Volume", value: "100k+" },
      ],
    },
  ];

  return (
    <section className="w-full py-20 px-6 md:px-10 lg:px-14" id="case-studies">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
              DEEP-DIVE CASE STUDIES
            </span>
          </div>
          <h2 className="font-display text-headline-lg font-bold text-on-surface">
            Signature Case Studies
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            Detailed delivery breakdowns illustrating technical governance, risk mitigation, and architectural velocity.
          </p>
        </div>

        {/* 4 Case Studies in a 2x2 Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className="p-6 sm:p-7 lg:p-8 rounded-3xl bg-surface-container-low/90 backdrop-blur-xl border border-outline-variant/30 hover:border-primary/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between gap-6 group"
            >
              {/* Card Top: Attribution Badge & Tags */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                    <span className="font-label-sm text-[11px] text-tertiary font-medium">
                      Technical PM @ Esight
                    </span>
                  </div>

                  <span className={`px-2.5 py-0.5 rounded-full font-label-sm text-[11px] font-semibold ${cs.tagColor}`}>
                    {cs.tags[0]}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-headline-sm sm:text-headline-md font-bold text-on-surface group-hover:text-primary transition-colors leading-snug">
                  {cs.title}
                </h3>

                {/* Description */}
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed line-clamp-3">
                  {cs.description}
                </p>

                {/* Secondary Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cs.tags.slice(1).map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md bg-surface-container-high text-on-surface-variant font-label-sm text-[11px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Mid: Key Impact Metrics Bento Strip */}
              <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-surface-container/70 border border-outline-variant/20 text-center">
                {cs.metrics.map((m, i) => (
                  <div key={i} className="flex flex-col items-center justify-center">
                    <span className="font-display text-label-md sm:text-headline-sm font-bold text-on-surface">
                      {m.value}
                    </span>
                    <span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-wider mt-0.5 truncate max-w-full px-1">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Card Bottom: Actions */}
              <div className="flex items-center justify-between gap-3 pt-3 border-t border-outline-variant/20">
                <button
                  onClick={() => setSelectedCase(cs)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-container-high font-label-md text-xs sm:text-label-md font-semibold transition-all ${cs.buttonColor} cursor-pointer`}
                >
                  <span>Read Breakdown</span>
                  <Icons.ArrowRight size={15} />
                </button>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-on-surface-variant hover:text-on-surface font-label-sm text-xs transition-colors"
                >
                  <span>Discuss Project</span>
                  <Icons.ArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal / Drawer */}
      {selectedCase && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-case-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-surface-container-low border border-outline-variant/40 p-6 sm:p-8 shadow-2xl flex flex-col gap-6 text-on-surface">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-outline-variant/20 pb-4">
              <div className="flex flex-col gap-2">
                {/* Agency Delivery Context */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 text-tertiary font-label-sm text-xs font-semibold self-start">
                  <Icons.CheckCircle2 size={14} />
                  <span>Delivered as Technical Project Manager at Esight Business Solutions</span>
                </div>
                <h3 id="modal-case-title" className="font-display text-headline-sm sm:text-headline-md font-bold text-on-surface">
                  {selectedCase.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCase(null)}
                aria-label="Close modal"
                className="p-2 rounded-xl bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"
              >
                <Icons.X size={20} />
              </button>
            </div>

            {/* Impact Metrics Bento */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-surface-container border border-outline-variant/20">
              {selectedCase.metrics.map((m, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <span className="font-display text-headline-sm sm:text-headline-md font-bold text-primary">
                    {m.value}
                  </span>
                  <span className="font-label-sm text-[11px] text-on-surface-variant uppercase mt-1">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Problem & Architectural Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-surface-container-high/40 border border-outline-variant/20 flex flex-col gap-2">
                <span className="font-label-sm text-xs font-bold uppercase tracking-wider text-secondary">
                  The Problem & Challenge
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {selectedCase.problem}
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-surface-container-high/40 border border-outline-variant/20 flex flex-col gap-2">
                <span className="font-label-sm text-xs font-bold uppercase tracking-wider text-tertiary">
                  Technical Architecture & Execution
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {selectedCase.solution}
                </p>
              </div>
            </div>

            {/* Core PM Deliverables */}
            <div className="flex flex-col gap-2">
              <span className="font-label-md text-label-md font-bold uppercase tracking-wider text-on-surface">
                Key TPM Deliverables & Artifacts
              </span>
              <ul className="grid grid-cols-1 gap-2 pt-1">
                {selectedCase.deliverables.map((d, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 p-2.5 rounded-xl bg-surface-container/60 border border-outline-variant/15 font-body-sm text-body-sm text-on-surface-variant"
                  >
                    <Icons.CheckCircle2 size={16} className="text-tertiary shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-outline-variant/20">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Sebin on WhatsApp"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-tertiary/15 hover:bg-tertiary/25 text-tertiary font-label-md text-label-md font-semibold transition-all border border-tertiary/30"
              >
                <Icons.WhatsApp size={16} />
                <span>Discuss on WhatsApp</span>
              </a>
              <Link
                href="/contact"
                onClick={() => setSelectedCase(null)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary-container to-secondary text-on-primary font-label-md text-label-md font-semibold transition-all"
              >
                <span>Schedule Deep Dive</span>
                <Icons.ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
