/* eslint-disable prefer-const */
import LightswitchImage from "@/components/LightSwitchImage"
import Timeline from "@/components/Timeline"
import defaultMetadata from "@/data/siteconfig"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = defaultMetadata

export default function HomePage() {
  return (
    <>
      <div className="root">
        <div className="intro spanall">
          <p className="xxl">
            Daniel Eden is a Product Designer at{" "}
            <Link href="https://meta.com/">Meta</Link> in London, working on
            making Customer Support experiences that are more equitable, human,
            and helpful. He spends his time <Link href="/blog">writing</Link>,
            thinking, <Link href="https://twitter.com/_dte">tweeting</Link>, and
            talking about Design Systems: how they scale, how they break, and
            the people&nbsp;that maintain&nbsp;them.
          </p>
        </div>
        <Link className="tile solstice" href="https://solstice.daneden.me">
          <h2 className="xxl">Solstice</h2>
          <p>An iOS app about daylight</p>
          <LightswitchImage
            alt="The Solstice app, showing sunrise and sunset information for Hackney, London"
            height={2716}
            srcDark="/uploads/portfolio/solstice-dark.png"
            srcLight="/uploads/portfolio/solstice-light.png"
            width={1339}
          />
        </Link>
        <div className="tile where-we-can-go">
          <h2 className="xxl">Where We Can Go</h2>
          <p>
            A <Link href="">conference talk</Link> and{" "}
            <Link href="/blog/2019/where-we-can-go">essay</Link> about design
            systems and design tools.
          </p>
          <div className="align-bottom">
            <Image
              src="/images/wwcg.jpg"
              width={686}
              height={386}
              alt="Daniel Eden presenting “Where We Can Go” at Clarity Conference 2019"
            />
          </div>
        </div>
        <Link className="tile zeitgeist" href="https://zeitgeist.daneden.me">
          <h2 className="xxl">Zeitgeist</h2>
          <p>Monitor your Vercel deployments</p>
          <LightswitchImage
            alt="The Zeitgeist app, showing deployment details for a successful build"
            height={2716}
            srcDark="/uploads/portfolio/zeitgeist-dark.png"
            srcLight="/uploads/portfolio/zeitgeist-light.png"
            width={1339}
          />
        </Link>
        <div className="tile extras xxl">
          <Link href="/blog">Writing &rarr;</Link>
          <Link href="/portfolio">Projects &rarr;</Link>
          <Link href="/playlist">Playlist &rarr;</Link>
        </div>
        <div className="spanall">
          <Timeline />
        </div>
      </div>
    </>
  )
}
