export type ProjectCategory =
  | "all"
  | "Web Platform"
  | "SaaS"
  | "Mobile App"
  | "AI & Automation"
  | "Business Websites"
  | string;

export type ProjectStatus = "Shipped" | "Ongoing" | "Planning" | "shipped" | "ongoing" | "planning" | string;

export interface Project {
  id: string;
  title: string;
  domain: string;
  liveUrl?: string;
  category: string;
  categoryLabel?: string;
  status: string;
  featured?: boolean;
  description: string;
  tags: string[];
  metric?: string;
  metrics?: string;
  image: string;
}

export type SkillCategory = "all" | "agile" | "code" | "ai" | "devops";

export interface SkillItem {
  id: string;
  name: string;
  category: "agile" | "code" | "ai" | "devops";
  iconKey: string;
  brandColor: string;
  level?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  color: "primary" | "secondary" | "tertiary";
  description: string;
  highlights: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  summary: string;
  impactMetrics: { label: string; value: string }[];
  colorVariant: "primary" | "secondary" | "tertiary";
}
