import cx from "@/app/utils/cx";
import Link from "next/link";
import DeviceFrame, { DeviceModel } from "../DeviceFrame";
import Image from "../Image";
import MuxVideo from "../MuxVideo";
import styles from "./styles.module.css";
import wwcg from "./wwcg.png";


export default function PortfolioCarousel() {
  return <section className={styles.root}>
    <div className={cx(styles.card, styles.highlight)}>
      <h2>Ora</h2>
      <p>An app about time for iPhone, iPad, and Apple Watch.</p>
      <DeviceFrame model={DeviceModel.iPhone14Pro}>
        <MuxVideo poster={1} id="NhkXQ6j5cqn8EaKdsg3ob5octWKsDlZHG1e1vLt02HUY" width={589} height={1278} autoPlay={true} loop={true} controls={false} muted={true} preload={true} playsInline={true} />
      </DeviceFrame>
      <Link className={cx(styles.button, styles.highlight)} href="/portfolio/ora">Learn more &rarr;</Link>
    </div>
    <div className={cx(styles.card, styles.highlight)}>
      <h2>Solstice</h2>
      <p>An app about daylight for iPhone, iPad, Mac, Apple Watch, and Apple Vision Pro.</p>
      <DeviceFrame model={DeviceModel.iPhone14Pro}>
        <MuxVideo poster={1} id="DNNKwHRzLg3qErq1ccG6GP8tCd1etvD5elgQQkqyks8" width={589} height={1278} autoPlay={true} loop={true} controls={false} muted={true} preload={true} playsInline={true} />
      </DeviceFrame>
      <Link className={cx(styles.button, styles.highlight)} href="/portfolio/solstice">Learn more &rarr;</Link>
    </div>

    <div className={cx(styles.card, styles.highlight)}>
      <h2>Where We Can Go</h2>
      <p>A{" "}
            <a href="https://www.clarityconf.com/session/where-we-can-go">
              conference talk
            </a>{" "}
            and <Link href="/blog/2019/where-we-can-go">essay</Link> about
            design systems and design tools.</p>
            <div className={styles.stretcher}>
          <Image
            src={wwcg}
            alt="Daniel Eden presenting “Where We Can Go” at Clarity Conference 2019"
            className={styles.wwcgImage}
          />
          <Link className={cx(styles.button, styles.highlight)} href="/blog/2019/where-we-can-go">Read the post &rarr;</Link>
          </div>
    </div>
    <div className={cx(styles.card, styles.highlight)}>
      <h2>Zeitgeist</h2>
      <p>An app for <Link href="https://vercel.com">Vercel</Link> developers for iPhone, iPad, and Mac.</p>
      <DeviceFrame model={DeviceModel.iPhone14Pro}>
        <MuxVideo poster={1} id="4Df02lKW9dwgsYydlMXp02tEnR6CAk5S3g5eXxRPoGm00o" width={589} height={1278} autoPlay={true} loop={true} controls={false} muted={true} preload={true} playsInline={true} />
      </DeviceFrame>
      <Link className={cx(styles.button, styles.highlight)} href="/portfolio/zeitgeist">Learn more &rarr;</Link>
    </div>
  </section>
}
