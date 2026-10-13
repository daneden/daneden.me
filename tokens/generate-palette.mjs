import { mkdirSync, writeFileSync } from "node:fs"
import colors from "tailwindcss/colors"
import { base, themes } from "./palette.mjs"

const outDir = new URL("./generated/", import.meta.url)
const ramps = Object.entries(colors).filter(([, value]) => typeof value === "object")
const steps = Object.keys(ramps[0][1])

function oklch(css) {
  const [l, c, h] = css.match(/oklch\(([\d.]+)% ([\d.]+) ([\d.]+|none)\)/).slice(1)
  return { colorSpace: "oklch", components: [Number(l) / 100, Number(c), h === "none" ? 0 : Number(h)] }
}

const alias = (ramp) =>
  Object.fromEntries(steps.map((step) => [step, { $value: `{color.${ramp}.${step}}` }]))

function write(path, color) {
  const url = new URL(path, outDir)
  mkdirSync(new URL("./", url), { recursive: true })
  const doc = { $description: "Generated from tokens/palette.mjs. Do not edit.", color: { $type: "color", ...color } }
  writeFileSync(url, JSON.stringify(doc, null, 2) + "\n")
}

const palette = Object.fromEntries(
  ramps.map(([name, ramp]) => [
    name,
    Object.fromEntries(Object.entries(ramp).map(([step, css]) => [step, { $value: oklch(css) }])),
  ])
)

write("palette.tokens.json", { ...palette, base: alias(base) })

for (const [theme, ramp] of Object.entries(themes)) {
  write(`themes/${theme}.tokens.json`, { base: alias(ramp) })
}
