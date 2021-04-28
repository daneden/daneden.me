import Align from "@/components/Align"
import Layout from "@/components/Layout"
import Link from "next/link"
import Image from "@/components/Image"

export default function HomePage() {
  return (
    <Layout>
      <p>
        <Align.Right>
          <Image
            alt="Daniel Eden"
            height={200}
            src="2020/11/face.jpg"
            width={200}
          />
        </Align.Right>
        Daniel Eden is a Design Manager at{" "}
        <Link href="https://facebook.com/business">Facebook</Link> in London,
        supporting Facebook’s Commerce organisation. He spends his time{" "}
        <Link href="/blog">writing</Link>, thinking,{" "}
        <Link href="https://twitter.com/_dte">tweeting</Link>, and talking about
        Design Systems: how they scale, how they break, and the people&nbsp;that
        maintain&nbsp;them.
      </p>
    </Layout>
  )
}
