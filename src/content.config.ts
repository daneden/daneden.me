import { glob } from "astro/loaders"
import { defineCollection } from "astro:content"
import { z } from "astro/zod"
import { schemes, themes } from "./themes"

const posts = defineCollection({
  // Posts live at content/<year>/<slug>/page.mdx; the id is "<year>/<slug>".
  loader: glob({
    base: "./content",
    pattern: "*/*/page.mdx",
    generateId: ({ entry }) => entry.replace(/\/page\.mdx$/, ""),
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    hidden: z.boolean().optional(),
    theme: z.enum(themes).optional(),
    scheme: z.enum(schemes).optional(),
  }),
})

export const collections = { posts }
