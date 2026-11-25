import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { experienceData, educationData } from "@/data/experience";
import { Icons } from "@/components/ui/Icons";

export function AboutSection() {
  const bioParagraphs = siteConfig.fullBio.split("\n\n");

  const competencyDetails = [
    {
      title: "Requirements & PRDs",
      icon: Icons.FileText,
      color: "text-primary",
      bg: "bg-primary/10",
      border: "border-primary/20",
      desc: "Functional specs, user stories, acceptance criteria & system architecture",
    },
    {
      title: "Agile Delivery",
      icon: Icons.KanbanSquare,
      color: "text-secondary",
      bg: "bg-secondary/10",
      border: "border-secondary/20",
      desc: "Scrum & Kanban, Jira sprint cadences, backlog grooming & velocity",
    },
    {
      title: "Full-Stack Development",
      icon: Icons.Atom,
      color: "text-tertiary",
      bg: "bg-tertiary/10",
      border: "border-tertiary/20",
      desc: "Hands-on MERN stack, Next.js, RESTful APIs, RBAC & database schemas",
    },
    {
      title: "QA & UAT",
      icon: Icons.ShieldCheck,
      color: "text-secondary",
      bg: "bg-secondary/10",
      border: "border-secondary/20",
      desc: "End-to-end test verification, bug triaging, defect resolution & sign-off",
    },
    {
      title: "Cloud & DevOps",
      icon: Icons.Cloud,
      color: "text-primary",
      bg: "bg-primary/10",
      border: "border-primary/20",
      desc: "Cloudflare DNS, SSL issuance, hosting environments & zero-downtime cutovers",
    },
    {
      title: "Stakeholder Alignment",
      icon: Icons.CheckCircle2,
      color: "text-tertiary",
      bg: "bg-tertiary/10",
      border: "border-tertiary/20",
      desc: "Executive communication, client expectation management & risk modeling",
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 md:px-10 lg:px-14 bg-surface-container-lowest/50" id="about">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 self-start rounded-full bg-primary/10 text-primary border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">
              Executive Profile · Dubai Tech Leadership
            </span>
          </div>

          <h2 className="font-display text-display lg:text-[46px] font-bold text-on-surface tracking-tight leading-tight">
            Bridging Strategic Vision with{" "}
            <span className="bg-gradient-to-r from-primary via-primary-container to-secondary bg-clip-text text-transparent">
              Engineering Execution
            </span>
          </h2>

          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Technical Project Manager & Full Stack Developer with 33+ commercial software releases. Based in Dubai and immediately available to lead high-velocity product delivery.
          </p>
        </div>

        {/* 4-Pillar Market KPI Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 sm:p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col gap-1 shadow-sm">
            <div className="flex items-center gap-2 text-primary">
              <Icons.Rocket size={20} />
              <span className="font-headline-sm text-xl sm:text-2xl font-bold text-on-surface">33+</span>
            </div>
            <span className="font-label-md text-xs sm:text-sm font-semibold text-on-surface">Commercial Deliverables</span>
            <span className="font-body-sm text-[11px] sm:text-xs text-on-surface-variant">SaaS, LMS, Portals & Mobile</span>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col gap-1 shadow-sm">
            <div className="flex items-center gap-2 text-secondary">
              <Icons.KanbanSquare size={20} />
              <span className="font-headline-sm text-xl sm:text-2xl font-bold text-on-surface">Agile & PRDs</span>
            </div>
            <span className="font-label-md text-xs sm:text-sm font-semibold text-on-surface">Sprint Governance</span>
            <span className="font-body-sm text-[11px] sm:text-xs text-on-surface-variant">User Stories, Jira & Release UAT</span>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col gap-1 shadow-sm">
            <div className="flex items-center gap-2 text-tertiary">
              <Icons.Atom size={20} />
              <span className="font-headline-sm text-xl sm:text-2xl font-bold text-on-surface">MERN & Next.js</span>
            </div>
            <span className="font-label-md text-xs sm:text-sm font-semibold text-on-surface">Hands-on Engineering</span>
            <span className="font-body-sm text-[11px] sm:text-xs text-on-surface-variant">REST APIs & Architecture</span>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col gap-1 shadow-sm">
            <div className="flex items-center gap-2 text-tertiary">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-tertiary"></span>
              </span>
              <span className="font-headline-sm text-xl sm:text-2xl font-bold text-on-surface">Dubai, UAE</span>
            </div>
            <span className="font-label-md text-xs sm:text-sm font-semibold text-on-surface">Immediate Joining</span>
            <span className="font-body-sm text-[11px] sm:text-xs text-on-surface-variant">Dubai, UAE · Zero Notice Period</span>
          </div>
        </div>

        {/* Main Grid: Left Hub (5 cols) & Right Execution Track (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: Identity, Competencies & Credentials (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Executive Portrait Card */}
            <div className="relative rounded-3xl overflow-hidden bg-surface-container-low border border-outline-variant/40 shadow-2xl p-3 flex flex-col gap-4">
              <div className="relative w-full aspect-[4/4.1] rounded-2xl overflow-hidden bg-surface-container-high">
                <Image
                  src={siteConfig.contact.aboutportraitPath}
                  alt={`${siteConfig.name} Executive Portrait`}
                  fill
                  sizes="(max-width: 768px) 100vw, 550px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-surface-container-lowest/20 to-transparent"></div>

                {/* Status Badge Overlaid on Image */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-3 rounded-xl bg-surface-container-lowest/80 backdrop-blur-md border border-outline-variant/30 shadow-md">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-tertiary"></span>
                    </span>
                    <span className="font-label-sm text-xs font-semibold text-on-surface">
                      Dubai · Immediate Joiner
                    </span>
                  </div>
                  <span className="font-label-sm text-[11px] text-tertiary font-medium bg-tertiary/10 px-2.5 py-0.5 rounded-full border border-tertiary/20">
                    Zero Notice Period
                  </span>
                </div>
              </div>

              {/* Bio Meta & Direct Fast-Track Actions */}
              <div className="p-2 sm:p-3 flex flex-col gap-3">
                <div className="flex flex-col">
                  <h3 className="font-headline-sm text-lg sm:text-xl font-bold text-on-surface">
                    {siteConfig.name}
                  </h3>
                  <span className="font-label-md text-xs sm:text-sm text-primary font-medium">
                    Technical Project Manager | Full Stack Developer
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-1 border-t border-outline-variant/20">
                  <a
                    href={siteConfig.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat with Sebin on WhatsApp"
                    className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl bg-tertiary/10 hover:bg-tertiary/20 text-tertiary border border-tertiary/25 transition-all font-label-sm text-xs font-semibold"
                  >
                    <Icons.WhatsApp size={15} />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={siteConfig.contact.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Sebin Mathew LinkedIn Profile"
                    className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-[#A1A1AA] hover:text-[#F8FAFC] border border-outline-variant/20 transition-all font-label-sm text-xs font-semibold"
                  >
                    <Icons.LinkedIn size={15} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={siteConfig.contact.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Sebin Mathew GitHub Profile"
                    className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-[#A1A1AA] hover:text-[#F8FAFC] border border-outline-variant/20 transition-all font-label-sm text-xs font-semibold"
                  >
                    <Icons.GitHub size={15} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Core Competencies Card */}
            <div className="p-5 sm:p-6 rounded-3xl bg-surface-container-low border border-outline-variant/30 shadow-xl flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <span className="font-label-sm text-xs uppercase tracking-wider text-primary font-bold">
                  AREAS OF EXPERTISE
                </span>
                <h3 className="font-headline-sm text-lg font-bold text-on-surface">
                  Core Competencies
                </h3>
                <p className="font-body-sm text-xs text-on-surface-variant">
                  Key capabilities engineered across 33+ commercial initiatives
                </p>
              </div>

              <div className="flex flex-col gap-2.5">
                {competencyDetails.map((comp, idx) => {
                  const CompIcon = comp.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-surface-container-high/60 border border-outline-variant/20 hover:border-outline-variant/40 transition-colors flex items-start gap-3"
                    >
                      <div className={`p-2 rounded-lg ${comp.bg} ${comp.color} shrink-0 mt-0.5`}>
                        <CompIcon size={16} />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-label-md text-xs sm:text-sm font-semibold text-on-surface">
                          {comp.title}
                        </span>
                        <span className="font-body-sm text-[11px] sm:text-xs text-on-surface-variant leading-snug">
                          {comp.desc}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Education & Credentials Card */}
            <div className="p-5 sm:p-6 rounded-3xl bg-surface-container-low border border-outline-variant/30 shadow-xl flex flex-col gap-4">
              <div className="flex items-center gap-2 text-on-surface">
                <Icons.School size={20} className="text-secondary shrink-0" />
                <h3 className="font-headline-sm text-lg font-bold">
                  Education & Credentials
                </h3>
              </div>

              <div className="flex flex-col gap-3">
                {educationData.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-surface-container-high/60 border border-outline-variant/20 flex flex-col gap-0.5"
                  >
                    <span className="font-label-md text-xs sm:text-sm font-semibold text-on-surface">
                      {edu.degree}
                    </span>
                    <div className="flex items-center justify-between text-[11px] sm:text-xs text-on-surface-variant">
                      <span>{edu.institution}</span>
                      <span className="text-tertiary font-medium">{edu.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Executive Story, Experience Timeline & Languages (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Leadership Overview Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 shadow-xl flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <span className="font-label-sm text-xs uppercase tracking-wider text-primary font-bold">
                  LEADERSHIP PHILOSOPHY
                </span>
                <h3 className="font-headline-sm text-xl sm:text-2xl font-bold text-on-surface">
                  The Technical Project Manager Advantage
                </h3>
              </div>

              <div className="flex flex-col gap-3.5 font-body-lg text-sm sm:text-base text-on-surface-variant leading-relaxed">
                {bioParagraphs.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>
            </div>

            {/* Career Trajectory & Experience Timeline */}
            <div className="p-6 sm:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/30 shadow-xl flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <span className="font-label-sm text-xs uppercase tracking-wider text-secondary font-bold">
                  CAREER TRAJECTORY
                </span>
                <h3 className="font-headline-sm text-xl sm:text-2xl font-bold text-on-surface">
                  Experience Roadmap
                </h3>
                <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant">
                  Commercial leadership track record delivering products across UAE & global markets
                </p>
              </div>

              <div className="flex flex-col gap-6">
                {experienceData.map((exp, idx) => (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl bg-surface-container-high/50 border border-outline-variant/30 flex flex-col gap-4"
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-2.5 h-2.5 rounded-full ${
                              exp.color === "secondary" ? "bg-secondary" : "bg-tertiary"
                            }`}
                          />
                          <h4 className="font-headline-sm text-base sm:text-lg font-bold text-on-surface">
                            {exp.role}
                          </h4>
                        </div>
                        <span className="font-label-md text-xs sm:text-sm text-primary font-semibold mt-0.5 ml-4.5">
                          {exp.company}
                        </span>
                      </div>

                      <span
                        className={`font-label-sm text-xs self-start sm:self-auto px-3 py-1 rounded-full font-semibold border ${
                          exp.color === "secondary"
                            ? "text-secondary bg-secondary/10 border-secondary/20"
                            : "text-tertiary bg-tertiary/10 border-tertiary/20"
                        }`}
                      >
                        {exp.period}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Bullet Highlights */}
                    {exp.highlights && exp.highlights.length > 0 && (
                      <div className="flex flex-col gap-2 pt-2 border-t border-outline-variant/20">
                        <span className="font-label-sm text-[11px] uppercase tracking-wider text-on-surface font-semibold">
                          Key Deliverables & Responsibilities:
                        </span>
                        <ul className="flex flex-col gap-1.5">
                          {exp.highlights.map((item, hIdx) => (
                            <li
                              key={hIdx}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-on-surface-variant/90 leading-relaxed"
                            >
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-tertiary shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Multilingual Communication Fluency */}
            <div className="p-5 sm:p-6 rounded-3xl bg-surface-container-low border border-outline-variant/30 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-col">
                <span className="font-label-md text-xs sm:text-sm font-semibold text-on-surface">
                  Regional & Global Communication
                </span>
                <span className="font-body-sm text-xs text-on-surface-variant">
                  Multilingual fluency for diverse executive and engineering teams in Dubai
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {siteConfig.languages.map((lang, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-surface-container-high border border-outline-variant/30 text-on-surface font-label-sm text-xs font-medium"
                  >
                    {lang.name} <span className="text-tertiary text-[11px]">({lang.level})</span>
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
