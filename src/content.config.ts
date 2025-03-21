import { glob } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

const posts = defineCollection({
  loader: glob({ base: "./src/content/posts", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    isDraft: z.boolean().default(false),
    isFeatured: z.boolean().default(false),
    title: z.string().max(60, {
      message: "Be short and concice, 70 characters max for title",
    }),
    description: z.string().max(120, {
      message: "Less is more, 120 characters max for description",
    }),
    tags: z.array(z.string()),
    publishDate: z.date(),
    canonicalURL: z.string().url().optional(),
    relatedPosts: z.array(reference("posts")).optional(),
  }),
});

export const collections = {
  posts,
};
