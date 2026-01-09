# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev      # Start development server
yarn build    # Build for production
yarn lint     # Run ESLint
yarn start    # Start production server
```

## Architecture

This is a personal portfolio/blog built with **Next.js 16 using the App Router**.

### Routing Structure

The app uses route groups to organize layouts:
- `app/(root)/` — Homepage with minimal layout (just Vercel Analytics)
- `app/(branches)/` — Content pages (blog, portfolio, playlist) with full Header/Footer/Wrapper layout

Key routes:
- `/blog/[year]/[id]` — Blog posts as MDX files stored at `app/(branches)/blog/[year]/[id]/page.mdx`
- `/portfolio/[projectName]` — Portfolio project pages
- `/feed.xml` — Atom RSS feed (route handler)
- `/og/[id]` — Dynamic Open Graph image generation

### Content & MDX

Blog posts are MDX files stored at `app/(branches)/blog/[year]/[id]/page.mdx`.

**Important: Blog post metadata is centralized in two locations:**
1. `app/posts.json` — Source of truth for all post metadata (title, description, date, id)
2. `app/(branches)/blog/[year]/[id]/layout.tsx` — Reads from posts.json and generates Next.js metadata

**Publishing a new blog post:**
1. Create the MDX file at `app/(branches)/blog/YYYY/post-slug/page.mdx` (no metadata exports needed)
2. Add post metadata to `app/posts.json`:
   ```json
   {
     "id": "post-slug",
     "title": "Post Title",
     "description": "Post description",
     "date": "YYYY-MM-DD"
   }
   ```
3. The layout automatically generates metadata and Open Graph images via `/og/[id]`

MDX configuration in `next.config.mjs` includes:
- Remark: `remark-gfm`, `remark-smartypants`, `remark-math`, `remark-toc`, `remark-directive`
- Rehype: `rehype-katex`, `mdx-prism`

Custom MDX components are defined in `mdx-components.tsx` (enhanced Image, smart Link handling).

### Styling

CSS modules for component styles, with global design tokens in `app/styles/global.css`:
- Spacing scale: `--sp-xxs` through `--sp-xxl`
- Color system with HSL-based gray scale
- Typography via CSS variables: `--font-sans`, `--font-serif`, `--font-heading`, `--font-mono`
- Breakpoints: `--breakpoint-narrow` (50em), `--breakpoint-medium` (64em)

Custom fonts loaded via `next/font` in `app/fonts/`.

### Key Files

- `app/get-posts.ts` — Transforms posts.json into route-ready post data
- `app/metadata.ts` — Base site metadata with OpenGraph/Twitter cards
- `app/sitemap.ts` — Dynamic sitemap generation
- `app/utils/` — Helpers: `cx.ts` (classnames), `formatDate.ts`, `widont.ts` (typography)
- `next.config.mjs` — MDX plugins and legacy URL redirects

### Static Site Pattern

This is a statically generated site with no runtime data fetching. Content comes from:
- MDX files (blog posts)
- JSON files (`posts.json`, `playlist.json`, `timeline.json`)

GraphQL client exists (`app/utils/graphql-client.ts`) configured for Hygraph but is not actively used.
