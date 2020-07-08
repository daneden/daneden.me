const prism = require("@mapbox/rehype-prism")
const slug = require("rehype-slug")
const smartypants = require("@ngsctt/remark-smartypants")
const toc = require("remark-toc")
const withMDXEnhanced = require("next-mdx-enhanced")
const withMDXFm = require("next-mdx-frontmatter")
const withPlugins = require("next-compose-plugins")
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

const mdxOptions = {
  layoutPath: "src/layouts",
  defaultLayout: true,
  fileExtensions: ["mdx"],
  remarkPlugins: [smartypants, toc],
  rehypePlugins: [prism, slug],
}

module.exports = withPlugins(
  [withMDXFm, withBundleAnalyzer],
  withMDXEnhanced(mdxOptions)({
    env: {
      VERCEL_URL: process.env.VERCEL_URL || "daneden.me",
    },
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.node = {
          fs: "empty",
        }
      }

      config.module.rules = [
        ...config.module.rules,
        {
          test: /\.(ttf)$/i,
          use: [
            {
              loader: "file-loader",
            },
          ],
        },
      ]

      return config
    },
  })
)
