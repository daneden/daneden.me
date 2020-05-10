import "react"
declare module "react-imgix"
declare module "react-script-tag"

declare module "*.svg"
declare module "*.png"

declare module "react" {
  interface Attributes {
    css?: CSSProp
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      stream: StreamElement
    }
  }
}
