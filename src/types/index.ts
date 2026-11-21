export type ProjectCategory =
  | "all"
  | "web-platform"
  | "saas"
  | "mobile-app"
  | "ai-automation"
  | "business-websites";

export type ProjectStatus = "shipped" | "ongoing" | "planning";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  status: ProjectStatus;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  metrics?: string;
  featured?: boolean;
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
