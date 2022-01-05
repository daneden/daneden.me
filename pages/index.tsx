/* eslint-disable prefer-const */
import Breakout from "@/components/Breakout"
import Layout from "@/components/Layout"
import Timeline from "@/components/Timeline"
import { execSync } from "child_process"
import { colord, extend } from "colord"
import lchPlugin from "colord/plugins/lch"
import Link from "next/link"

extend([lchPlugin])

export default function HomePage({ commitSha }: { commitSha: string }) {
  // Set the foreground and background to be equal to begin with
  const bgHex = commitSha.slice(0, 6)
  const bg = colord(`#${bgHex}`).toLch()

  const fg = {
    ...bg,
    l: (bg.l + 50) % 100,
    h: (bg.h - 180) % 360,
  }

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
      <p className="small">
        This page’s colour scheme is based on the website’s most recent commit,{" "}
        <code>
          <Link
            href={`https://github.com/daneden/daneden.me/commit/${commitSha}`}
          >
            {commitSha.slice(0, 7)}
          </Link>
        </code>
        .
      </p>
      <style jsx>{`
        .intro {
          font-size: clamp(1.5rem, 8vmin, 3.5rem);
          line-height: 1.2;
          font-style: normal;
          font-family: var(--font-sans);
          letter-spacing: -0.025em;
        }

        .intro :global(a) {
          --padding-size: 0.05em;
          font-family: var(--font-serif);
          font-style: italic;
        }
      `}</style>
      <style jsx global>{`
        html {
          --wash-color: lch(${bg.l}% ${bg.c} ${bg.h}) !important;
          --text-color: lch(${fg.l}% ${fg.c} ${fg.h}) !important;
          --meta-color: lch(
            ${fg.l + (fg.l > bg.l ? 10 : -10)}% ${fg.c} ${fg.h}
          ) !important;
          --site-color: lch(
            ${(bg.l + 50) % 100}% ${(bg.c + 30) % 100} ${bg.h}
          ) !important;
          --code-wash: lch(${(bg.l + 10) % 100}% ${bg.c} ${bg.h}) !important;
          --code-color: var(--text-color) !important;
        }
      `}</style>
    </Layout>
  )
}

export async function getStaticProps() {
  const commitSha = execSync("git rev-parse HEAD").toString().trim()

  return {
    props: {
      commitSha,
    },
  }
}
