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
            Daniel Eden is a Product Designer at <a href="https://figma.com">Figma</a>, working on the future of how digital products are designed and built. He spends his time{" "}
            <Link href="/blog">writing</Link>, thinking,{" "}
            <a rel="me" href="https://threads.net/@_dte">
              posting
            </a>
            , and talking about Design Systems: how they scale, how they break,
            and the people&nbsp;that maintain&nbsp;them.
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
