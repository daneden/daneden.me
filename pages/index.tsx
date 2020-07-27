import { Canvas } from "@/components/Canvas"
import HomeContent from "@/components/HomeContent"
import Layout from "@/components/Layout"
import { Link, P } from "@/designSystem"
import { ReactElement } from "react"

export default function HomePage(): ReactElement<typeof Layout> {
  return (
    <Layout>
      <Canvas />
      <HomeContent>
        <P>
          Daniel Eden is a Design Manager at{" "}
          <Link href="https://facebook.com/business">Facebook</Link> in London,
          working on Facebook’s Commerce Products. He spends his time{" "}
          <Link href="/blog">writing</Link>, thinking,{" "}
          <Link href="https://twitter.com/_dte">tweeting</Link>, and talking
          about Design Systems: how they scale, how they break, and the people
          that maintain them.
        </P>
      </HomeContent>
    </Layout>
  )
}
