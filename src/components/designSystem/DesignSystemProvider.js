import React from "react"
import { MDXProvider } from "@mdx-js/tag"

import * as designSystem from "./designSystem"

const components = {
  a: designSystem.Link,
  blockquote: designSystem.Blockquote,
  inlineCode: designSystem.Code,
  h1: designSystem.H1,
  h2: designSystem.H2,
  h3: designSystem.H3,
  hr: designSystem.Hr,
  p: designSystem.P,
  pre: designSystem.Pre,
  table: designSystem.Table,
}

const DesignSystemProvider = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
)

export default DesignSystemProvider
