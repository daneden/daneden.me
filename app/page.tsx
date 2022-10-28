/* eslint-disable prefer-const */
import Metatags from "@/components/Metatags"
import Timeline from "@/components/Timeline"
import Image from "next/image"
import Link from "next/link"
import siteConfig from "../src/data/siteconfig.json"

export default function HomePage() {
  return (
    <>
      <Metatags
        description={siteConfig.description}
        thumbnail={`https://${process.env.VERCEL_URL}/images/og.png`}
        title={siteConfig.title}
      />
      <div className="root">
        <div className="intro spanall">
          <p className="xxl">
            Daniel Eden is a Product Designer at{" "}
            <Link href="https://meta.com/" legacyBehavior>
              Meta
            </Link>{" "}
            in London, working on making Customer Support experiences that are
            more equitable, human, and helpful. He spends his time{" "}
            <Link href="/blog" legacyBehavior>
              writing
            </Link>
            , thinking,{" "}
            <Link href="https://twitter.com/_dte" legacyBehavior>
              tweeting
            </Link>
            , and talking about Design Systems: how they scale, how they break,
            and the people&nbsp;that maintain&nbsp;them.
          </p>
        </div>
        <Link href="https://solstice.daneden.me" legacyBehavior>
          <a className="tile solstice">
            <h2 className="xxl">Solstice</h2>
            <p>An iOS app about daylight</p>
            <Image
              src="/images/solstice.png"
              width={361}
              height={734}
              alt="An iPhone displaying the Solstice app in dark mode"
            />
          </a>
        </Link>
        <div className="tile where-we-can-go">
          <h2 className="xxl">Where We Can Go</h2>
          <p>
            A{" "}
            <Link href="" legacyBehavior>
              conference talk
            </Link>{" "}
            and{" "}
            <Link href="/blog/2019/where-we-can-go" legacyBehavior>
              essay
            </Link>{" "}
            about design systems and design tools.
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
        <Link href="https://zeitgeist.daneden.me" legacyBehavior>
          <a className="tile zeitgeist">
            <h2 className="xxl">Zeitgeist</h2>
            <p>Monitor your Vercel deployments</p>
            <Image
              src="/images/zeitgeist.png"
              width={368}
              height={749}
              alt="An iPhone displaying the Zeitgeist app"
            />
          </a>
        </Link>
        <div className="tile extras xxl">
          <Link href="/blog" legacyBehavior>
            Writing &rarr;
          </Link>
          <Link href="/portfolio" legacyBehavior>
            Projects &rarr;
          </Link>
          <Link href="/playlist" legacyBehavior>
            Playlist &rarr;
          </Link>
        </div>
        <div className="spanall">
          <Timeline />
        </div>
      </div>
      <style>{`
        .root {
          display: grid;
          grid-template-columns: 1fr 1fr;
          margin: calc(var(--sp-m) * -1);
          --tile-padding: 2vmax;
        }

        .intro {
          padding: var(--tile-padding);
        }

        .spanall {
          grid-column: 1 / 3;
        }

        h2 {
          line-height: 1;
          padding: 0;
          margin: 0;
        }

        .tile {
          font-size: clamp(1.25rem, 2vmin, 3.5rem);
          background-color: var(--tile-background);
          color: var(--tile-foreground);
          aspect-ratio: 1 / 1;
          padding: var(--tile-padding);
          text-align: center;
          overflow: hidden;
          transition: 0.075s ease;
        }

        .tile:is(:hover, :focus):not(.where-we-can-go) {
          background-color: var(--tile-foreground);
          color: var(--tile-background);
          box-shadow: inset 0 0 0 calc(var(--tile-padding) / 2) currentcolor;
        }

        a.tile {
          text-decoration: none;
        }

        .solstice {
          --tile-background: rgb(46, 177, 200);
          --tile-foreground: mistyrose;
        }

        @supports (background-color: lch(60% 180 192)) {
          .solstice {
            --tile-background: lch(60% 180 192);
          }
        }

        .where-we-can-go {
          --tile-background: #060405;
          --tile-foreground: white;
        }

        .zeitgeist {
          --tile-background: seagreen;
          --tile-foreground: powderblue;
        }

        .extras {
          display: grid;
          grid-template-rows: 1fr 1fr 1fr;
          padding: 0;
        }

        .extras a {
          padding: var(--tile-padding);
          padding-block-end: calc(var(--tile-padding) * 1.2);
          display: grid;
          place-items: center;
          color: var(--site-color);
          text-decoration: none;
          background-color: var(--tile-background);
          transition: 0.075s ease;
        }

        .extras a:is(:hover, :focus) {
          background-color: var(--site-color) !important;
          color: var(--tile-background) !important;
          box-shadow: inset 0 0 0 calc(var(--tile-padding) / 2) currentcolor;
        }

        .extras a:nth-child(1) {
          --tile-background: khaki;
          --site-color: orangered;
        }

        .extras a:nth-child(2) {
          --tile-background: lightseagreen;
          --site-color: midnightblue;
        }

        .extras a:nth-child(3) {
          --tile-background: plum;
          --site-color: royalblue;
        }

        .xxl {
          font-size: clamp(1.5rem, 8vmin, 3.5rem);
          line-height: 1.2;
          font-style: normal;
          font-family: var(--font-sans);
          letter-spacing: -0.025em;
        }

        .intro .xxl a {
          --padding-size: 0.05em;
          font-family: var(--font-heading);
          letter-spacing: 0;
          font-style: italic;
        }

        @media (max-width: 1000px) {
          .root {
            grid-template-columns: 1fr;
            display: block;
          }

          .spanall {
            grid-columns: 1 / 2;
          }

          .tile {
            aspect-ratio: unset;
            width: 100%;
            display: block;
          }
        }
      `}</style>
    </>
  )
}
