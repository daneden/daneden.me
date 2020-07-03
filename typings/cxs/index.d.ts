import * as CSS from "csstype"

export type CSSProperties = CSS.Properties<string | number>
export type CSSPseudos = { [K in CSS.Pseudos]?: CSSObject }

export interface CSSObject extends CSSProperties, CSSPseudos {
  [key: string]: CSSObject | string | number | undefined
}

export type CSSKeyframes = object & { [key: string]: CSSObject }

declare module "cxs" {
  const cxs: {
    (styles: CSSObject): string
    /** Returns cached CSS as a string for server-side rendering */
    css: () => string
    /** Resets the CSS cache for future renders */
    reset: () => void
    /** Sets a custom className prefix */
    prefix: (val: string) => void
  }
  export default cxs
}
