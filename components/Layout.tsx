/** @jsx jsx */
import { initGA, logPageView } from "@/utils/analytics"
import formatDate from "@/utils/formatDate"
import widont from "@/utils/widont"
import { css, Global, jsx } from "@emotion/core"
import dynamic from "next/dynamic"
import { ReactElement, useEffect } from "react"
import siteConfig from "../siteconfig.json"
import { Atoms, H1, P } from "./designSystem"
import DesignSystemProvider from "./designSystem/DesignSystemProvider"
import Footer from "./Footer"
import Header from "./Header"
import Metatags from "./Metatags"
import Wrapper from "./Wrapper"

const Content = ({ frontMatter, children }): ReactElement => {
  const site = siteConfig
  const title = frontMatter?.title || site.title
  const isRoot = title == site.title
  const date = frontMatter?.date
  const formattedDate = formatDate(date)

  const SkipLink = dynamic(() => import("components/SkipLink"))

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  })

  return (
    <>
      <Metatags
        title={title}
        description={site.description}
        thumbnail={`https://${
          process.env.VERCEL_URL
        }/api/og?title=${encodeURIComponent(String(title))}`}
      />
      <SkipLink />
      <Header siteTitle={site.title} />
      <Wrapper>
        {!isRoot && (
          <header
            css={css`
              padding-bottom: ${Atoms.spacing.medium};
              margin-bottom: ${Atoms.spacing.medium};
            `}
          >
            <H1
              css={css`
                margin-bottom: 0;
                padding-bottom: 0;
              `}
            >
              {widont(title)}
            </H1>
            {date && (
              <P>
                <time
                  css={css`
                    color: var(--meta-color);
                    font-size: ${Atoms.font.size.small};
                  `}
                >
                  Published {formattedDate}
                </time>
              </P>
            )}
          </header>
        )}
        {children}
      </Wrapper>
      <Footer />
    </>
  )
}

export default function Layout({
  children,
  frontMatter,
}): ReactElement<typeof DesignSystemProvider> {
  return (
    <DesignSystemProvider>
      <Global
        styles={{
          ":root": {
            colorScheme: "light dark",
            "--site-color": Atoms.colors.siteLight,
            "--text-color": Atoms.colors.text,
            "--meta-color": Atoms.colors.blackAlpha,
            "--wash-color": Atoms.colors.wash,
            "--mark-color": Atoms.colors.mark,
            "--highlight-color": Atoms.colors.highlight,
            "--font-mono": Atoms.font.family.mono,

            "@media (prefers-color-scheme: dark)": {
              "--site-color": Atoms.colors.siteDark,
              "--text-color": Atoms.colors.wash,
              "--meta-color": Atoms.colors.whiteAlpha,
              "--wash-color": Atoms.colors.text,
            },
          },

          "*": {
            boxSizing: "border-box",
            margin: 0,
            padding: 0,
          },

          video: {
            display: "block",
            marginBottom: Atoms.spacing.medium,
            maxWidth: "100%",
          },

          html: {
            backgroundColor: "var(--wash-color)",
            color: "var(--text-color)",
            flex: 1,
            fontFamily: Atoms.font.family.sans,
            fontSize: "clamp(100%, 2.5vw, 125%)",
            lineHeight: Atoms.baseline,
            paddingLeft: Atoms.spacing.medium,
            paddingRight: Atoms.spacing.medium,
          },

          "ul, ol": {
            marginBottom: Atoms.spacing.medium,
            paddingLeft: Atoms.spacing.medium,
          },

          ".footnotes ol": {
            paddingLeft: 0,
          },

          ".footnotes li": {
            marginBottom: Atoms.spacing.xsmall,
            fontSize: Atoms.font.size.small,
            color: `var(--meta-color, ${Atoms.colors.meta})`,
            letterSpacing: "0.025em",
          },

          ".footnote-ref": {
            fontVariantNumeric: "tabular-nums",
          },

          ".footnote-backref": {
            marginLeft: "0.25em",
          },
        }}
      />

      <Content frontMatter={frontMatter}>{children}</Content>
    </DesignSystemProvider>
  )
}
