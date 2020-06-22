import { MDXPost } from "*.mdx"
import Layout from "components/Layout"
import { ReactElement } from "react"
export default function DefaultLayout(frontMatter: MDXPost) {
  return ({ children }): ReactElement => {
    return <Layout frontMatter={frontMatter}>{children}</Layout>
  }
}
