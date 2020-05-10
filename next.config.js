const withMDXEnhanced = require("next-mdx-enhanced")
const withMDXFm = require("next-mdx-frontmatter")
const prism = require("@mapbox/rehype-prism")
const smartypants = require("@ngsctt/remark-smartypants")
const withPlugins = require("next-compose-plugins")

const mdxOptions = {
  layoutPath: "layouts",
  defaultLayout: true,
  fileExtensions: ["mdx"],
  remarkPlugins: [smartypants],
  rehypePlugins: [prism],
}

module.exports = withPlugins(
  [withMDXFm],
  withMDXEnhanced(mdxOptions)({
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.node = {
          fs: "empty",
        }
      }

      return config
    },
  })
)
