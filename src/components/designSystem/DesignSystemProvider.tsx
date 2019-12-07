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

const DesignSystemProvider = ({
  children,
}: DesignSystemProviderProps): ReactElement<typeof MDXProvider> => (
  <MDXProvider components={{ ...components }}>{children}</MDXProvider>
)

export default DesignSystemProvider
