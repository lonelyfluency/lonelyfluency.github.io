import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Research theme pages (design.md §10) — one file per theme in
 * src/content/research/. Ordered by `order`.
 */
const research = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    question: z.string(), // central research question, one sentence
    summary: z.string(), // one-sentence description for cards
    methods: z.array(z.string()).default([]),
    /** Publication tags (from metadata.yaml) that belong to this theme —
     *  used to list related publications on the theme page. */
    pubTags: z.array(z.string()).default([]),
    order: z.number().default(99),
    icon: z
      .enum(['locomotion', 'planning', 'manipulation', 'systems'])
      .default('systems'),
  }),
});

/**
 * Project pages (design.md §12) — one folder or file per project in
 * src/content/projects/.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    dateRange: z.string().optional(), // human-readable, e.g. "2020 – 2022"
    status: z.enum(['active', 'completed']).default('completed'),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    /** Homepage card layout variant (design.md §9.3). */
    variant: z.enum(['landscape', 'split', 'compact']).default('split'),
    themes: z.array(z.string()).default([]),
    platforms: z.array(z.string()).default([]),
    methods: z.array(z.string()).default([]),
    collaborators: z.array(z.string()).default([]),
    media: z
      .object({
        hero: z.string().optional(),
        heroAlt: z.string().optional(),
        video: z.string().optional(),
        videoPoster: z.string().optional(),
      })
      .default({}),
    links: z
      .object({
        paper: z.string().optional(),
        code: z.string().optional(),
        video: z.string().optional(),
        dataset: z.string().optional(),
      })
      .default({}),
  }),
});

/** Short structured news items (design.md §15). */
const news = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum([
      'Publication',
      'Award',
      'Project',
      'Talk',
      'Release',
      'Travel',
      'Teaching',
      'Position',
    ]),
    link: z.string().optional(),
  }),
});

export const collections = { research, projects, news };
