/**
 * @file src/components/home/SkillsMatrix.tsx
 * @description Interactive Skills Matrix Component
 * Features: 32 official brand tools organized in a 4x8 desktop layout,
 * dynamic category filtering tabs, and brand-accented hover effects.
 */

"use client";

import React, { useState, useMemo } from "react";
import { SkillCategory, SkillItem } from "@/types";
import { skillCategories, skillsData } from "@/data/skills";
import { BrandIcon } from "@/components/home/BrandIcon";

function SkillCard({ skill }: { skill: SkillItem }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center gap-1.5 sm:gap-2.5 group cursor-pointer w-full text-center"
    >
      <div
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-surface-container border border-outline-variant/40 flex items-center justify-center p-2.5 sm:p-3.5 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:bg-surface-container-high"
        style={{
          color: hovered ? skill.brandColor : "#A1A1AA",
          borderColor: hovered ? `${skill.brandColor}99` : undefined,
          boxShadow: hovered
            ? `0 12px 24px -6px ${skill.brandColor}40`
            : undefined,
        }}
      >
        <BrandIcon iconKey={skill.iconKey} size={28} className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" />
      </div>
      <span
        className="font-label-sm text-[11px] sm:text-xs transition-colors duration-200 text-center font-medium leading-tight px-0.5 line-clamp-2 max-w-full"
        style={{
          color: hovered ? "#F8FAFC" : "#A1A1AA",
        }}
      >
        {skill.name}
      </span>
    </div>
  );
}

export function SkillsMatrix() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("all");

  const categoryCounts = useMemo(() => {
    return {
      all: skillsData.length,
      agile: skillsData.filter((s) => s.category === "agile").length,
      code: skillsData.filter((s) => s.category === "code").length,
      ai: skillsData.filter((s) => s.category === "ai").length,
      devops: skillsData.filter((s) => s.category === "devops").length,
    };
  }, []);

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section className="w-full py-20 px-4 sm:px-6 md:px-10 lg:px-14" id="skills">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center gap-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center gap-2 max-w-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
            COMPETENCY MATRIX
          </span>
          <h2 className="font-display text-headline-lg font-bold text-on-surface">
            Skills & Tools
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Battle-tested toolchains spanning agile PM frameworks, web engineering, modern AI co-pilots, and cloud infrastructure.
          </p>
        </div>

        {/* Tab Switcher with Dynamic Counts */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 p-1.5 rounded-3xl sm:rounded-full bg-surface-container-low/90 backdrop-blur-md border border-outline-variant/40 shadow-md">
          {skillCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count = categoryCounts[cat.id];
            const baseName = cat.label.replace(/\s*\(\d+\)/, "");
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-label-md text-xs sm:text-label-md transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-primary-container to-secondary text-on-primary font-semibold shadow-sm"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-medium"
                }`}
              >
                {baseName} ({count})
              </button>
            );
          })}
        </div>

        {/* 32-Tile Responsive Grid (4 per row on mobile, 6 on md, 8 on lg) */}
        <div className="w-full grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-y-6 sm:gap-y-8 gap-x-2 sm:gap-x-3 justify-items-center pt-4">
          {filteredSkills.map((skill) => (
            <div key={skill.id} className="w-full flex justify-center">
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
