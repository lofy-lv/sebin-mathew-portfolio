import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { experienceData } from "@/data/experience";
import { Icons } from "@/components/ui/Icons";

export function AboutSection() {
  return (
    <section className="w-full py-20 px-6 md:px-10 lg:px-14 bg-surface-container-lowest/50" id="about">
      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-14 items-stretch">
        {/* Left Column: Visual Portrait & Highlight Badges */}
        <div className="flex flex-col justify-between gap-6 h-full">
          <div className="relative rounded-3xl overflow-hidden bg-surface-container-low border border-outline-variant/40 shadow-2xl p-2.5 flex flex-col flex-1">
            <div className="relative w-full aspect-[4/4.2] sm:aspect-[4/4] lg:aspect-[4/3.8] rounded-2xl overflow-hidden bg-surface-container-high">
              <Image
                src={siteConfig.contact.portraitPath}
                alt={`${siteConfig.name} Profile`}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-70"></div>
            </div>

            {/* Quick Highlights Badge */}
            <div className="p-4 flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-tertiary">
                <Icons.School size={20} className="shrink-0" />
                <span className="font-label-md text-label-md font-semibold text-on-surface">
                  BCA Pursuing · MERN Certified
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                33+ End-to-end commercial software deliverables across UAE & Global clients.
              </p>
            </div>
          </div>

          {/* Social Proof Strip */}
          <div className="p-4 rounded-2xl bg-surface-container-low/80 hover:bg-surface-container-low border border-outline-variant/30 flex items-center justify-between transition-colors">
            <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
              Verified Profiles
            </span>
            <div className="flex items-center gap-2">
              <a
                href={siteConfig.contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sebin Mathew GitHub Profile"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-high text-[#A1A1AA] hover:text-[#F8FAFC] transition-colors font-label-sm text-xs font-semibold"
              >
                <Icons.GitHub size={14} />
                <span>GitHub</span>
              </a>
              <a
                href={siteConfig.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sebin Mathew LinkedIn Profile"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-high text-[#A1A1AA] hover:text-[#F8FAFC] transition-colors font-label-sm text-xs font-semibold"
              >
                <Icons.LinkedIn size={14} />
                <span>LinkedIn</span>
              </a>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Sebin on WhatsApp"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-tertiary/10 text-tertiary hover:bg-tertiary/20 transition-colors font-label-sm text-xs font-semibold border border-tertiary/20"
              >
                <Icons.WhatsApp size={14} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative & Experience Roadmap */}
        <div className="flex flex-col justify-between gap-6 h-full">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
                BACKGROUND & JOURNEY
              </span>
              <h2 className="font-display text-headline-lg font-bold text-on-surface">
                About Me
              </h2>
            </div>

            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              {siteConfig.fullBio}
            </p>

            {/* Experience Roadmap */}
            <div className="flex flex-col gap-3.5">
              <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-semibold">
                Experience Roadmap
              </span>

              {experienceData.map((exp, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-4.5 rounded-2xl bg-surface-container-low/80 hover:bg-surface-container-low border border-outline-variant/30 transition-all"
                >
                  <div className="flex flex-col items-center pt-1">
                    <span
                      className={`w-3 h-3 rounded-full shrink-0 ${
                        exp.color === "secondary" ? "bg-secondary" : "bg-tertiary"
                      }`}
                    ></span>
                    {idx < experienceData.length - 1 && (
                      <span className="w-0.5 h-full bg-surface-container-highest my-1"></span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                        {exp.role}
                      </span>
                      <span
                        className={`font-label-sm text-label-sm px-2.5 py-0.5 rounded-md font-medium ${
                          exp.color === "secondary"
                            ? "text-secondary bg-secondary/10"
                            : "text-tertiary bg-tertiary/10"
                        }`}
                      >
                        {exp.period}
                      </span>
                    </div>

                    <span className="font-body-sm text-body-sm text-primary font-medium">
                      {exp.company}
                    </span>

                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row: Capabilities & Languages */}
          <div className="flex flex-col gap-4 pt-2">
            {/* Capability Chips */}
            <div className="flex flex-col gap-2">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                Core Competencies
              </span>
              <div className="flex flex-wrap gap-2">
                {siteConfig.capabilities.map((cap, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-surface-container-high border border-outline-variant/30 text-on-surface font-label-sm text-label-sm font-medium hover:border-tertiary/40 transition-colors"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="flex flex-col gap-2">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                Languages
              </span>
              <div className="flex flex-wrap gap-2">
                {siteConfig.languages.map((lang, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/30 text-on-surface font-label-sm text-label-sm font-medium"
                  >
                    {lang.name}{" "}
                    <span className="text-on-surface-variant text-xs">({lang.level})</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
