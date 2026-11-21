import { ExperienceItem } from "@/types";

export const experienceData: ExperienceItem[] = [
  {
    role: "Technical Project Manager / Project Coordinator",
    company: "Esight Business Solutions",
    period: "Jan 2025 - Present",
    current: true,
    color: "secondary",
    description:
      "Governing 33+ software initiatives, lead requirements elicitation, author functional PRDs, coordinate daily scrums, manage Jira sprints, and lead final UAT before production sign-off.",
    highlights: [
      "Directed end-to-end SDLC across 33+ web, SaaS, and mobile products for UAE and international clients.",
      "Engineered detailed PRDs, system architecture blueprints, user stories, and acceptance criteria.",
      "Facilitated daily scrums, sprint planning, and backlog grooming in Jira and ClickUp.",
      "Maintained zero-downtime deployment pipelines using Cloudflare DNS, Hostinger VPS, and cPanel environments.",
    ],
  },
  {
    role: "Junior MERN Stack Developer",
    company: "Soften Technologies",
    period: "Jul 2024 - Dec 2024",
    current: false,
    color: "tertiary",
    description:
      "Engineered interactive React interfaces, crafted Node.js/Express REST APIs, structured MongoDB schemas, and performed thorough API testing using Postman.",
    highlights: [
      "Developed modular, responsive React.js frontends integrated with RESTful backends.",
      "Designed normalized MongoDB schemas and created performant aggregation pipelines.",
      "Performed regression testing, API validation with Postman, and Git version control workflows.",
      "Collaborated closely with product leads to translate business requirements into technical implementations.",
    ],
  },
];

export const educationData = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Pursuing",
    status: "Active",
  },
  {
    degree: "Diploma in Mechanical Engineering",
    institution: "Technical Board",
    status: "Completed",
  },
  {
    degree: "Certified MERN Stack Developer",
    institution: "Soften Technologies",
    status: "Certified",
  },
];
