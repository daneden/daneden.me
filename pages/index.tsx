/* eslint-disable prefer-const */
import Breakout from "@/components/Breakout"
import Layout from "@/components/Layout"
import Timeline from "@/components/Timeline"
import { APCAcontrast, colorParsley, sRGBtoY } from "apca-w3"
import { execSync } from "child_process"
import Link from "next/link"

interface Color {
  h: number
  s: number
  l: number
}

export default function HomePage({ commitSha }: { commitSha: string }) {
  // Set the foreground and background to be equal to begin with
  let fgHex = commitSha.slice(0, 6)
  let bgHex = commitSha.slice(0, 6)

  const mirroredSha = commitSha + commitSha.split("").reverse().join()

  // The foreground colour doesn’t change, so we can use its initial value for
  // this whole operation
  const fgArr = colorParsley(fgHex)

  // Set an initial contrast score, index, and stopping point
  let contrastScore = 0
  let index = 6
  const stoppingPoint = mirroredSha.length - 1

  // While the contrast score is too low and before we've traveresed the entire
  // commit SHA...
  while (contrastScore < 60 && index < stoppingPoint) {
    index++
    // Pick a new color from the commit SHA
    bgHex = mirroredSha.slice(index - 6, index)

    // Find out the contrast
    const bgArr = colorParsley(bgHex)
    contrastScore = APCAcontrast(sRGBtoY(fgArr), sRGBtoY(bgArr))
  }

  // If we ended up bailing out without finding a good pairing, we'll fall back
  // to typical colors
  const bailedOut = index >= stoppingPoint

  // Otherwise, we'll set our background and foreground colors!
  const bg = hexToHSL(bgHex) as Color
  const fg = hexToHSL(fgHex) as Color

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
          text-decoration-thickness: 0.05em;
        }
      `}</style>
      <style jsx global>{`
        html {
          ${!bailedOut &&
          `--wash-color: lch(${bg.l} ${bg.s}% ${bg.h}) !important;
          --text-color: lch(${fg.l} ${fg.s}% ${fg.h}) !important;
          --meta-color: lch(${fg.l + (fg.l > bg.l ? 20 : -20)} ${fg.s}% ${
            fg.h
          }) !important;
          --site-color:
            lch(${(bg.l + 50) % 100} ${(bg.s + 30) % 100}% ${bg.h})

          !important;
          --code-wash: lch(${(bg.l + 10) % 100} ${bg.s}% ${
            bg.h
          }) !important !important;
          --code-color: var(--text-color) !important;`}
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

function hexToHSL(hex: string): Color | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

  if (result == null || result.length < 4) {
    return null
  }

  let r = parseInt(result[1], 16)
  let g = parseInt(result[2], 16)
  let b = parseInt(result[3], 16)

  ;(r /= 255), (g /= 255), (b /= 255)
  let max = Math.max(r, g, b),
    min = Math.min(r, g, b)
  let h: number,
    s: number,
    l = (max + min) / 2

  if (max == min) {
    h = s = 0 // achromatic
  } else {
    let d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
      default:
        h = 0
    }
    h /= 6
  }

  h = Math.round(h * 360)

  // Prevent saturation and lightness from getting too high
  s = Math.round(s * 100)
  l = Math.round(l * 90)

  return {
    h,
    s,
    l,
  }
}
