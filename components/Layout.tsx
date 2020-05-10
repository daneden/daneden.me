import { Global } from "@emotion/core"
import dynamic from "next/dynamic"
import siteConfig from "../siteconfig.json"
import { Atoms, H1 } from "./designSystem/designSystem"
import DesignSystemProvider from "./designSystem/DesignSystemProvider"
import Footer from "./Footer"
import Header from "./Header"
import Metatags from "./Metatags"
import Wrapper from "./Wrapper"

const Content = ({ frontMatter, children }) => {
  const title = frontMatter?.title || null
  const isPost = title !== null
  const site = siteConfig

  const SkipLink = dynamic(() => import("../components/SkipLink"))

  return (
    <>
      <Metatags
        defaultTitle={site.title}
        title={title || site.title}
        description={site.description}
        thumbnail={
          isPost
            ? `https://daneden-og-generator.daneden.now.sh/api?title=${encodeURIComponent(
                String(title)
              )}`
            : `${site.siteUrl}/images/og.png`
        }
      />
      <SkipLink />
      <Header siteTitle={site.title} />
      <Wrapper>
        {title && <H1>{title}</H1>}
        {children}
      </Wrapper>
      <Footer />
    </>
  )
}

export default function Layout({ children, frontMatter }) {
  return (
    <DesignSystemProvider>
      <Global
        styles={{
          ":root": {
            colorScheme: "light dark",
            "--text-color": Atoms.colors.text,
            "--meta-color": Atoms.colors.blackAlpha,
            "--wash-color": Atoms.colors.wash,
            "--mark-color": Atoms.colors.mark,
            "--highlight-color": Atoms.colors.highlight,
            "--font-mono": Atoms.font.family.mono,

            "@media (prefers-color-scheme: dark)": {
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
            fontSize: "125%",
            lineHeight: Atoms.baseline,
            paddingLeft: Atoms.spacing.medium,
            paddingRight: Atoms.spacing.medium,

            [`@media (max-width: ${Atoms.breakpoints.medium})`]: {
              fontSize: "100%",
            },
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

          "#gatsby-noscript": {
            display: "none",
          },
        }}
      />

      <Content frontMatter={frontMatter}>{children}</Content>
    </DesignSystemProvider>
  )
}
