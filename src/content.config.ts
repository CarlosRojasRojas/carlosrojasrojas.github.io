import { defineCollection, z } from 'astro:content';

import { glob, file } from 'astro/loaders';

const blogCollection = defineCollection({
	loader: glob({ base: 'src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		author: z.string().optional(),
		image: z.string().optional(),
		tags: z.array(z.string()).optional(),
		slug: z.string().optional(),
	}),
});

export const collections = {
	blog: blogCollection,
};
