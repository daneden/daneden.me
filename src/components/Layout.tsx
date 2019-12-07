import { Global } from '@emotion/core'
import React, { ReactElement, ReactNode } from 'react'
import Helmet from 'react-helmet'
import favicon from '../../static/images/favicon.png'
import '../fonts/fonts.css'
import useLayoutQuery from '../hooks/useLayoutQuery'
import { Atoms, H1 } from './designSystem/designSystem'
import DesignSystemProvider from './designSystem/DesignSystemProvider'
import Footer from './Footer'
import Header from './Header'
import LocationContext from './LocationContext'
import Metatags from './Metatags'
import Wrapper from './Wrapper'

interface LayoutProps {
  children: ReactNode
  location: {
    pathname: string
  }
  /* TODO: Remove eslint-disable (issue #137) */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any
}

export default function Layout({
  children,
  location,
  ...props
}: LayoutProps): ReactElement<typeof DesignSystemProvider> {
  const { site } = useLayoutQuery()
  const title =
    props.pageContext.frontmatter !== undefined
      ? props.pageContext.frontmatter.title
      : null

  return (
    <DesignSystemProvider>
      <Global
        styles={{
          ':root': {
            colorScheme: 'light dark',
            '--text-color': Atoms.colors.text,
            '--meta-color': Atoms.colors.blackAlpha,
            '--wash-color': Atoms.colors.wash,
            '--mark-color': Atoms.colors.mark,
            '--highlight-color': Atoms.colors.highlight,
            '--font-mono': Atoms.font.family.mono,

            '@media (prefers-color-scheme: dark)': {
              '--text-color': Atoms.colors.wash,
              '--meta-color': Atoms.colors.whiteAlpha,
              '--wash-color': Atoms.colors.text,
            },
          },

          '*': {
            boxSizing: 'border-box',
            margin: 0,
            padding: 0,
          },

          video: {
            display: 'block',
            marginBottom: Atoms.spacing.medium,
            maxWidth: '100%',
          },

          html: {
            backgroundColor: 'var(--wash-color)',
            color: 'var(--text-color)',
            flex: 1,
            fontFamily: Atoms.font.family.sans,
            fontSize: '125%',
            lineHeight: Atoms.baseline,
            paddingLeft: Atoms.spacing.medium,
            paddingRight: Atoms.spacing.medium,

            [`@media (max-width: ${Atoms.breakpoints.medium})`]: {
              fontSize: '100%',
            },
          },

          'ul, ol': {
            marginBottom: Atoms.spacing.medium,
            paddingLeft: Atoms.spacing.medium,
          },

          '.footnotes ol': {
            paddingLeft: 0,
          },

          '.footnotes li': {
            marginBottom: Atoms.spacing.xsmall,
            fontSize: Atoms.font.size.small,
            color: `var(--meta-color, ${Atoms.colors.meta})`,
            letterSpacing: '0.025em',
          },

          '.footnote-ref': {
            fontVariantNumeric: 'tabular-nums',
          },

          '.footnote-backref': {
            marginLeft: '0.25em',
          },

          '#gatsby-noscript': {
            display: 'none',
          },
        }}
      />
      <LocationContext.Provider value={location.pathname}>
        <Helmet>
          <link rel="icon" href={favicon} />
        </Helmet>
        <Metatags
          defaultTitle={site.siteMetadata.title}
          title={title !== null ? title : site.siteMetadata.title}
          description={site.siteMetadata.description}
          thumbnail={`${site.siteMetadata.siteUrl}/images/og.png`}
        />
        <Header siteTitle={site.siteMetadata.title} />
        <Wrapper>
          {title && <H1>{title}</H1>}
          {children}
        </Wrapper>
        <Footer author={site.siteMetadata.authorName} />
      </LocationContext.Provider>
    </DesignSystemProvider>
  )
}
