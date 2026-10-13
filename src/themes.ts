import resolver from "../tokens/site.resolver.json"

/** Theme names, read from the token resolver so they can't drift. */
export const themes = Object.keys(resolver.modifiers.theme.contexts) as [
  string,
  ...string[],
]

export const schemes = ["light", "dark"] as const

export type Theme = (typeof themes)[number]
export type Scheme = (typeof schemes)[number]
