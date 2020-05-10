import { ReactElement } from "react"
import Layout from "../components/Layout"
export default function DefaultLayout(frontMatter) {
  return ({ children }): ReactElement<typeof Layout> => {
    const slug = frontMatter.__resourcePath
      .replace("blog/", "")
      .replace(".mdx", "")

    return <Layout frontMatter={frontMatter}>{children}</Layout>
  }
}
