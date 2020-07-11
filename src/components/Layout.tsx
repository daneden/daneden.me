import { MDXPost } from "*.mdx"
import formatDate from "@/utils/formatDate"
import { useWebP } from "@/utils/useWebP"
import widont from "@/utils/widont"
import cxs from "cxs/component"
import { ReactNode } from "react"
import siteConfig from "../data/siteconfig.json"
import { Atoms, H1, P, Small } from "./designSystem"
import DesignSystemProvider from "./designSystem/DesignSystemProvider"
import Footer from "./Footer"
import GlobalStyles from "./GlobalStyles"
import Header from "./Header"
import Metatags from "./Metatags"
import SkipLink from "./SkipLink"
import WebPSupportContext from "./WebPSupportContext"
import Wrapper from "./Wrapper"

type LayoutProps = {
  frontMatter?: MDXPost
  children: ReactNode
}

const PageHeader = cxs("header")({
  marginBottom: Atoms.spacing.medium,
  paddingBottom: Atoms.spacing.medium,
})

const PageHeading = cxs(H1)({
  marginBottom: "0 !important",
  paddingBottom: "0 !important",
})

const Content = ({ frontMatter, children }: LayoutProps) => {
  const site = siteConfig
  const title = frontMatter?.title || site.title
  const isRoot = title == site.title
  const date = frontMatter?.date
  const formattedDate = formatDate(date || "")
  const excerpt = frontMatter?.excerpt
  const webPSupport = useWebP(true)
  const ogSlug = frontMatter?.ogSlug

  return (
    <WebPSupportContext.Provider value={webPSupport}>
      <Metatags
        description={excerpt || site.description}
        thumbnail={
          ogSlug
            ? `https://${process.env.VERCEL_URL}/og/${ogSlug}`
            : `https://${process.env.VERCEL_URL}/images/og.png`
        }
        title={title}
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
    </WebPSupportContext.Provider>
  )
}

export default function Layout({ children, frontMatter }: LayoutProps) {
  return (
    <DesignSystemProvider>
      <Content frontMatter={frontMatter}>{children}</Content>
      <GlobalStyles />
    </DesignSystemProvider>
  )
}
