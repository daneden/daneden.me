import { Atoms, Link, P } from "@/designSystem"
import { Global } from "@emotion/core"
import HomeContent from "components/HomeContent"
import Layout from "components/Layout"
import { ReactElement } from "react"

export default function HomePage(): ReactElement<typeof Layout> {
  return (
    <Layout frontMatter={{}}>
      <Global
        styles={{
          html: {
            "--text-color": `#FFC6D5 !important`,
            "--wash-color": `${Atoms.colors.text} !important`,
            "--meta-color": `${Atoms.colors.whiteAlpha} !important`,
          },
        }}
      />

      <HomeContent>
        <P>
          Daniel Eden is a Design Lead at{" "}
          <Link href="https://facebook.com/business">Facebook</Link> in London,
          working on design systems for{" "}
          <Link href="https://medium.com/facebook-design-business-tools">
            Ads and Business products
          </Link>
          . He spends his time <Link href="/blog">writing</Link>, thinking,{" "}
          <Link href="https://twitter.com/_dte">tweeting</Link>, and talking
          about Design Systems: how they scale, how they break, and the people
          that maintain them.
        </P>
      </HomeContent>
    </Layout>
  )
}
