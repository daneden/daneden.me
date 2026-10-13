import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
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
  markdown: {
    // GFM and SmartyPants are on by default in unified().
    processor: unified({
      remarkPlugins: [remarkMath, remarkToc, remarkDirective],
      rehypePlugins: [rehypeKatex],
    }),
    shikiConfig: { theme: cssVariablesTheme },
  },
})
