import { MDXPost } from "*.mdx"
import Layout from "@/components/Layout"
import { ReactNode } from "react"

const DefaultLayout = (frontMatter: MDXPost) => {
  const PageLayout = ({ children }: { children: ReactNode }) => {
    return <Layout frontMatter={frontMatter}>{children}</Layout>
  }

  return PageLayout
}

export default DefaultLayout
