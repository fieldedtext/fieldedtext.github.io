import { defineCollection, z } from 'astro:content';

const newsCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
        publishDate: z.date(),
    }),
});

// Key should match your collection directory name in "src/content"
export const collections = {
    'news': newsCollection,
};
