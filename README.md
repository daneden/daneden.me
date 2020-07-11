# daneden.me

[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/daneden/daneden.me)
![Check lint results](https://github.com/daneden/daneden.me/workflows/Check%20lint%20results/badge.svg)

Welcome to the innards of [my website](http://daneden.me). It’s built using
[Next.js](http://nextjs.org/) and deployed on [Vercel](https://vercel.com/home).

## Installation

If you want to run this site locally:

-   Make sure you have [Yarn](https://yarnpkg.com/en/) installed
-   `git clone https://github.com/daneden/daneden.me`
-   Run `yarn` to install dependencies
-   Run `yarn dev`
-   Party.

To build for production, run `yarn build`.

## Interesting Things

### `atoms.ts`

[`atoms.ts`](https://github.com/daneden/daneden.me/blob/main/src/components/designSystem/atoms.ts)
defines the atomic style values for the site's design system. This approach to
defining design system styles is documented in my blog post,
[Subatomic Design Systems](https://daneden.me/blog/2018/subatomic-design-systems).

Many of the atoms are mirrored in CSS variables declared in
[`Layout.tsx`](https://github.com/daneden/daneden.me/blob/main/src/components/Layout.tsx),
but occasionally (such as in the
[open graph image generator](#open-graph-image-generation)) need direct
reference in JavaScript.

### Open Graph Image Generation

I wanted to be able to generate images for blog posts based on their titles. To
achieve this, I have a
[function](https://github.com/daneden/daneden.me/blob/main/src/utils/ogImage.ts)
that runs at build time to generate OG images using `node-canvas`.

### Category Pages

Next.js allows dynamic path static generation via `getStaticPaths`. I'm using
this in
[`[category].tsx`](https://github.com/daneden/daneden.me/blob/main/pages/blog/%5Bcategory%5D.tsx)
to generate pages for blog post categories.

### `mdxUtils.ts`

[`mdxUtils.ts`](https://github.com/daneden/daneden.me/blob/main/src/utils/mdxUtils.ts)
has some handy functions to co-locate things I want to do with my blog posts,
including:

-   Getting all the blog posts and their front matter/metadata
-   Sorting by date and filtering out "hidden" posts
-   Keeping track of post categories
-   Getting posts by category

### `widont.ts`

A personal favourite,
[`widont.ts`](https://github.com/daneden/daneden.me/blob/main/src/utils/widont.ts)
is a tiny function that replaces the last space in a string with a non-breaking
space. Great for preventing widows on post titles.
