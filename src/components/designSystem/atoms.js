import times from "utils/times"

const BASELINE = 1.5

const scales = {
  xxsmall: 0.125,
  xsmall: 0.5,
  small: 0.75,
  medium: 1,
  large: 1.5,
  xlarge: 3,
}

const rawColors = {
  black: "#000207",
  blackAlphas: times(10).map(i => `rgba(0, 2, 7, ${i * 0.1})`),
  blue: "#058cff",
  red: "#e33d26",
  white: "#fefefe",
  whiteAlphas: times(10).map(i => `rgba(254, 254, 254, ${i * 0.1})`),
}

const colors = {
  wash: rawColors.white,
  site: rawColors.red,
  text: rawColors.black,
  meta: rawColors.blackAlphas[8],
  complementary: rawColors.blue,
}

const widths = {
  auto: "auto",
  fill: "100%",
  container: "34rem",
}

widths.page = `calc(${widths.container} + ${BASELINE * scales.medium * 2}rem)`

// Not entirely sure where this stray .25rem comes from, but it’s needed to align things properly
widths.content = `calc(.25rem + (100vw - ${widths.page}) / 2)`

const atoms = {
  baseline: BASELINE,
  widths,
  breakpoints: {
    medium: `64em`,
    narrow: `50em`,
  },
  colors,
  font: {
    family: {
      display: `"Orelo Variable", "Times New Roman", serif`,
      sans: `"Untitled Sans Web", -apple-system, system-ui, BlinkMacSystemFont, sans-serif`,
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
      [n]: `calc(${BASELINE}rem * ${scales[n]})`,
    }))
  ),
}

const colorSchemeMQ =
  typeof window !== "undefined"
    ? window.matchMedia?.("(prefers-color-scheme: dark)")
    : null

const switchColorScheme = mediaQuery => {
  ;(atoms.colors.wash = mediaQuery.matches
    ? rawColors.blackAlphas[8]
    : rawColors.white),
    (atoms.colors.text = mediaQuery.matches
      ? rawColors.white
      : rawColors.black),
    (atoms.colors.meta = mediaQuery.matches
      ? rawColors.whiteAlphas[7]
      : rawColors.blackAlphas[8])
}

if (colorSchemeMQ !== null) {
  colorSchemeMQ.addListener(mq => switchColorScheme(mq))
  switchColorScheme(colorSchemeMQ)
}

export default atoms
