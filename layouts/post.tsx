import Layout from "../components/Layout"
export default function PostLayout(frontMatter) {
  return ({ children }) => {
    const slug = frontMatter.__resourcePath
      .replace("blog/", "")
      .replace(".mdx", "")

    return <Layout frontMatter={frontMatter}>{children}</Layout>
  }
}
