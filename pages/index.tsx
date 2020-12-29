import { Canvas } from "@/components/Canvas"
import HomeContent from "@/components/HomeContent"
import Layout from "@/components/Layout"
import Link from "@/components/Link"

export default function HomePage() {
  return (
    <Layout>
      <Canvas />
      <HomeContent>
        <p>
          Daniel Eden is a Design Manager at{" "}
          <Link href="https://facebook.com/business">Facebook</Link> in London,
          working on Facebook’s Commerce Products. He spends his time{" "}
          <Link href="/blog">writing</Link>, thinking,{" "}
          <Link href="https://twitter.com/_dte">tweeting</Link>, and talking
          about Design Systems: how they scale, how they break, and the
          people&nbsp;that maintain&nbsp;them.
        </p>
      </HomeContent>
    </Layout>
  )
}
