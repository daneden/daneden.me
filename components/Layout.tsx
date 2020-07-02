import formatDate from "@/utils/formatDate"
import widont from "@/utils/widont"
import cxs from "cxs/component"
import { ReactElement } from "react"
import siteConfig from "../siteconfig.json"
import { Atoms, H1, P, Small } from "./designSystem"
import DesignSystemProvider from "./designSystem/DesignSystemProvider"
import Footer from "./Footer"
import Header from "./Header"
import Metatags from "./Metatags"
import SkipLink from "./SkipLink"
import Wrapper from "./Wrapper"

const PageHeader = cxs("header")({
  marginBottom: Atoms.spacing.medium,
  paddingBottom: Atoms.spacing.medium,
})

const PageHeading = cxs(H1)({
  marginBottom: "0 !important",
  paddingBottom: "0 !important",
})

const Content = ({ frontMatter, children }): ReactElement => {
  const site = siteConfig
  const title = frontMatter?.title || site.title
  const isRoot = title == site.title
  const date = frontMatter?.date
  const formattedDate = formatDate(date)
  const excerpt = frontMatter?.excerpt

  return (
    <>
      <Metatags
        title={title}
        description={excerpt || site.description}
        thumbnail={`https://${
          process.env.VERCEL_URL
        }/api/og?title=${encodeURIComponent(String(title))}`}
      />
      <SkipLink />
      <Header siteTitle={site.title} />
      <Wrapper>
        {!isRoot && (
          <PageHeader>
            <PageHeading>{widont(title)}</PageHeading>
            {date && (
              <P>
                <time>
                  <Small>Published {formattedDate}</Small>
                </time>
              </P>
            )}
          </PageHeader>
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
      <Content frontMatter={frontMatter}>{children}</Content>
      <style jsx global>
        {`
          :root {
            color-scheme: light dark;
            --site-color: ${Atoms.colors.siteLight};
            --text-color: ${Atoms.colors.text};
            --meta-color: ${Atoms.colors.blackAlpha};
            --wash-color: ${Atoms.colors.wash};
            --mark-color: ${Atoms.colors.mark};
            --highlight-color: ${Atoms.colors.highlight};
            --font-mono: ${Atoms.font.family.mono};
            --hover-color: var(--site-color);
          }

          @media (prefers-color-scheme: dark) {
            :root {
              --site-color: ${Atoms.colors.siteDark};
              --text-color: ${Atoms.colors.wash};
              --meta-color: ${Atoms.colors.whiteAlpha};
              --wash-color: ${Atoms.colors.text};
            }
          }

          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          video {
            display: block;
            margin-bottom: ${Atoms.spacing.medium};
            max-width: 100%;
          }

          html {
            background-color: var(--wash-color);
            color: var(--text-color);
            flex: 1;
            font-family: ${Atoms.font.family.sans};
            font-size: clamp(100%, 2.5vw, 125%);
            line-height: ${Atoms.baseline};
            padding-left: ${Atoms.spacing.medium};
            padding-right: ${Atoms.spacing.medium};
          }

          ul,
          ol {
            margin-bottom: ${Atoms.spacing.medium};
            padding-left: ${Atoms.spacing.medium};
          }

          a {
            color: inherit;
            text-decoration-line: underline;
            text-decoration-color: var(--hover-color) !important;
          }

          a:hover,
          a:focus {
            color: var(--hover-color);
          }

          .footnotes ol {
            padding-left: 0;
          }

          .footnotes li {
            marginbottom: ${Atoms.spacing.xsmall};
            font-size: ${Atoms.font.size.small};
            color: var(--meta-color, ${Atoms.colors.meta});
            letter-spacing: "0.025em";
          }

          .footnote-ref {
            font-variant-numeric: tabular-nums;
          }

          .footnote-backref {
            margin-left: 0.25em;
          }
        `}
      </style>
    </DesignSystemProvider>
  )
}
