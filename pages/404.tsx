import Layout from "@/components/Layout"
import Link from "next/link"

export default function FourOhFourPage() {
  return (
    <Layout frontMatter={{ title: "404 Page Not Found" }}>
      <style global jsx>
        {`
          :root {
            --wash-color: var(--highlight-color) !important;
            --text-color: var(--text-color) !important;
          }
        `}
      </style>

      <p>
        The page you tried to access cannot be found. Maybe try going{" "}
        <Link href="/">home</Link> or read something from{" "}
        <Link href="/blog">the blog</Link>.
      </p>
    </Layout>
  )
}
