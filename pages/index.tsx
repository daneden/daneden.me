import Canvas from "@/components/Canvas"
import HomeContent from "@/components/HomeContent"
import Layout from "@/components/Layout"
import { Atoms, Link, P } from "@/designSystem"
import { ReactElement } from "react"

export default function HomePage(): ReactElement<typeof Layout> {
  return (
    <Layout>
      <style global jsx>
        {`
          html {
            --site-color: ${Atoms.colors.siteDark} !important;
            --text-color: ${Atoms.colors.wash} !important;
            --wash-color: ${Atoms.colors.text} !important;
            --meta-color: ${Atoms.colors.whiteAlpha} !important;
            text-shadow: 0 2px 1.5rem rgba(0, 0, 0, 0.05) !important;
          }
        `}
      </style>
      <Canvas />
      <HomeContent>
        <P>
          Daniel Eden is a Product Design Manager at{" "}
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
