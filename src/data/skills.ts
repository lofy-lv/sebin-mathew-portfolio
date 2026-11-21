import { SkillCategory, SkillItem } from "@/types";

export const skillCategories: { id: SkillCategory; label: string }[] = [
  { id: "all", label: "All Stack (26+)" },
  { id: "agile", label: "Agile & PM" },
  { id: "code", label: "Code & APIs" },
  { id: "ai", label: "AI Workflows" },
  { id: "devops", label: "Cloud & DevOps" },
];

export const skillsData: SkillItem[] = [
  // Agile & PM
  { name: "JIRA", category: "agile", iconName: "KanbanSquare" },
  { name: "ClickUp", category: "agile", iconName: "CheckSquare" },
  { name: "Trello", category: "agile", iconName: "LayoutGrid" },
  { name: "PRD Space", category: "agile", iconName: "FileText" },
  { name: "User Stories", category: "agile", iconName: "BookOpen" },
  { name: "Scrum / Agile", category: "agile", iconName: "RefreshCw" },
  { name: "UAT Testing", category: "agile", iconName: "CheckCircle2" },

  // Code & APIs
  { name: "React.js", category: "code", iconName: "Atom" },
  { name: "Next.js", category: "code", iconName: "Layers" },
  { name: "Node.js", category: "code", iconName: "Server" },
  { name: "Express", category: "code", iconName: "Cpu" },
  { name: "MongoDB", category: "code", iconName: "Database" },
  { name: "REST APIs", category: "code", iconName: "Webhook" },
  { name: "Postman", category: "code", iconName: "Send" },
  { name: "Git & GitHub", category: "code", iconName: "GitBranch" },

  // AI Workflows
  { name: "Cursor IDE", category: "ai", iconName: "Terminal" },
  { name: "Claude Code", category: "ai", iconName: "Sparkles" },
  { name: "OpenAI / GPT", category: "ai", iconName: "Bot" },
  { name: "Lovable", category: "ai", iconName: "Wand2" },
  { name: "Prompt Eng", category: "ai", iconName: "Cpu" },
  { name: "n8n Autom...", category: "ai", iconName: "Workflow" },

  // Cloud & DevOps
  { name: "Cloudflare", category: "devops", iconName: "Cloud" },
  { name: "cPanel / WH...", category: "devops", iconName: "HardDrive" },
  { name: "Hostinger V...", category: "devops", iconName: "Network" },
  { name: "SSL & Secur...", category: "devops", iconName: "Lock" },
  { name: "DNS Config", category: "devops", iconName: "Globe" },
];
