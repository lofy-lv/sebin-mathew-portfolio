import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { experienceData } from "@/data/experience";
import { Icons } from "@/components/ui/Icons";

export function AboutSection() {
  const bioParagraphs = siteConfig.fullBio.split("\n\n");

  return (
    <section className="w-full py-20 px-6 md:px-10 lg:px-14 bg-surface-container-lowest/50" id="about">
      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-14 items-stretch">
        {/* Left Column: Visual Portrait, Core Competencies & Social Proof */}
        <div className="flex flex-col justify-between gap-5 h-full">
          {/* Portrait Card */}
          <div className="relative rounded-3xl overflow-hidden bg-surface-container-low border border-outline-variant/40 shadow-2xl p-2.5 flex flex-col flex-1">
            <div className="relative w-full aspect-[4/4.2] sm:aspect-[4/4] lg:aspect-[4/4.1] rounded-2xl overflow-hidden bg-surface-container-high">
              <Image
                src={siteConfig.contact.aboutportraitPath}
                alt={`${siteConfig.name} Profile`}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-70"></div>
            </div>

            {/* Quick Highlights Badge */}
            <div className="p-4 sm:p-5 flex flex-col gap-1.5">
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

          {/* Core Competencies Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-surface-container-low/90 border border-outline-variant/30 flex flex-col gap-2.5 shadow-sm">
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

          {/* Social Proof Strip */}
          <div className="p-4 rounded-2xl bg-surface-container-low/90 border border-outline-variant/30 flex items-center justify-between transition-colors shadow-sm">
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

        {/* Right Column: Narrative, Experience Roadmap & Languages */}
        <div className="flex flex-col justify-between gap-5 h-full">
          {/* Top: Narrative */}
          <div className="flex flex-col gap-3.5">
            <div className="flex flex-col gap-1.5">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
                BACKGROUND & JOURNEY
              </span>
              <h2 className="font-display text-headline-lg font-bold text-on-surface">
                About Me
              </h2>
            </div>

            <div className="flex flex-col gap-2.5 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              {bioParagraphs.map((para, pIdx) => (
                <p key={pIdx}>{para}</p>
              ))}
            </div>
          </div>

          {/* Middle: Experience Roadmap */}
          <div className="flex flex-col gap-3">
            <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-semibold">
              Experience Roadmap
            </span>

            <div className="flex flex-col gap-3.5">
              {experienceData.map((exp, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-5 rounded-2xl bg-surface-container-low/90 hover:bg-surface-container-low border border-outline-variant/30 hover:border-outline-variant/50 transition-all shadow-sm"
                >
                  <div className="flex flex-col items-center pt-1.5">
                    <span
                      className={`w-3.5 h-3.5 rounded-full shrink-0 ring-4 ${
                        exp.color === "secondary"
                          ? "bg-secondary ring-secondary/20"
                          : "bg-tertiary ring-tertiary/20"
                      }`}
                    ></span>
                    {idx < experienceData.length - 1 && (
                      <span className="w-0.5 h-full bg-outline-variant/30 my-2"></span>
                    )}
                  </div>

                  <div className="flex flex-col gap-2 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div className="flex flex-col">
                        <span className="font-headline-sm text-base sm:text-lg font-bold text-on-surface leading-snug">
                          {exp.role}
                        </span>
                        <span className="font-body-sm text-primary font-medium mt-0.5">
                          {exp.company}
                        </span>
                      </div>
                      <span
                        className={`font-label-sm text-xs px-3 py-1 rounded-full font-semibold border ${
                          exp.color === "secondary"
                            ? "text-secondary bg-secondary/10 border-secondary/20"
                            : "text-tertiary bg-tertiary/10 border-tertiary/20"
                        }`}
                      >
                        {exp.period}
                      </span>
                    </div>

                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {exp.description}
                    </p>

                    {exp.highlights && exp.highlights.length > 0 && (
                      <ul className="flex flex-col gap-1 pt-1.5 mt-0.5 border-t border-outline-variant/20">
                        {exp.highlights.slice(0, 2).map((item, hIdx) => (
                          <li
                            key={hIdx}
                            className="flex items-start gap-2 text-xs text-on-surface-variant/90 leading-relaxed"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-tertiary/60 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom: Languages Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-surface-container-low/90 border border-outline-variant/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold shrink-0">
              Languages
            </span>
            <div className="flex flex-wrap gap-2">
              {siteConfig.languages.map((lang, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/30 text-on-surface font-label-sm text-xs sm:text-label-sm font-medium"
                >
                  {lang.name}{" "}
                  <span className="text-on-surface-variant text-xs">({lang.level})</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
