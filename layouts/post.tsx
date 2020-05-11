import Layout from "components/Layout"
import { ReactElement } from "react"
export default function PostLayout(frontMatter) {
  return ({ children }): ReactElement<typeof Layout> => {
    const slug = frontMatter.__resourcePath
      .replace("blog/", "")
      .replace(".mdx", "")

    return <Layout frontMatter={frontMatter}>{children}</Layout>
  }
}
