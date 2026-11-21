"use client";

import React, { useState } from "react";
import { SkillCategory } from "@/types";
import { skillCategories, skillsData } from "@/data/skills";
import { DynamicIcon } from "@/components/ui/Icons";

export function SkillsMatrix() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("all");

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section className="w-full py-20 px-margin-mobile lg:px-margin" id="skills">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center gap-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center gap-2 max-w-2xl">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
            COMPETENCY MATRIX
          </span>
          <h2 className="font-display text-headline-lg font-bold text-on-surface">
            Skills & Tools
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Battle-tested toolchains spanning agile PM frameworks, web engineering, modern AI co-pilots, and infrastructure.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full bg-surface-container-low/90 backdrop-blur-md border border-outline-variant/40 shadow-md">
          {skillCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-label-md text-label-md transition-all duration-300 ${
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

        {/* Skills Grid */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-y-7 gap-x-4 justify-items-center pt-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="flex flex-col items-center gap-2 group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-surface-container border border-outline-variant/40 flex items-center justify-center p-3.5 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-primary/60 group-hover:shadow-glow-violet group-hover:bg-surface-container-high">
                <DynamicIcon
                  name={skill.iconName}
                  size={28}
                  className="text-on-surface group-hover:text-primary transition-colors"
                />
              </div>
              <span className="font-label-sm text-xs text-on-surface-variant group-hover:text-on-surface transition-colors text-center font-medium">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
