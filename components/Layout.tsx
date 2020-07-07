import { MDXPost } from "*.mdx"
import formatDate from "@/utils/formatDate"
import widont from "@/utils/widont"
import cxs from "cxs/component"
import { ReactNode, useEffect, useState } from "react"
import siteConfig from "../siteconfig.json"
import BrowserSupportContext, {
  BrowserSupportDict,
} from "./BrowserSupportContext"
import { Atoms, H1, P, Small } from "./designSystem"
import DesignSystemProvider from "./designSystem/DesignSystemProvider"
import Footer from "./Footer"
import GlobalStyles from "./GlobalStyles"
import Header from "./Header"
import Metatags from "./Metatags"
import SkipLink from "./SkipLink"
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
  const [support, setSupport] = useState<BrowserSupportDict>({ webp: false })

  useEffect(() => {
    if (typeof window !== "undefined") {
      const { Image } = window
      const webpImage = new Image()
      webpImage.onload = webpImage.onerror = () => {
        setSupport((s) => ({
          ...s,
          webp: webpImage.height === 2,
        }))
      }

      webpImage.src =
        "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
    }

    console.log(support)
  }, [support.webp])

  return (
    <BrowserSupportContext.Provider value={support}>
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
    </BrowserSupportContext.Provider>
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
