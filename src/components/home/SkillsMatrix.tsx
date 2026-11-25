"use client";

import React, { useState, useEffect } from "react";
import { SkillCategory, SkillItem } from "@/types";
import { skillCategories, skillsData } from "@/data/skills";
import { BrandIcon } from "@/components/home/BrandIcon";
import { Icons } from "@/components/ui/Icons";

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

const INITIAL_MOBILE_COUNT = 8;
const LOAD_MORE_COUNT = 8;

export function SkillsMatrix() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("all");
  const [mobileVisibleCount, setMobileVisibleCount] = useState<number>(INITIAL_MOBILE_COUNT);

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  // Reset pagination when category changes
  useEffect(() => {
    setMobileVisibleCount(INITIAL_MOBILE_COUNT);
  }, [activeCategory]);

  const hasMoreMobile = mobileVisibleCount < filteredSkills.length;

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

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 p-1.5 rounded-3xl sm:rounded-full bg-surface-container-low/90 backdrop-blur-md border border-outline-variant/40 shadow-md">
          {skillCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
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
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 32-Tile Responsive Grid (4 per row on mobile, 6 on md, 8 on lg) */}
        <div className="w-full grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-y-6 sm:gap-y-8 gap-x-2 sm:gap-x-3 justify-items-center pt-4">
          {filteredSkills.map((skill, index) => {
            const isHiddenOnMobile = index >= mobileVisibleCount;
            return (
              <div
                key={skill.id}
                className={`w-full flex justify-center ${isHiddenOnMobile ? "hidden md:flex" : "flex"}`}
              >
                <SkillCard skill={skill} />
              </div>
            );
          })}
        </div>

        {/* Mobile Load More Button */}
        {hasMoreMobile && (
          <div className="md:hidden flex flex-col items-center justify-center pt-2 gap-2.5 w-full">
            <button
              onClick={() => setMobileVisibleCount((prev) => prev + LOAD_MORE_COUNT)}
              className="px-6 py-2.5 rounded-xl bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/40 hover:border-primary/50 text-on-surface hover:text-primary font-headline-sm text-xs font-semibold transition-all shadow-sm active:scale-95 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Load More Skills</span>
              <Icons.ChevronDown size={16} />
            </button>
            <span className="font-label-sm text-[11px] text-on-surface-variant">
              Showing {Math.min(mobileVisibleCount, filteredSkills.length)} of {filteredSkills.length} skills
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
