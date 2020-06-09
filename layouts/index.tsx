import Layout from "components/Layout"
import { ReactElement } from "react"
export default function DefaultLayout(frontMatter) {
  return ({ children }): ReactElement<typeof Layout> => {
    return <Layout frontMatter={frontMatter}>{children}</Layout>
  }
}
