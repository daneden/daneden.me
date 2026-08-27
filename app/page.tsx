/* eslint-disable prefer-const */
import Timeline from "@/app/components/Timeline"
import Link from "next/link"
import Breakout from "./components/Breakout"
import PortfolioCarousel from "./components/PortfolioCarousel"
import styles from "./home.module.css"

export default function HomePage() {
  return (
    <>
      <div className={styles.root}>
        <Breakout padding={false}>
          <p className={`${styles.intro} ${styles.xxl} ${styles.container}`}>
            Dan Eden is a Designer currently working at{" "}
            <a href="https://figma.com">Figma</a>, designing and building for
            designers and builders. In his spare time, he ships small apps. He{" "}
            <Link href="/blog">writes</Link>
            {" about it: "} how they&rsquo;re designed, how they&rsquo;re built,
            and what he learns making them. He{" "}
            <a rel="me" href="https://threads.net/@_dte">
              posts
            </a>{" "}
            about it more.
          </p>
          <PortfolioCarousel />
          <div className={styles.container}>
            <Timeline />
          </div>
        </Breakout>
      </div>
    </>
  )
}
