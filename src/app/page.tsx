import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { ImpactStrip } from "@/components/home/ImpactStrip";
import { SkillsMatrix } from "@/components/home/SkillsMatrix";
import { AboutSection } from "@/components/home/AboutSection";
import { PlaybookSection } from "@/components/home/PlaybookSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { ContactForm } from "@/components/contact/ContactForm";
import { DirectCoordinates } from "@/components/contact/DirectCoordinates";

export default function HomePage() {
  return (
    <main className="w-full bg-surface min-h-[calc(100vh-80px)]">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Impact Strip */}
      <ImpactStrip />

      {/* 3. Skills & Competencies */}
      <SkillsMatrix />

      {/* 4. About Me & Experience Roadmap */}
      <AboutSection />

      {/* 5. How I Work: Product Delivery Playbook */}
      <PlaybookSection />

      {/* 6. Selected Live Products & Platforms */}
      <FeaturedProjects />

      {/* 7. Signature Case Studies */}
      <CaseStudiesSection />

      {/* 8. Contact Section */}
      <section className="w-full py-20 px-6 md:px-10 lg:px-14 bg-surface-container-lowest/60" id="contact">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
              GET IN TOUCH
            </span>
            <h2 className="font-display text-headline-lg font-bold text-on-surface">
              Let&apos;s Connect
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
              Looking for an experienced Technical Project Manager in Dubai or remote? Let&apos;s discuss your next product launch.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <div className="lg:col-span-5">
              <DirectCoordinates />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
