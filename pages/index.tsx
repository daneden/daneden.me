/* eslint-disable prefer-const */
import Metatags from "@/components/Metatags"
import Link from "next/link"
import siteConfig from "../src/data/siteconfig.json"
import Image from "next/image"
import GlobalStyles from "@/components/GlobalStyles"

export default function HomePage() {
  return (
    <>
      <GlobalStyles />
      <Metatags
        description={siteConfig.description}
        thumbnail={`https://${process.env.VERCEL_URL}/images/og.png`}
        title={siteConfig.title}
      />
      <div className="root">
        <div className="intro">
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
        <Link href="https://solstice.daneden.me">
          <a className="tile solstice">
            <h2 className="xxl">Solstice</h2>
            <p>An iOS app about daylight</p>
            <Image
              src="/images/solstice.png"
              width={361}
              height={734}
              alt="An iPhone displaying the Solstice app in dark mode"
              layout="intrinsic"
            />
          </a>
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
        <Link href="https://zeitgeist.daneden.me">
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
          <Link href="/blog">Writing &rarr;</Link>
          <Link href="/portfolio">Projects &rarr;</Link>
          <Link href="/playlist">Playlist &rarr;</Link>
        </div>
      </div>
      <style jsx>{`
        .root {
          display: grid;
          grid-template-columns: 1fr 1fr;
          margin: calc(var(--sp-m) * -1);
          --tile-padding: 2vmax;
        }

        .intro {
          grid-column: 1 / 3;
          padding: var(--tile-padding);
        }

        h2 {
          line-height: 1;
          padding: 0;
          margin: 0;
        }

        .tile {
          font-size: clamp(2rem, 2vmin, 3.5rem);
          background-color: var(--tile-background);
          color: var(--tile-foreground);
          aspect-ratio: 1 / 1;
          padding: var(--tile-padding);
          text-align: center;
          overflow: hidden;
        }

        a.tile {
          text-decoration: none;
        }

        .solstice {
          --tile-background: rgb(46, 177, 200);
          --tile-foreground: white;
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
          --tile-background: #5856d6;
          --tile-foreground: lightblue;
        }

        .extras {
          display: grid;
          grid-template-rows: 1fr 1fr 1fr;
          padding: 0;
        }

        .extras :global(a) {
          padding: var(--tile-padding);
          display: grid;
          place-items: center;
          color: var(--site-color);
          --hover-color: rgba(0, 0, 0, 0.1) !important;
          text-decoration: none;
        }

        .extras :global(a):hover {
          --hover-color: var(--site-color) !important;
        }

        .extras :global(a:nth-child(1)) {
          background-color: khaki;
          --site-color: orangered;
        }

        .extras :global(a:nth-child(2)) {
          background-color: lightseagreen;
          --site-color: midnightblue;
        }

        .extras :global(a:nth-child(3)) {
          background-color: plum;
          --site-color: royalblue;
        }

        .xxl {
          font-size: clamp(1.5rem, 8vmin, 3.5rem);
          line-height: 1.2;
          font-style: normal;
          font-family: var(--font-sans);
          letter-spacing: -0.025em;
        }

        .intro .xxl :global(a) {
          --padding-size: 0.05em;
          font-family: var(--font-heading);
          letter-spacing: 0;
          font-style: italic;
        }
      `}</style>
    </>
  )
}
