import { defineCollection, z } from 'astro:content';

const prompts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    preview: z.string().optional(),
    thumbnail: z.string().optional(),
    model: z.string(),
    draft: z.boolean().optional().default(false),
  }),
});

const inspirations = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    url: z.string().url(),
    preview: z.string().optional(),
    generatedWith: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { prompts, inspirations };

