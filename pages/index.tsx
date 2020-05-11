import { Link, P } from "@/designSystem"
import Layout from "components/Layout"
import Showcase from "components/Showcase"
import dynamic from "next/dynamic"
import { ReactElement } from "react"

export default function HomePage(): ReactElement<typeof Layout> {
  const HomeGrid = dynamic(() => import("components/HomeGrid"), {
    ssr: false,
  })
  return (
    <Layout frontMatter={{}}>
      <HomeGrid />

      <P>
        Daniel Eden is writing, thinking, and talking about Design Systems: how
        they break, how they scale, and the people that maintain them. He also
        prefers to talk about himself in the first person.
      </P>

      <Showcase />

      <P>
        I’m currently living in London, U.K. and working as a Design Lead for{" "}
        <Link href="https://facebook.com">Facebook</Link>. I help to create and
        maintain the Design System for Facebook’s Ads and Business products. Our
        team produces components, patterns, guidance, and tools to help hundreds
        of product teams build experiences for billions of people. Previously, I
        worked as a Designer and Engineer for{" "}
        <Link href="https://dropbox.com">Dropbox</Link>.
      </P>

      <P>
        I spend my time <Link href="https://twitter.com/_dte">Tweeting</Link>,
        taking <Link href="https://photos.daneden.me/">photographs</Link>,
        making <Link href="https://art.daneden.me/">art</Link> &{" "}
        <Link href="https://soundcloud.com/d4te">music</Link>, and{" "}
        <Link href="https://github.com/daneden">writing code</Link>. I also{" "}
        <Link href="/blog">write</Link> about design, courage, and lack thereof.
      </P>
    </Layout>
  )
}
