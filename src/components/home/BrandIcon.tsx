import React from "react";
import {
  SiJira,
  SiClickup,
  SiTrello,
  SiNotion,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPostman,
  SiGithub,
  SiAnthropic,
  SiN8N,
  SiCloudflare,
  SiCpanel,
  SiHostinger,
  SiGodaddy,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import {
  FileText,
  BookOpen,
  RefreshCw,
  CheckCircle2,
  Sparkles,
  Lock,
  Globe,
  ShieldCheck,
} from "lucide-react";

interface BrandIconProps {
  iconKey: string;
  size?: number;
  className?: string;
}

// Clean inline SVGs for tools not present in icon libraries or requiring bespoke styling
function CursorIcon({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="4.5" fill="currentColor" fillOpacity="0.15" />
      <path
        d="M6 7l6 5-6 5V7z"
        fill="currentColor"
      />
      <rect width="7" height="2.5" x="12" y="15" rx="1" fill="currentColor" />
    </svg>
  );
}

function LovableIcon({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.2" />
      <path
        d="M12 16.5l-4-4a3 3 0 0 1 4.2-4.2l-.2.2.2-.2a3 3 0 0 1 4.2 4.2l-4.2 4z"
        fill="currentColor"
      />
    </svg>
  );
}

function AntigravityIcon({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Outer futuristic ring */}
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeDasharray="2 3"
      />
      {/* Inverted Anti-gravity delta core */}
      <path
        d="M12 4.5L5 17.5h14L12 4.5z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      {/* Quantum singularity dot */}
      <circle cx="12" cy="13.2" r="2.2" fill="currentColor" />
      <circle cx="12" cy="7.5" r="1" fill="currentColor" />
    </svg>
  );
}

function McpIcon({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Protocol container brackets */}
      <path d="M7 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3" />
      <path d="M17 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3" />
      {/* Interconnected context nodes */}
      <circle cx="8" cy="12" r="1.8" fill="currentColor" />
      <circle cx="16" cy="12" r="1.8" fill="currentColor" />
      <path d="M9.8 12h4.4" strokeDasharray="1.5 1.5" />
      <path d="M12 9.5v5" />
    </svg>
  );
}

function RestApiIcon({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" />
      <path d="M6 10v4" />
      <path d="M9 10h2.5a1.5 1.5 0 0 1 0 3H9v-3z" />
      <path d="M14 14l2-4 2 4" />
      <path d="M15 12.8h2" />
    </svg>
  );
}

export function BrandIcon({ iconKey, size = 28, className = "" }: BrandIconProps) {
  switch (iconKey) {
    // Agile & PM
    case "jira":
      return <SiJira size={size} className={className} />;
    case "clickup":
      return <SiClickup size={size} className={className} />;
    case "trello":
      return <SiTrello size={size} className={className} />;
    case "notion":
      return <SiNotion size={size} className={className} />;
    case "prd-specs":
    case "prd-space":
      return <FileText size={size} className={className} />;
    case "user-stories":
      return <BookOpen size={size} className={className} />;
    case "scrum-agile":
      return <RefreshCw size={size} className={className} />;
    case "uat-testing":
      return <CheckCircle2 size={size} className={className} />;

    // Code & Architecture
    case "javascript":
      return <SiJavascript size={size} className={className} />;
    case "react":
      return <SiReact size={size} className={className} />;
    case "nextjs":
      return <SiNextdotjs size={size} className={className} />;
    case "nodejs":
      return <SiNodedotjs size={size} className={className} />;
    case "express":
      return <SiExpress size={size} className={className} />;
    case "mongodb":
      return <SiMongodb size={size} className={className} />;
    case "sql":
      return <SiPostgresql size={size} className={className} />;
    case "rest-api":
      return <RestApiIcon size={size} className={className} />;

    // Developer Tools & Auth
    case "postman":
      return <SiPostman size={size} className={className} />;
    case "github":
      return <SiGithub size={size} className={className} />;
    case "rbac-auth":
      return <ShieldCheck size={size} className={className} />;

    // AI Engineering & Workflows
    case "cursor":
      return <CursorIcon size={size} className={className} />;
    case "claude":
      return <SiAnthropic size={size} className={className} />;
    case "openai":
      return <RiOpenaiFill size={size} className={className} />;
    case "lovable":
      return <LovableIcon size={size} className={className} />;
    case "antigravity":
      return <AntigravityIcon size={size} className={className} />;
    case "prompt-eng":
      return <Sparkles size={size} className={className} />;
    case "mcp-protocol":
      return <McpIcon size={size} className={className} />;
    case "n8n":
      return <SiN8N size={size} className={className} />;

    // Systems, Cloud & Infrastructure
    case "cloudflare":
      return <SiCloudflare size={size} className={className} />;
    case "vercel":
      return <SiVercel size={size} className={className} />;
    case "netlify":
      return <SiNetlify size={size} className={className} />;
    case "hostinger":
      return <SiHostinger size={size} className={className} />;
    case "cpanel":
      return <SiCpanel size={size} className={className} />;
    case "godaddy":
      return <SiGodaddy size={size} className={className} />;
    case "ssl-security":
      return <Lock size={size} className={className} />;
    case "dns-config":
      return <Globe size={size} className={className} />;

    default:
      return <Sparkles size={size} className={className} />;
  }
}
