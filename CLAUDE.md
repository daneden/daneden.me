# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun run dev      # Build tokens, start Astro dev server
bun run build    # Build tokens, build static site to dist/
bun run tokens   # Rebuild src/styles/tokens.css from tokens/ (dev does this on every change)
bun run check    # astro check (types)
```

## Architecture

A statically generated personal site and blog built with **Astro**. React is used for components, but nothing is hydrated: pages ship no framework JS. The only client scripts are `src/scripts/hls.ts`, which plays Mux videos in browsers without native HLS, and the paging script in `src/components/AppCarousel/AppCarousel.astro`.

### Routing

- `src/pages/index.astro`: homepage
- `src/pages/blog/[year]/[id].astro`: blog posts from the `posts` content collection
- `src/pages/portfolio/*.mdx`: portfolio deep dives (frontmatter `layout: ../../layouts/Page.astro`)
- `src/pages/feed.xml.ts`: RSS feed
- `src/pages/og/[slug].png.ts`: Open Graph images, rendered at build time with Satori + resvg
- Redirects live in `vercel.json`

### Content

Blog posts are MDX files at `content/YYYY/post-slug/page.mdx`, collected by `src/content.config.ts`. Metadata is frontmatter:

```yaml
---
title: "Post Title"
description: "Post description"   # optional
date: YYYY-MM-DD
hidden: true                      # optional, hides from index and feed
theme: "<name>"                   # optional, art-directed theme from tokens/themes
scheme: "dark"                    # optional, locks the page's colour scheme
---
```

In MDX, `<Image>` is the Astro component in `src/components/Image.astro` (it accepts JSX captions). React components can be imported and used in MDX, but JSX passed as a non-children prop to a React component won't render; use a string or an Astro component.

### Design tokens and theming

Tokens are the source of truth for colour, type, and spacing. They're DTCG-format JSON in `tokens/`, built with Terrazzo:

- `tokens/palette.mjs`: picks which [Tailwind colour ramp](https://tailwindcss.com/docs/colors) is the site's `base` (and per-theme overrides). `tokens/generate-palette.mjs` writes every Tailwind ramp (`color.<ramp>.<50–950>`) plus the `color.base.*` aliases to `tokens/generated/` (gitignored) as DTCG.
- `tokens/primitives.tokens.json`: other raw values (`color.brand.*`, syntax colours, font families, width axis, scale). Don't reference these from CSS.
- `tokens/semantic.tokens.json`: what CSS uses (`--color-text-primary`, `--space-m`, `--font-family-heading`, …). Light-scheme values.
- `tokens/schemes/dark.tokens.json`: dark overrides.
- `tokens/themes/*.tokens.json`: art-directed themes. Register new ones in `tokens/site.resolver.json`.
- `tokens/plugin-light-dark.mjs`: writes `src/styles/tokens.css` (gitignored). Scheme differences become `light-dark()` pairs on `:root`; each theme becomes a `[data-theme="…"]` block with only its differences.

During `astro dev`, a Vite plugin in `astro.config.ts` reruns `bun run tokens` when anything in `tokens/` changes, so edits show without a reload.

Pages set `data-theme` / `data-scheme` on `<html>` via `Base.astro` props (or MDX/post frontmatter). Locking a scheme just sets `color-scheme`, so every token follows.

Fonts are plain `@font-face` rules in `src/fonts/fonts.css` (Tiempos Text/Headline locally; Zalando Sans and JetBrains Mono from Fontsource). Sans width is set with `font-stretch: calc(var(--font-width-ui) * 1%)` (and `-label`, `-display`).

### Styling

CSS modules per component, plus `src/styles/global.css` (cascade layers: reset, tokens, base, components) and `src/styles/syntax.css` (maps Shiki's css-variables theme to syntax tokens). Use semantic tokens rather than raw values.

Breakpoints: 50em (narrow), 64em (medium).
