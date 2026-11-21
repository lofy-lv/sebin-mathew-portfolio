import { SkillCategory, SkillItem } from "@/types";

export const skillCategories: { id: SkillCategory; label: string }[] = [
  { id: "all", label: "All Stack (32)" },
  { id: "agile", label: "Agile & PM (8)" },
  { id: "code", label: "Code & APIs (10)" },
  { id: "ai", label: "AI Workflows (7)" },
  { id: "devops", label: "Cloud & DevOps (7)" },
];

export const skillsData: SkillItem[] = [
  // ==========================================
  // ROW 1: Agile & Project Management (8 items)
  // ==========================================
  {
    id: "jira",
    name: "JIRA",
    category: "agile",
    iconKey: "jira",
    brandColor: "#2684FF",
  },
  {
    id: "clickup",
    name: "ClickUp",
    category: "agile",
    iconKey: "clickup",
    brandColor: "#7B68EE",
  },
  {
    id: "trello",
    name: "Trello",
    category: "agile",
    iconKey: "trello",
    brandColor: "#0079BF",
  },
  {
    id: "notion",
    name: "Notion",
    category: "agile",
    iconKey: "notion",
    brandColor: "#FFFFFF",
  },
  {
    id: "prd-space",
    name: "PRD Space",
    category: "agile",
    iconKey: "prd-space",
    brandColor: "#D0BCFF",
  },
  {
    id: "user-stories",
    name: "User Stories",
    category: "agile",
    iconKey: "user-stories",
    brandColor: "#3CDDC7",
  },
  {
    id: "scrum-agile",
    name: "Scrum / Agile",
    category: "agile",
    iconKey: "scrum-agile",
    brandColor: "#FFB783",
  },
  {
    id: "uat-testing",
    name: "UAT Testing",
    category: "agile",
    iconKey: "uat-testing",
    brandColor: "#3CDDC7",
  },

  // ==========================================
  // ROW 2: Engineering & Data Foundations (8 items)
  // ==========================================
  {
    id: "javascript",
    name: "JavaScript",
    category: "code",
    iconKey: "javascript",
    brandColor: "#F7DF1E",
  },
  {
    id: "react",
    name: "React.js",
    category: "code",
    iconKey: "react",
    brandColor: "#61DAFB",
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "code",
    iconKey: "nextjs",
    brandColor: "#FFFFFF",
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "code",
    iconKey: "nodejs",
    brandColor: "#5FA04E",
  },
  {
    id: "express",
    name: "Express",
    category: "code",
    iconKey: "express",
    brandColor: "#E2E2E9",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "code",
    iconKey: "mongodb",
    brandColor: "#47A248",
  },
  {
    id: "sql",
    name: "SQL",
    category: "code",
    iconKey: "sql",
    brandColor: "#4169E1",
  },
  {
    id: "rest-api",
    name: "REST APIs",
    category: "code",
    iconKey: "rest-api",
    brandColor: "#FF6C37",
  },

  // ==========================================
  // ROW 3: Developer Tools & AI Engineering (8 items)
  // ==========================================
  {
    id: "postman",
    name: "Postman",
    category: "code",
    iconKey: "postman",
    brandColor: "#FF6C37",
  },
  {
    id: "github",
    name: "Git & GitHub",
    category: "code",
    iconKey: "github",
    brandColor: "#F05032",
  },
  {
    id: "cursor",
    name: "Cursor IDE",
    category: "ai",
    iconKey: "cursor",
    brandColor: "#38BDF8",
  },
  {
    id: "claude",
    name: "Claude Code",
    category: "ai",
    iconKey: "claude",
    brandColor: "#D97757",
  },
  {
    id: "openai",
    name: "OpenAI / GPT",
    category: "ai",
    iconKey: "openai",
    brandColor: "#10A37F",
  },
  {
    id: "lovable",
    name: "Lovable",
    category: "ai",
    iconKey: "lovable",
    brandColor: "#FF3366",
  },
  {
    id: "antigravity",
    name: "Antigravity",
    category: "ai",
    iconKey: "antigravity",
    brandColor: "#8B5CF6",
  },
  {
    id: "prompt-eng",
    name: "Prompt Eng",
    category: "ai",
    iconKey: "prompt-eng",
    brandColor: "#D0BCFF",
  },

  // ==========================================
  // ROW 4: Systems, Cloud & Infrastructure (8 items)
  // ==========================================
  {
    id: "mcp-protocol",
    name: "MCP Protocol",
    category: "ai",
    iconKey: "mcp-protocol",
    brandColor: "#3CDDC7",
  },
  {
    id: "n8n",
    name: "n8n Automation",
    category: "devops",
    iconKey: "n8n",
    brandColor: "#EA4B71",
  },
  {
    id: "cloudflare",
    name: "Cloudflare",
    category: "devops",
    iconKey: "cloudflare",
    brandColor: "#F38020",
  },
  {
    id: "cpanel",
    name: "cPanel & WHM",
    category: "devops",
    iconKey: "cpanel",
    brandColor: "#FF6C2C",
  },
  {
    id: "hostinger",
    name: "Hostinger VPS",
    category: "devops",
    iconKey: "hostinger",
    brandColor: "#673DE6",
  },
  {
    id: "godaddy",
    name: "GoDaddy",
    category: "devops",
    iconKey: "godaddy",
    brandColor: "#1BDBDB",
  },
  {
    id: "ssl-security",
    name: "SSL & Security",
    category: "devops",
    iconKey: "ssl-security",
    brandColor: "#3CDDC7",
  },
  {
    id: "dns-config",
    name: "DNS Config",
    category: "devops",
    iconKey: "dns-config",
    brandColor: "#FFB783",
  },
];
