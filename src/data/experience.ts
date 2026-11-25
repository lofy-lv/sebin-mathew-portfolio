import { ExperienceItem } from "@/types";

export const experienceData: ExperienceItem[] = [
  {
    role: "Technical Project Manager / Project Coordinator",
    company: "Esight Business Solutions",
    period: "Jan 2025 - Present",
    current: true,
    color: "secondary",
    description:
      "Directing the full SDLC across 33+ commercial web, SaaS, and mobile initiatives. Translating client requirements into functional PRDs, orchestrating cross-functional agile teams in Jira, and managing production releases.",
    highlights: [
      "Directed end-to-end SDLC across 33+ web, SaaS, and mobile platforms delivered for UAE and global clients.",
      "Authored airtight PRDs, technical specifications, user stories, acceptance criteria, and system architecture blueprints.",
      "Managed project backlogs, sprint planning, task assignments, and daily scrums in Jira and ClickUp across frontend, backend, QA, and design teams.",
      "Orchestrated Cloudflare DNS, SSL issuance, hosting environments, and zero-downtime production cutovers.",
      "Conducted UAT verification, defect resolution, and pre-launch risk mitigation to ensure 100% production readiness.",
      "Leveraged AI development tools (Antigravity, Cursor, Claude Code, ChatGPT) to accelerate prototyping and documentation cycles by 40%.",
    ],
  },
  {
    role: "Junior MERN Stack Developer",
    company: "Soften Technologies",
    period: "Jul 2024 - Dec 2024",
    current: false,
    color: "tertiary",
    description:
      "Engineered responsive React.js user interfaces, developed secure Node.js/Express.js REST APIs, designed MongoDB schemas, and conducted rigorous Postman API validation.",
    highlights: [
      "Built and maintained responsive frontend interfaces and reusable component libraries using React.js and modern CSS.",
      "Developed and tested RESTful API endpoints with Node.js and Express.js, connecting frontend modules to MongoDB databases.",
      "Normalized MongoDB schemas, optimized query aggregations, and documented routes with Postman test suites.",
      "Collaborated in daily standups and sprint reviews, adhering to Git/GitHub version control and code review standards.",
    ],
  },
];

export const educationData = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Manipal University Jaipur",
    status: "Currently Pursuing",
  },
  {
    degree: "Full Stack Development Certification (MERN Stack)",
    institution: "Soften Technologies",
    status: "Certified (2024)",
  },
  {
    degree: "Diploma in Mechanical Engineering",
    institution: "USP Polytechnic College / DOTE",
    status: "Completed (2016 – 2018)",
  },
];
