import { Card, CardButton, CardRow, cardStyles } from "@/components/Cards"
import { OnDeckHero, OraHero, SolsticeHero, ZeitgeistHero } from "../AppHero"
import ShapesAnimation from "../ShapesAnimation"

export default function PortfolioCarousel() {
  return (
    <CardRow label="Apps and projects">
      <Card>
        <h2>Ora</h2>
        <p>An app about time for iPhone, iPad, and Apple Watch.</p>
        <OraHero />
        <CardButton href="/portfolio/ora">
          Learn more &rarr;
        </CardButton>
      </Card>
      <Card>
        <h2>Solstice</h2>
        <p>
          An app about daylight for iPhone, iPad, Mac, Apple Watch, and Apple
          Vision Pro.
        </p>
        <SolsticeHero />
        <CardButton href="/portfolio/solstice">
          Learn more &rarr;
        </CardButton>
      </Card>
      <Card>
        <h2>Where We Can Go</h2>
        <p>
          A{" "}
          <a href="https://www.clarityconf.com/session/where-we-can-go">
            conference talk
          </a>{" "}
          and <a href="/blog/2019/where-we-can-go">essay</a> about design
          systems and design tools.
        </p>
        <div className={cardStyles.stretcher}>
          <ShapesAnimation />
          <CardButton href="/blog/2019/where-we-can-go">
            Read the post &rarr;
          </CardButton>
        </div>
      </Card>
      <Card>
        <h2>On Deck</h2>
        <p>A college softball score tracking app for iPhone.</p>
        <OnDeckHero />
        <CardButton href="https://ondeck.daneden.me">
          Learn more &rarr;
        </CardButton>
      </Card>
      <Card>
        <h2>Zeitgeist</h2>
        <p>
          An app for <a href="https://vercel.com">Vercel</a> developers
          for iPhone, iPad, and Mac.
        </p>
        <ZeitgeistHero />
        <CardButton href="/portfolio/zeitgeist">
          Learn more &rarr;
        </CardButton>
      </Card>
    </CardRow>
  )
}
