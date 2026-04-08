import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projectCollection = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/project" }),
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		dateFormatted: z.string(),
		img: image(),
		img_alt: z.string().optional(),
		tags: z.array(z.string()),
	}),
});

export const collections = {
	project: projectCollection,
};
