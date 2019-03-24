const BASELINE = 1.5

const scales = {
  xxsmall: 0.125,
  xsmall: 0.5,
  small: 0.75,
  medium: 1,
  large: 1.5,
  xlarge: 3,
}

const widths = {
  auto: "auto",
  fill: "100%",
  container: "34rem",
}

widths.page = `calc(${widths.container} + ${BASELINE * scales.medium * 2}rem)`

// Not entirely sure where this stray .25rem comes from, but it’s needed to align things properly
widths.content = `calc(.25rem + (100vw - ${widths.page}) / 2)`

export default {
  baseline: BASELINE,
  widths,
  breakpoints: {
    medium: `64em`,
    narrow: `50em`,
  },
  colors: {
    wash: "#fefefe",
    site: "#e33d26",
    text: "#000207",
    meta: "#44464B",
    complementary: "#005bc2",
    additive: "rgba(0,0,0,.05)",
  },
  font: {
    family: {
      display: `"Orelo Variable", "Times New Roman", serif`,
      sans: `"Untitled Sans Web", "Helvetica Neue", -system-font, -apple-system, sans-serif`,
      mono: `"Founders Grotesk Mono Web", "Input Mono", "Source Code Pro", "Monaco", monospace`,
    },
    size: {
      small: `${scales.small}rem`,
      regular: `${scales.medium}rem`,
      h1: `${scales.xlarge}rem`,
      h2: `${scales.large}rem`,
    },
  },
  scales,
  // This confusing little function takes `scales` and creates
  // rem-based values for each size
  spacing: Object.assign(
    {},
    ...Object.keys(scales).map(n => ({
      // e.g. small: '(BASELINE * 0.875)rem'
      [n]: `${BASELINE * scales[n]}rem`,
    }))
  ),
}
