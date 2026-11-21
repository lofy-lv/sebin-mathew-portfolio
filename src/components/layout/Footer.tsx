import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { Icons } from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/20">
      <div className="max-w-[1240px] mx-auto px-margin-mobile lg:px-margin py-space-xl flex flex-col gap-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Bio column */}
          <div className="md:col-span-5 flex flex-col gap-space-sm">
            <div className="flex items-center gap-space-xs">
              <span className="font-headline-sm text-headline-sm text-on-surface">
                {siteConfig.name}
              </span>
              <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-high text-primary font-medium">
                PMP · CSM
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
              Technical Project Manager & Business Analyst delivering 33+ web, SaaS, and AI products across fintech, logistics, and enterprise ecosystems.
            </p>
          </div>

          {/* Navigation links */}
          <div className="md:col-span-3 flex flex-col gap-space-sm">
            <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider font-semibold">
              Navigation
            </span>
            <div className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
              <Link href="/#about" className="hover:text-primary transition-colors">
                About Expertise
              </Link>
              <Link href="/#skills" className="hover:text-primary transition-colors">
                Core Competencies
              </Link>
              <Link href="/#process" className="hover:text-primary transition-colors">
                Agile Framework
              </Link>
              <Link href="/projects" className="hover:text-primary transition-colors">
                Delivered Products
              </Link>
              <Link href="/#case-studies" className="hover:text-primary transition-colors">
                In-Depth Case Studies
              </Link>
            </div>
          </div>

          {/* Dubai Coordinates & Social Proof */}
          <div className="md:col-span-4 flex flex-col gap-space-sm">
            <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider font-semibold">
              Dubai Contact Coordinates
            </span>
            <div className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
              <div className="flex items-center gap-2">
                <Icons.MapPin className="text-tertiary text-base" size={16} />
                <span>{siteConfig.availability.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Icons.Phone className="text-tertiary text-base" size={16} />
                <a href={siteConfig.contact.phoneHref} className="hover:text-on-surface transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Icons.WhatsApp className="text-tertiary text-base" size={16} />
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-tertiary transition-colors"
                  aria-label="Chat with Sebin on WhatsApp"
                >
                  WhatsApp Quick-Chat
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Icons.Mail className="text-tertiary text-base" size={16} />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-on-surface transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>

              {/* Social links (GitHub, LinkedIn, Portfolio) */}
              <div className="flex items-center gap-space-sm pt-2">
                <a
                  href={siteConfig.contact.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sebin Mathew GitHub Profile"
                  className="p-2.5 rounded-lg bg-surface-container text-[#A1A1AA] hover:text-[#F8FAFC] hover:bg-surface-container-high transition-colors"
                >
                  <Icons.GitHub size={17} />
                </a>
                <a
                  href={siteConfig.contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sebin Mathew LinkedIn Profile"
                  className="p-2.5 rounded-lg bg-surface-container text-[#A1A1AA] hover:text-[#F8FAFC] hover:bg-surface-container-high transition-colors"
                >
                  <Icons.LinkedIn size={17} />
                </a>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Sebin on WhatsApp"
                  className="p-2.5 rounded-lg bg-surface-container text-[#A1A1AA] hover:text-tertiary hover:bg-surface-container-high transition-colors"
                >
                  <Icons.WhatsApp size={17} />
                </a>
                <a
                  href="/projects"
                  aria-label="View Projects Directory"
                  className="p-2.5 rounded-lg bg-surface-container text-[#A1A1AA] hover:text-primary hover:bg-surface-container-high transition-colors"
                >
                  <Icons.Briefcase size={17} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Visa banner */}
        <div className="pt-space-md border-t border-outline-variant/15 flex flex-col sm:flex-row items-center justify-between gap-4 font-body-sm text-body-sm text-on-surface-variant">
          <p>© {new Date().getFullYear()} Sebin Mathew. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-tertiary"></span>
            <span>Residence Visa & Immediate Onboarding in UAE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
