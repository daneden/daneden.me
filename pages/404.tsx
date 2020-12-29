import Layout from "@/components/Layout"
import Atoms from "@/components/designSystem/atoms"
import Link from "@/components/Link"

export default function FourOhFourPage() {
  return (
    <Layout frontMatter={{ title: "404 Page Not Found" }}>
      <style global jsx>
        {`
          :root {
            --wash-color: ${Atoms.colors.highlight} !important;
            --text-color: ${Atoms.colors.text} !important;
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
