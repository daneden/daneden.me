/* eslint-disable prefer-const */
import LightswitchImage from "@/app/components/LightSwitchImage"
import Timeline from "@/app/components/Timeline"
import Image from "next/image"
import Link from "next/link"
import styles from "./home.module.css"
import wwcg from "./wwcg.png"

export default function HomePage() {
  return (
    <>
      <div className={styles.root}>
        <div className={`${styles.intro} ${styles.spanall}`}>
          <p className={styles.xxl}>
            Daniel Eden is a Product Designer at{" "}
            <a href="https://about.meta.com/uk/realitylabs/">
              Meta Reality Labs
            </a>
            , working on Avatars & Identity, helping people express their full
            selves in the Metaverse. He spends his time{" "}
            <Link href="/blog">writing</Link>, thinking,{" "}
            <a rel="me" href="https://threads.net/@_dte">
              posting
            </a>
            , and talking about Design Systems: how they scale, how they break,
            and the people&nbsp;that maintain&nbsp;them.
          </p>
        </div>
        <Link className={`${styles.tile} ${styles.ora}`} href="/portfolio/ora">
          <h2 className={styles.xxl}>Ora</h2>
          <p>It’s about time</p>
          <Image
            alt="The Ora app, showing an interactive globe with different time zones highlighted"
            height={2716}
            src="/uploads/portfolio/ora.png"
            width={1339}
          />
        </Link>
        <div className={`${styles.tile} ${styles.whereWeCanGo}`}>
          <h2 className={styles.xxl}>Where We Can Go</h2>
          <p>
            A{" "}
            <a href="https://www.clarityconf.com/session/where-we-can-go">
              conference talk
            </a>{" "}
            and <Link href="/blog/2019/where-we-can-go">essay</Link> about
            design systems and design tools.
          </p>

          <Image
            src={wwcg}
            alt="Daniel Eden presenting “Where We Can Go” at Clarity Conference 2019"
            className={styles.wwcgImage}
          />
        </div>
        <Link
          className={`${styles.tile} ${styles.solstice}`}
          href="/portfolio/solstice"
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
        <div className={`${styles.xxl} ${styles.tile} ${styles.extras}`}>
          <Link href="/blog">Writing &rarr;</Link>
          <Link href="/portfolio">Projects &rarr;</Link>
          <Link href="/playlist">Playlist &rarr;</Link>
        </div>
        <div className={styles.spanall}>
          <Timeline />
        </div>
      </div>
    </>
  )
}
