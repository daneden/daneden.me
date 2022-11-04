/* eslint-disable prefer-const */
import Breakout from "@/components/Breakout"
import Timeline from "@/components/Timeline"
import Image from "next/image"
import Link from "next/link"
import "./styles/home.css"
export default function HomePage() {
  return (
    <Breakout>
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
          <Image
            src="/images/solstice.png"
            width={361}
            height={734}
            alt="An iPhone displaying the Solstice app in dark mode"
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
          <Image
            src="/images/zeitgeist.png"
            width={368}
            height={749}
            alt="An iPhone displaying the Zeitgeist app"
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
    </Breakout>
  )
}
