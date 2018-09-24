const BASELINE = 1.7778

const scales = {
  xsmall: 0.5,
  small: 0.875,
  medium: 1,
  large: 2,
  xlarge: 4,
}

export default {
  baseline: BASELINE,
  breakpoints: {
    medium: `56rem`,
    narrow: `30rem`,
  },
  colors: {
    wash: "#fefefe",
    site: "#00c266",
    text: "#000207",
    meta: "#747474",
  },
  font: {
    family: {
      serif: `"Tiempos Text Web", "Georgia", serif`,
      sans: `"Neue Haas Unica Web", -apple-system, BlinkMacSystemFont, sans-serif`,
      mono: `"Input Mono", "Source Code Pro", "Monaco", monospace`,
    },
    size: {
      small: `${scales.small}rem`,
      regular: `${scales.medium}rem`,
      h1: `1.333rem`,
      h2: `1.111rem`,
    },
  },
  scales,
  spacing: Object.assign(
    {},
    ...Object.keys(scales).map(n => ({
      [n]: `${BASELINE * scales[n]}rem`,
    }))
  ),
}
