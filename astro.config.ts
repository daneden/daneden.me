import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import vercel from "@astrojs/vercel"
import { unified } from "@astrojs/markdown-remark"
import { defineConfig } from "astro/config"
import rehypeKatex from "rehype-katex"
import remarkDirective from "remark-directive"
import remarkMath from "remark-math"
import remarkToc from "remark-toc"
import { createCssVariablesTheme } from "shiki/core"

// Syntax colours come from tokens via src/styles/syntax.css.
const cssVariablesTheme = createCssVariablesTheme({
  name: "css-variables",
  variablePrefix: "--shiki-",
  fontStyle: true,
})

export default defineConfig({
  site: "https://daneden.me",
  integrations: [mdx(), react(), sitemap()],
  // Images go through Vercel's optimiser in production (sharp locally).
  adapter: vercel({
    imageService: true,
    devImageService: "sharp",
    imagesConfig: {
      sizes: [160, 320, 640, 828, 1080, 1200, 1920, 2048, 3840],
      domains: [],
    },
  }),
  markdown: {
    // GFM and SmartyPants are on by default in unified().
    processor: unified({
      remarkPlugins: [remarkMath, remarkToc, remarkDirective],
      rehypePlugins: [rehypeKatex],
    }),
    shikiConfig: { theme: cssVariablesTheme },
  },
})
