import { MDXPost } from "*.mdx"
import Layout from "@/components/Layout"
import { ReactNode } from "react"
export default function DefaultLayout(frontMatter: MDXPost) {
  return ({ children }: { children: ReactNode }) => {
    return <Layout frontMatter={frontMatter}>{children}</Layout>
  }
}
