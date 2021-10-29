import FeatureTile from "@/components/FeatureTile"
import Image from "@/components/Image"
import Layout from "@/components/Layout"
import Link from "next/link"

export default function HomePage() {
  return (
    <Layout>
      <p className="image-container">
        <span className="badge" aria-hidden={true}>
          Employed
        </span>
        <span className="badge" aria-hidden={true}>
          British
        </span>
        <span className="badge" aria-hidden={true}>
          “Unicorn”
        </span>
        <Image
          alt="Daniel Eden"
          height={200}
          src="2020/11/face.jpg"
          width={200}
        />
      </p>
      <p className="intro">
        Daniel Eden is a Product Designer at{" "}
        <Link href="https://meta.com/">Meta</Link> in London, working on making
        Customer Support experiences that are more equitable, human, and
        helpful. He spends his time <Link href="/blog">writing</Link>, thinking,{" "}
        <Link href="https://twitter.com/_dte">tweeting</Link>, and talking about
        Design Systems: how they scale, how they break, and the people&nbsp;that
        maintain&nbsp;them.
      </p>
      <p>
        You probably came here to <Link href="/blog">read the blog</Link> or see{" "}
        <Link href="/portfolio">my work</Link>.
      </p>
      <hr />
      <h2>Selected Work and Writing</h2>
      <FeatureTile
        url="/blog/2019/where-we-can-go"
        title="Where We Can Go"
        description="Today’s design and engineering tools are poorly suited for creating or working within design systems. What would our tools look like if they treated design systems as the building material, rather than an abstract thing we gesture towards?"
      />
      <FeatureTile
        url="https://solstice.daneden.me"
        title="Solstice"
        description="An app for brighter days. See how much more or less daylight there is today compared to yesterday."
        image={
          <Image
            src="2021/05/solstice-app-icon.png"
            width={512}
            height={512}
            alt="The app icon for Solstice"
            sizes={"4rem"}
          />
        }
      />
      <FeatureTile
        url="https://breadforthebusy.com"
        title="Bread For The Busy"
        description="A website about making bread, geared towards no-nonsense recipes."
        image={
          <Image
            src="2021/05/perfect-sandwich-loaf.jpg"
            width={4000}
            height={6000}
            alt="A loaf of sourdough bread"
            sizes={"4rem"}
          />
        }
      />
      <FeatureTile
        url="/blog/2020/access-ability"
        title="Access—Ability"
        description="People tend to conflate “accessibility” with “disability”; but designing
    for accessibility is principally a question of “access”. Framed in this
    light, the challenges and opportunities of accessible design become more
    vividly obvious."
      />
      <style jsx>{`
        .intro {
          z-index: 2;
        }

        .image-container {
          position: relative;
          padding-block-start: var(--sp-l);
        }

        .badge {
          --h: 25;
          --l: 50%;
          font-family: var(--font-sans-extended);
          padding: 1rem 1.5rem;
          border-radius: 100%;
          background-color: hsl(var(--h), 100%, var(--l));
          color: var(--wash-color);
          position: absolute;
          text-transform: uppercase;
          z-index: 2;
          font-size: 1.75rem;
          letter-spacing: 0.05em;
        }

        .badge:nth-of-type(1) {
          top: 2.5%;
          left: -2.5%;
          transform: rotate(-5deg);
        }

        .badge:nth-of-type(2) {
          right: calc(var(--sp-xs) * -1);
          top: 25%;
          transform: rotate(5deg);
          --h: 290;
        }

        .badge:nth-of-type(3) {
          left: 5%;
          bottom: -2.5%;
          transform: rotate(7deg);
          --h: 200;
        }
      `}</style>
    </Layout>
  )
}
