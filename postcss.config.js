const postcssImport = require(`postcss-import`)
const postcssPresetEnv = require(`postcss-preset-env`)

module.exports = () => ({
  plugins: [postcssPresetEnv(), postcssImport()],
})
