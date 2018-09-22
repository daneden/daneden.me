import React from "react"
import { MDXProvider } from "@mdx-js/tag"

import * as designSystem from "./designSystem"

const DesignSystemProvider = ({ children, isFrontPage }) => (
  <MDXProvider
    components={{
      a: designSystem.Link,
      blockquote: designSystem.Blockquote,
      h1: designSystem.H1,
      h2: designSystem.H2,
      h3: designSystem.H3,
      p: !isFrontPage ? designSystem.P : null,
    }}
  >
    {children}
  </MDXProvider>
)

export default DesignSystemProvider
