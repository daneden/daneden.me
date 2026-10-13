import { defineConfig } from "@terrazzo/cli"
import css from "@terrazzo/plugin-css"
import { readFileSync } from "node:fs"
import lightDark from "./tokens/plugin-light-dark.mjs"

const resolver = JSON.parse(readFileSync("./tokens/site.resolver.json", "utf8"))
const schemes = Object.keys(resolver.modifiers.scheme.contexts)
const themes = Object.keys(resolver.modifiers.theme.contexts)

export default defineConfig({
  tokens: ["./tokens/site.resolver.json"],
  outDir: "./src/styles/",
  plugins: [
    // Transform every scheme × theme permutation; lightDark writes the file.
    css({
      skipBuild: true,
      permutations: schemes.flatMap((scheme) =>
        themes.map((theme) => ({ input: { scheme, theme }, prepare: (c) => c }))
      ),
    }),
    lightDark({ filename: "tokens.css", schemes, themes }),
  ],
})
