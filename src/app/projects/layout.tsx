import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delivered Products & Engineering Portfolio",
  description:
    "Explore 33+ web, SaaS, and mobile products delivered by Sebin Mathew across fintech, logistics, and enterprise ecosystems.",
  openGraph: {
    title: "Delivered Products & Engineering Portfolio | Sebin Mathew",
    description:
      "Explore 33+ web, SaaS, and mobile products delivered by Sebin Mathew across fintech, logistics, and enterprise ecosystems.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
