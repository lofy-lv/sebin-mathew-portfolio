"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site-config";
import { Icons } from "@/components/ui/Icons";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Process", href: "/#process" },
    { name: "Projects", href: "/projects", isRoute: true },
    { name: "Case Studies", href: "/#case-studies" },
    { name: "Contact", href: "/contact", isRoute: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/90 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
          : "bg-surface/75 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="h-20 w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-space-sm group">
          <div className="relative flex items-center justify-center p-1 rounded-full bg-surface-container-high ring-1 ring-outline-variant/40 group-hover:ring-primary/60 transition-all">
            <div className="w-8 h-8 rounded-full overflow-hidden relative flex items-center justify-center">
              <Image
                src={siteConfig.contact.logoportraitPath}
                alt={siteConfig.name}
                fill
                sizes="32px"
                className="object-contain"
                priority
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight leading-none group-hover:text-primary transition-colors">
              {siteConfig.name}
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-0.5">
              {siteConfig.shortRole}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 p-1 rounded-xl bg-surface-container-low border border-outline-variant/30">
          {navLinks.map((link) => {
            const isActive = link.isRoute
              ? pathname === link.href
              : pathname === "/" && false;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-space-sm py-space-xs font-label-md text-label-md transition-colors rounded-lg ${
                  isActive
                    ? "bg-surface-container-high text-primary font-bold shadow-sm"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA & Dubai Availability */}
        <div className="flex items-center gap-space-sm">
          {/* Dubai Status Badge */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-low border border-tertiary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
            </span>
            <span className="font-label-sm text-label-sm text-tertiary font-medium">
              {siteConfig.availability.status}
            </span>
          </div>

          {/* Primary CTA */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-space-md py-2.5 rounded-xl bg-gradient-to-r from-primary-container to-secondary text-on-primary font-headline-sm text-label-md font-semibold shadow-glow-amber hover:brightness-110 active:scale-95 transition-all"
          >
            Get in Touch
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <Icons.X size={20} /> : <Icons.Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-low/95 backdrop-blur-2xl border-b border-outline-variant/30 px-margin-mobile py-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          {/* Mobile Dubai Badge */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container self-start border border-tertiary/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
            </span>
            <span className="font-label-sm text-label-sm text-tertiary font-medium">
              {siteConfig.availability.status}
            </span>
          </div>

          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl font-label-md text-body-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="pt-2 border-t border-outline-variant/20 flex flex-col gap-2">
            <a
              href={siteConfig.contact.cvPath}
              download
              className="inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-surface-container text-on-surface font-label-md text-body-sm font-medium hover:bg-surface-container-high transition-colors"
            >
              <Icons.Download size={16} />
              <span>Download CV</span>
            </a>
            <a
              href={siteConfig.contact.phoneHref}
              className="inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-surface-container text-tertiary font-label-md text-body-sm font-medium hover:bg-surface-container-high transition-colors"
            >
              <Icons.Phone size={16} />
              <span>Call: {siteConfig.contact.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
