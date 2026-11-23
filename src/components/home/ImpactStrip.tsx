import React from "react";
import { Icons } from "@/components/ui/Icons";

export function ImpactStrip() {
  const stats = [
    {
      value: "33+",
      title: "Live Projects",
      subtitle: "Web, SaaS & Mobile Deployments",
      icon: Icons.Rocket,
      gradient: "from-primary to-secondary",
      iconColor: "text-primary",
    },
    {
      value: "Full-Spec",
      title: "Full-Spectrum",
      subtitle: "Web · SaaS · Mobile · AI Platforms",
      icon: Icons.Cpu,
      gradient: "from-tertiary to-primary",
      iconColor: "text-tertiary",
    },
    {
      value: "SDLC",
      title: "End-to-End",
      subtitle: "PRD to deployment, full SDLC",
      icon: Icons.RefreshCw,
      gradient: "from-secondary to-primary-container",
      iconColor: "text-secondary",
    },
    {
      value: "Dubai",
      title: "Dubai, UAE",
      subtitle: "Available Immediately · Visit Visa",
      icon: Icons.MapPin,
      gradient: "from-tertiary to-secondary",
      iconColor: "text-tertiary",
    },
  ];

  return (
    <section className="w-full px-6 md:px-10 lg:px-14 -mt-4 relative z-20">
      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 p-5 lg:p-7 rounded-2xl bg-surface-container-low/75 backdrop-blur-xl border border-outline-variant/30 shadow-xl shadow-surface-container-lowest/60">
        {stats.map((stat, idx) => {
          const IconComp = stat.icon;
          return (
            <div
              key={idx}
              className="flex flex-col gap-1.5 p-5 lg:p-6 rounded-xl bg-surface-container/60 hover:bg-surface-container-high/70 border border-outline-variant/20 hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`font-display text-headline-lg lg:text-[40px] font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                >
                  {stat.value}
                </span>
                <IconComp className={`${stat.iconColor} group-hover:scale-110 transition-transform`} size={24} />
              </div>
              <span className="font-headline-sm text-label-md font-semibold text-on-surface">
                {stat.title}
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                {stat.subtitle}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
