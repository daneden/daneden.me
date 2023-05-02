/* eslint-disable prefer-const */
import Breakout from "@/app/components/Breakout"
import LightswitchImage from "@/app/components/LightSwitchImage"
import Timeline from "@/app/components/Timeline"
import Image from "next/image"
import Link from "next/link"
import styles from "./home.module.css"
import wwcg from "./wwcg.jpg"

export default function HomePage() {
  return (
    <Breakout padding={false}>
      <div className={styles.root}>
        <div className={`${styles.intro} ${styles.spanall}`}>
          <p className={styles.xxl}>
            Daniel Eden is a Product Designer at{" "}
            <Link href="https://meta.com/">Meta</Link> in London, working on
            making Customer Support experiences that are more equitable, human,
            and helpful. He spends his time <Link href="/blog">writing</Link>,
            thinking, <Link href="https://twitter.com/_dte">tweeting</Link>, and
            talking about Design Systems: how they scale, how they break, and
            the people&nbsp;that maintain&nbsp;them.
          </p>
        </div>
        <Link
          className={`${styles.tile} ${styles.solstice}`}
          href="https://solstice.daneden.me"
        >
          <h2 className={styles.xxl}>Solstice</h2>
          <p>An iOS app about daylight</p>
          <LightswitchImage
            alt="The Solstice app, showing sunrise and sunset information for Hackney, London"
            height={2716}
            srcDark="/uploads/portfolio/solstice-dark.png"
            srcLight="/uploads/portfolio/solstice-light.png"
            width={1339}
          />
        </Link>
        <div className={`${styles.tile} ${styles.whereWeCanGo}`}>
          <h2 className={styles.xxl}>Where We Can Go</h2>
          <p>
            A <Link href="">conference talk</Link> and{" "}
            <Link href="/blog/2019/where-we-can-go">essay</Link> about design
            systems and design tools.
          </p>
          <div className="align-bottom">
            <Image
              src={wwcg}
              alt="Daniel Eden presenting “Where We Can Go” at Clarity Conference 2019"
            />
          </div>
        </div>
        <Link
          className={`${styles.tile} ${styles.zeitgeist}`}
          href="https://zeitgeist.daneden.me"
        >
          <h2 className={styles.xxl}>Zeitgeist</h2>
          <p>Monitor your Vercel deployments</p>
          <LightswitchImage
            alt="The Zeitgeist app, showing deployment details for a successful build"
            height={2716}
            srcDark="/uploads/portfolio/zeitgeist-dark.png"
            srcLight="/uploads/portfolio/zeitgeist-light.png"
            width={1339}
          />
        </Link>
        <div className={`${styles.xxl} ${styles.tile} ${styles.extras}`}>
          <Link href="/blog">Writing &rarr;</Link>
          <Link href="/portfolio">Projects &rarr;</Link>
          <Link href="/playlist">Playlist &rarr;</Link>
        </div>
        <div className={styles.spanall}>
          <Timeline />
        </div>
      </div>
    </Breakout>
  )
}
