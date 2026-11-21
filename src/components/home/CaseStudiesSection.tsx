import React from "react";
import Link from "next/link";
import { Icons } from "@/components/ui/Icons";

export function CaseStudiesSection() {
  const caseStudies = [
    {
      id: "virtune-realtors",
      tags: ["AI Property Matching", "Real Estate CRM", "Next.js & MERN"],
      tagColor: "bg-primary/20 text-primary",
      buttonColor: "text-primary hover:bg-primary hover:text-on-primary",
      title: "Virtune Realtors: AI Property Matching & Real Estate CRM",
      description:
        "Led end-to-end product discovery, PRD authoring, and sprint delivery for an AI-powered property recommendation engine, cutting agent matchmaking time by 60%.",
    },
    {
      id: "connective-india",
      tags: ["MSME Ecosystem", "Workflow Automation", "API Gateway"],
      tagColor: "bg-tertiary/20 text-tertiary",
      buttonColor: "text-tertiary hover:bg-tertiary hover:text-on-tertiary",
      title: "Connective India: MSME Digital Ecosystem & Multi-Service Hub",
      description:
        "Governed technical specifications, third-party vendor integrations, and role-based permissions across 5+ regional business modules with automated status sync.",
    },
    {
      id: "manwish-online",
      tags: ["Multi-Tenant SaaS", "RBAC Matrix", "Automated Payouts"],
      tagColor: "bg-secondary/20 text-secondary",
      buttonColor: "text-secondary hover:bg-secondary hover:text-on-secondary",
      title: "ManWish Online: Enterprise Multi-Tenant SaaS & Partner Portal",
      description:
        "Architected multi-tenant user hierarchies, partner onboarding workflows, and automated financial transaction reconciliation handling high concurrent volumes.",
    },
  ];

  return (
    <section className="w-full py-20 px-margin-mobile lg:px-margin" id="case-studies">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
            DEEP-DIVE CASE STUDIES
          </span>
          <h2 className="font-display text-headline-lg font-bold text-on-surface">
            Signature Case Studies
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
            Detailed delivery breakdowns illustrating technical governance, risk mitigation, and architectural velocity.
          </p>
        </div>

        {/* 3 Large Horizontal Glass Cards */}
        <div className="flex flex-col gap-6">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className="p-6 lg:p-8 rounded-3xl bg-surface-container-low/80 backdrop-blur-xl border border-outline-variant/30 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 hover:bg-surface-container-low hover:border-primary/50 transition-all duration-300 shadow-xl"
            >
              <div className="flex flex-col gap-4 max-w-2xl">
                <div className="flex flex-wrap gap-2">
                  <span
                    className={`px-3 py-1 rounded-full font-label-sm text-label-sm font-semibold ${cs.tagColor}`}
                  >
                    {cs.tags[0]}
                  </span>
                  {cs.tags.slice(1).map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="font-display text-headline-md font-bold text-on-surface">
                  {cs.title}
                </h3>

                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {cs.description}
                </p>
              </div>

              <Link
                href="/contact"
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-surface-container-high font-label-md text-label-md font-semibold transition-all whitespace-nowrap self-start lg:self-center ${cs.buttonColor}`}
              >
                <span>Discuss Case Study</span>
                <Icons.ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
