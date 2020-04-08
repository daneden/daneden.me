import { MDXProvider } from '@mdx-js/react'
import React, { ReactElement, ReactNode } from 'react'
import Image from '../Image'
import * as designSystem from './designSystem'

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
 * posts and is used by Gatsby in both client and server renders.
 */
const DesignSystemProvider = ({
  children,
}: DesignSystemProviderProps): ReactElement<typeof MDXProvider> => (
  <MDXProvider components={{ ...components }}>{children}</MDXProvider>
)

/**
 * wrapRootElement is used only by SSR and is required to ensure that
 * non-hydrated outputs (such as RSS) are able to render MDX shortcodes.
 *
 * For more information, see Gatsby's documentation on the wrapRootElement
 * function: https://www.gatsbyjs.org/docs/browser-apis/#wrapRootElement
 */
export function wrapRootElement({
  element,
}: {
  element: ReactNode
}): ReactElement<typeof DesignSystemProvider> {
  return <DesignSystemProvider>{element}</DesignSystemProvider>
}

export default DesignSystemProvider
