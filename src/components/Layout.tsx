import { MDXFrontMatter } from "*.mdx"
import formatDate from "@/utils/formatDate"
import widont from "@/utils/widont"
import { ReactNode, useEffect } from "react"
import siteConfig from "../data/siteconfig.json"
import Footer from "./Footer"
import GlobalStyles from "./GlobalStyles"
import Header from "./Header"
import Metatags from "./Metatags"
import SkipLink from "./SkipLink"
import Wrapper from "./Wrapper"

type LayoutProps = {
  frontMatter?: MDXFrontMatter
  children: ReactNode
}

const utils = {
  qsa: (selector: keyof HTMLElementTagNameMap) =>
    Array.from(document.querySelectorAll(selector)),
  solveFor: (el: HTMLElement, currentTop: number, parentTop: number) => {
    const previousEl = el.previousElementSibling as HTMLElement
    const previousElTop = parseInt(previousEl.style.top, 10)
    const previousElBottom =
      previousEl.getBoundingClientRect().bottom - parentTop

    // Check for overlaps
    if (currentTop === previousElTop) {
      const newTop = currentTop + previousEl.getBoundingClientRect().height
      return newTop
    } else if (currentTop < previousElBottom) {
      const newTop = previousElBottom
      return newTop
    } else {
      return currentTop
    }
  },
}

function calculateFootnotesPos() {
  utils.qsa("sup").forEach((el: HTMLElement) => {
    const elementId = el.getAttribute("id")
    const id = (elementId ?? "").replace("fnref-", "")
    const parent = document.querySelector(".footnotes")

    if (parent === null) {
      return
    }

    let top = Math.round(
      el.getBoundingClientRect().top - parent.getBoundingClientRect().top
    )
    const note = document.querySelector(`#fn-${id}`) as HTMLElement

    if (note === null) {
      return
    }

    if (note.previousElementSibling) {
      top = utils.solveFor(note, top, parent.getBoundingClientRect().top)
    }

    note.style.top = `${top}px`
    note.style.opacity = "1"
  })
}

const Content = ({ frontMatter, children }: LayoutProps) => {
  const site = siteConfig
  const title = frontMatter?.title || site.title
  const isRoot = title === site.title
  const date = frontMatter?.date
  const formattedDate = formatDate(date || "")
  const excerpt = frontMatter?.excerpt
  const ogSlug = frontMatter?.ogSlug

  useEffect(() => {
    calculateFootnotesPos()
  }, [])

  return (
    <>
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
          <header>
            <h1>{widont(title)}</h1>
            {date && <time className="small">Published {formattedDate}</time>}
          </header>
        )}
        {children}
      </Wrapper>
      <Footer />

      <style jsx>{`
        header {
          margin-bottom: var(--sp-l);
          padding-bottom: var(--sp-xl);
        }

        header > :global(h1) {
          margin-bottom: 0 !important;
          padding-bottom: 0 !important;
        }
      `}</style>
    </>
  )
}

export default function Layout({ children, frontMatter }: LayoutProps) {
  return (
    <>
      <Content frontMatter={frontMatter}>{children}</Content>
      <GlobalStyles />
    </>
  )
}
