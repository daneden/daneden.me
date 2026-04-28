import cx from "@/app/utils/cx"
import Link from "next/link"
import { OnDeckHero, OraHero, SolsticeHero, ZeitgeistHero } from "../AppHero"
import ShapesAnimation from "../ShapesAnimation"
import styles from "./styles.module.css"

export default function PortfolioCarousel() {
  return (
    <section className={styles.root}>
      <div className={cx(styles.card, styles.highlight)}>
        <h2>Ora</h2>
        <p>An app about time for iPhone, iPad, and Apple Watch.</p>
        <OraHero />
        <Link className={cx(styles.button)} href="/portfolio/ora">
          Learn more &rarr;
        </Link>
      </div>
      <div className={cx(styles.card, styles.highlight)}>
        <h2>Solstice</h2>
        <p>
          An app about daylight for iPhone, iPad, Mac, Apple Watch, and Apple
          Vision Pro.
        </p>
        <SolsticeHero />
        <Link className={cx(styles.button)} href="/portfolio/solstice">
          Learn more &rarr;
        </Link>
      </div>
      <div className={cx(styles.card, styles.highlight)}>
        <h2>Where We Can Go</h2>
        <p>
          A{" "}
          <a href="https://www.clarityconf.com/session/where-we-can-go">
            conference talk
          </a>{" "}
          and <Link href="/blog/2019/where-we-can-go">essay</Link> about design
          systems and design tools.
        </p>
        <div className={styles.stretcher}>
          <ShapesAnimation />
          <Link className={cx(styles.button)} href="/blog/2019/where-we-can-go">
            Read the post &rarr;
          </Link>
        </div>
      </div>
      <div className={cx(styles.card, styles.highlight)}>
        <h2>On Deck</h2>
        <p>A college softball score tracking app for iPhone.</p>
        <OnDeckHero />
        <Link className={cx(styles.button)} href="https://ondeck.daneden.me">
          Learn more &rarr;
        </Link>
      </div>
      <div className={cx(styles.card, styles.highlight)}>
        <h2>Zeitgeist</h2>
        <p>
          An app for <Link href="https://vercel.com">Vercel</Link> developers
          for iPhone, iPad, and Mac.
        </p>
        <ZeitgeistHero />
        <Link className={cx(styles.button)} href="/portfolio/zeitgeist">
          Learn more &rarr;
        </Link>
      </div>
    </section>
  )
}
