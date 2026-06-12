import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

const newsCollection = defineCollection({
  loader: glob({ pattern: '**/_*.{md,mdx}', base: './src/data/news' }),
  schema: z.object({
    publishDate: z.date(),
  }),
});

// Key should match your collection directory name in "src/content"
export const collections = {
  news: newsCollection,
};
