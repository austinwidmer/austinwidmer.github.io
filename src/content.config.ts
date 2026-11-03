import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    category: z.string().optional(),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/publications" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    venue: z.string(),
    paperUrl: z.string().optional(),
    posterUrl: z.string().optional(),
    bibtexUrl: z.string().optional(),
    citation: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    type: z.enum(["link", "article"]).default("link"),
    title: z.string(),
    description: z.string(),
    dateAdded: z.coerce.date(),
    url: z.url().optional(),
    tags: z.array(z.string()),
  }).refine((project) => project.type === "article" || project.url, {
    message: "Link projects require a URL.",
    path: ["url"],
  }),
});

export const collections = { blog, publications, projects };
