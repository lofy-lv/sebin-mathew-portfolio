/**
 * @file src/components/home/PlaybookSection.tsx
 * @description Product Delivery Playbook & SDLC Methodology
 * Outlines the structured 6-phase engineering lifecycle: Discover, PRD, Sprints,
 * Code & Integrate, QA / UAT Verification, and Production Deployment.
 */

import React from "react";
import { Icons } from "@/components/ui/Icons";

export function PlaybookSection() {
  const steps = [
    {
      step: "01",
      title: "Discover",
      desc: "Client requirement elicitation, user journey mapping & scope definition.",
      icon: Icons.Compass,
      color: "text-tertiary",
      bgColor: "bg-tertiary/15",
    },
    {
      step: "02",
      title: "Document (PRD)",
      desc: "Functional specs, architecture diagrams, user stories & acceptance criteria.",
      icon: Icons.FileText,
      color: "text-primary",
      bgColor: "bg-primary/15",
    },
    {
      step: "03",
      title: "Plan (Sprints)",
      desc: "Backlog grooming, story pointing, sprint planning & resource allocation.",
      icon: Icons.Calendar,
      color: "text-secondary",
      bgColor: "bg-secondary/15",
    },
    {
      step: "04",
      title: "Build & Test",
      desc: "Agile coordination, API testing in Postman, regression & UAT sign-off.",
      icon: Icons.ShieldCheck,
      color: "text-tertiary",
      bgColor: "bg-tertiary/15",
    },
    {
      step: "05",
      title: "Launch & Support",
      desc: "Cloudflare DNS, server provisioning, zero-downtime release & monitoring.",
      icon: Icons.Rocket,
      color: "text-primary",
      bgColor: "bg-primary/15",
    },
  ];

  return (
    <section className="w-full py-20 px-6 md:px-10 lg:px-14" id="process">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
            PRODUCT DELIVERY PLAYBOOK
          </span>
          <h2 className="font-display text-headline-lg font-bold text-on-surface">
            How I Work
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
            A disciplined, predictable framework converting ambiguous business concepts into battle-ready software.
          </p>
        </div>

        {/* 5-Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative">
          {steps.map((s, idx) => {
            const IconComponent = s.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-surface-container-low/70 backdrop-blur-md border border-outline-variant/30 flex flex-col gap-3 relative hover:bg-surface-container-low hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <span className={`font-display text-headline-sm font-bold ${s.color}`}>
                    {s.step}
                  </span>
                  <div className={`p-2 rounded-lg ${s.bgColor} ${s.color} group-hover:scale-110 transition-transform`}>
                    <IconComponent size={20} />
                  </div>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  {s.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
