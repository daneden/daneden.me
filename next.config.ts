import { NextConfig } from "next"
import nextMdx from "@next/mdx"
import { rehypePlugins, remarkPlugins } from "@/app/utils/mdxPlugins.js"

const withMDX = nextMdx({
  options: {
    remarkPlugins,
    rehypePlugins,
  },
})

const config: NextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],

  async redirects() {
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
