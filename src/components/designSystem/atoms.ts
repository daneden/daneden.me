const BASELINE = 1.6

const scales = {
  xxsmall: 0.125,
  xsmall: 0.5,
  small: 0.75,
  medium: 1,
  large: 1.5,
  xlarge: 3,
  xxlarge: 4,
}

const widths = {
  auto: "auto",
  fill: "100%",
  container: "34rem",
  // These values are changed momentarily; they’re set to 0 here to suppress TS errors.
  content: "",
  page: "",
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
    blackAlpha: "rgba(0, 0, 0, 0.75)",
    whiteAlpha: "rgba(255, 255, 255, 0.75)",
    wash: "#f5f5f5",
    siteLight: "blue",
    siteDark: "dodgerBlue",
    text: "#111",
    meta: "#44464B",
    mark: "rgba(255, 200, 0, 0.15)",
    highlight: "#ffc800",
    complementary: "#058cff",
    additive: "rgba(0,0,0,.05)",
  },
  font: {
    family: {
      body: `"Inter", system-ui, -apple-system, sans-serif`,
      mono: `"IBM Plex Mono", monospace`,
      display: `"Inter", system-ui, -apple-system, sans-serif`,
    },
    size: {
      small: `${scales.small}rem`,
      regular: `${scales.medium}rem`,
      h1: `${scales.large}rem`,
      h2: `${scales.medium}rem`,
    },
  },
  scales,
  // This confusing little function takes `scales` and creates
  // rem-based values for each size
  spacing: Object.assign(
    {},
    ...(Object.keys(scales) as Array<keyof typeof scales>).map((n) => ({
      // e.g. small: '(BASELINE * 0.875)rem'
      [n]: `${BASELINE * scales[n]}rem`,
    }))
  ),
}
