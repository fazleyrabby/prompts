import { defineCollection, z } from 'astro:content';

const prompts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    preview: z.string().optional(),
    model: z.string(),
  }),
});

export const collections = { prompts };
