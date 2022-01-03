import Breakout from "@/components/Breakout"
import Layout from "@/components/Layout"
import Timeline from "@/components/Timeline"
import Link from "next/link"

export default function HomePage() {
  return (
    <Layout>
      <Breakout>
        <p className="intro">
          Daniel Eden is a Product Designer at{" "}
          <Link href="https://meta.com/">Meta</Link> in London, working on
          making Customer Support experiences that are more equitable, human,
          and helpful. He spends his time <Link href="/blog">writing</Link>,
          thinking, <Link href="https://twitter.com/_dte">tweeting</Link>, and
          talking about Design Systems: how they scale, how they break, and the
          people&nbsp;that maintain&nbsp;them.
        </p>
        <Timeline />
      </Breakout>
      <style jsx>{`
        .intro {
          font-size: clamp(1.5rem, 12vmax, 3.5rem);
          line-height: 1.2;
          font-style: normal;
          font-family: var(--font-sans);
          letter-spacing: -0.025em;
        }

        .intro :global(a) {
          --padding-size: 0.05em;
          font-family: var(--font-serif);
          font-style: italic;
          text-decoration-thickness: 0.05em;
        }
      `}</style>
    </Layout>
  )
}
