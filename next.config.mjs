import nextMdx from "@next/mdx"
import { rehypePlugins, remarkPlugins } from "./src/utils/mdxPlugins.mjs"

const withMDX = nextMdx({
  options: {
    remarkPlugins,
    rehypePlugins,
  },
})

/** @type {import('next').NextConfig} */
const config = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: {
    domains: ["media.graphassets.com"],
  },
  experimental: {
    appDir: true,
  },

  redirects() {
    return [
      {
        source: "/animate",
        permanent: true,
        destination: "https://animate.style/",
      },
      {
        source: "/baseline",
        permanent: true,
        destination: "https://github.com/daneden/Baseline.js",
      },
      {
        source: "/books(.*)",
        permanent: true,
        destination: "/playlist$1",
      },
      {
        source: "/toast",
        permanent: true,
        destination: "https://daneden.github.io/Toast/",
      },
      {
        source: "/images/favicon.ico",
        permanent: true,
        destination: "/images/favicon.png",
      },
      {
        source: "/:year(\\d+)/:month(\\d+)?/:day(\\d+)?/:title(.*)",
        permanent: true,
        destination: "/blog/:year/:title",
      },
      {
        source: "/rss.xml",
        permanent: true,
        destination: "/feed.xml",
      },
    ]
  },
}

export default withMDX(config)
