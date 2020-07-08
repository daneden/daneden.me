import { MDXProvider } from "@mdx-js/react"
import React, { ReactElement, ReactNode } from "react"
import * as designSystem from "."
import Image from "../Image"

interface DesignSystemProviderProps {
  children: ReactNode
}

const components = {
  a: designSystem.Link,
  blockquote: designSystem.Blockquote,
  Code: designSystem.Code,
  h1: designSystem.H1,
  h2: designSystem.H2,
  h3: designSystem.H3,
  hr: designSystem.Hr,
  Image,
  inlineCode: designSystem.Code,
  Link: designSystem.Link,
  mark: designSystem.Mark,
  Note: designSystem.Note,
  p: designSystem.P,
  pre: designSystem.Pre,
  table: designSystem.Table,
}

/**
 * DesignSystemProvider is the wrapper that provides MDX shortcodes for blog
 * posts and is used by Next.js in both client and server renders.
 */
const DesignSystemProvider = ({
  children,
}: DesignSystemProviderProps): ReactElement<typeof MDXProvider> => (
  <MDXProvider components={{ ...components }}>{children}</MDXProvider>
)

export default DesignSystemProvider
