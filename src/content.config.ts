import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
    tags: z.array(z.string()).default(['Reflection']),
	}),
});

const reviews = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/reviews" }),
	schema: z.object({
		title: z.string(),
		author: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		heroImage: z.string(), 
		amazonId: z.string().optional(),
    rating: z.number().min(0).max(5).default(5),
    tags: z.array(z.string()).default(['Book Review']),
	}),
});

export const collections = { blog, reviews };
