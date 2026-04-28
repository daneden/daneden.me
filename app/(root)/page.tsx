/* eslint-disable prefer-const */
import Timeline from "@/app/components/Timeline"
import Link from "next/link"
import PortfolioCarousel from "../components/PortfolioCarousel"
import styles from "./home.module.css"

export default function HomePage() {
  return (
    <>
      <div className={styles.root}>
        <div className={`${styles.intro} ${styles.spanall}`}>
          <p className={styles.xxl}>
            Daniel Eden is a Product Designer at{" "}
            <a href="https://figma.com">Figma</a>, designing and building for
            designers and builders. In his spare time, he ships small apps. He{" "}
            <Link href="/blog">writes about it</Link>: how they&rsquo;re
            designed, how they&rsquo;re built, and what he learns making them.
            He{" "}
            <a rel="me" href="https://threads.net/@_dte">
              posts about it
            </a>{" "}
            more.
          </p>
        </div>
        <PortfolioCarousel />
        <div className={styles.spanall}>
          <Timeline />
        </div>
      </div>
    </>
  )
}
