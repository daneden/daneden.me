import { Canvas } from "@/components/Canvas"
import HomeContent from "@/components/HomeContent"
import Layout from "@/components/Layout"
import Link from "next/link"

export default function HomePage() {
  return (
    <Layout>
      <HomeContent>
        <p>
          Daniel Eden is a Design Manager at{" "}
          <Link href="https://facebook.com/business">Facebook</Link> in London,
          supporting Facebook’s Commerce organisation. He spends his time{" "}
          <Link href="/blog">writing</Link>, thinking,{" "}
          <Link href="https://twitter.com/_dte">tweeting</Link>, and talking
          about Design Systems: how they scale, how they break, and the
          people&nbsp;that maintain&nbsp;them.
        </p>
      </HomeContent>
    </Layout>
  )
}
