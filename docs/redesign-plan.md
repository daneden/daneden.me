# Redesign plan

## Phase 1: Platform (done on this branch)

- Next.js → Astro (static, React components rendered at build time, no hydration).
- Post metadata moved from `posts.json` into MDX frontmatter (`content.config.ts` validates it).
- Design tokens in DTCG format (`tokens/`), built by Terrazzo into `src/styles/tokens.css`.
  - OKLCH neutral ramp (converted from the old HSL ramp, visually the same).
  - Light/dark via a resolver `scheme` modifier, emitted as `light-dark()` pairs.
  - Art-directed themes via a resolver `theme` modifier, applied with `data-theme` on `<html>`. Pages can also lock their scheme with `data-scheme`. First theme: `deep-dive` (Solstice and Zeitgeist pages).
  - Font family, weight and width are tokens, so a theme can swap typefaces.
- Söhne → Zalando Sans (variable, width axis 75–125). Width tokens: `ui` (92, running sans text), `label` (100), `display` (125, replaces the old SF Pro `wdth 132`).
- Prism → Shiki with a css-variables theme mapped onto syntax tokens.
- Mux video and the light/dark image work without client-side React.
- Removed: GraphQL client, next-mdx-remote, duplicate Prism packages.

### Known gaps from the move

- **Image optimisation.** `next/image` used to resize `public/uploads` (83MB, 16 files over 1MB). They're now served as-is. Fix next, with one of:
  1. `@astrojs/vercel` with `imageService: true`, so `Image.astro` goes through Vercel's optimiser like before (smallest change), or
  2. Move uploads into `src/assets` and let `astro:assets` resize at build time (portable, slower builds).
- The feed is now RSS 2.0 rather than Atom (same URL; readers handle both).
- OG images still use Söhne (from `src/og-fonts`). Switch to Zalando Sans once there's a TTF/OTF copy.

## Phase 2: Homepage

- **App carousel (`PortfolioCarousel` + `HScroll`)**: keep the horizontal scroll and tweak the visuals. Card titles already use the `display` width.
- **Replace `Timeline` with cards.** Same horizontal-scroll pattern or a grid below it. Source data: `src/data/timeline.json`. Group it into apps, talks and writing, or one card per item.
- **Résumé card**: Figma (2026–), Meta (2016–2026, with roles broken down as on `/portfolio`), Dropbox. Plus talks (dotCSS 2015, One Day Out 2016, Clarity 2019) and podcasts/interviews (Design Details 2016, Lovers Magazine 2018).
  - Needs: Dropbox dates, and any podcast or talk appearances missing from the timeline.
- Consider making cards a content collection (`src/content/cards/*.md`) so adding one is just adding a file.

## Phase 3: Footer

- Big ✌ (U+270C) in the left gutter, standard footer text in the main column.
- Render with `font-family: "Zapf Dingbats"` and U+FE0E (text presentation, so it doesn't turn into the emoji). Apple platforms ship Zapf Dingbats. Everywhere else needs a fallback: either an SVG of the glyph (check the ITC/Monotype licence before tracing it), or a drawn version.
- Size and colour should come from tokens (e.g. `--color-accent`), so themes can restyle it.

## Phase 4: Themes in practice

- Theme ideas: per-app deep dives (Ora, Solstice, Zeitgeist), a dark-locked homepage section, one-off essays.
- To add a theme, create `tokens/themes/<name>.tokens.json` overriding semantic or primitive tokens, register it in `tokens/site.resolver.json`, then set `theme: <name>` in frontmatter.
