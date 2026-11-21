import { z } from "zod";

export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  domain: z.string(),
  liveUrl: z.string().optional(),
  category: z.string(),
  categoryLabel: z.string().optional(),
  status: z.string(),
  featured: z.boolean().optional(),
  description: z.string(),
  tags: z.array(z.string()),
  metric: z.string().optional(),
  metrics: z.string().optional(),
  image: z.string(),
  role: z.string().default("Technical PM @ Esight"),
  organization: z.string().default("Esight Business Solutions"),
});

export const projectsListSchema = z.array(projectSchema);

export type ValidatedProject = z.infer<typeof projectSchema>;
