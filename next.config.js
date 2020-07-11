const prism = require("mdx-prism")
const slug = require("rehype-slug")
const smartypants = require("@ngsctt/remark-smartypants")
const toc = require("remark-toc")
const withMDXEnhanced = require("next-mdx-enhanced")

const mdxOptions = {
  layoutPath: "src/layouts",
  defaultLayout: true,
  fileExtensions: ["mdx"],
  remarkPlugins: [smartypants, toc],
  rehypePlugins: [prism, slug],
}

module.exports = withMDXEnhanced(mdxOptions)({
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
