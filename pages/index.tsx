import Layout from "@/components/Layout"
import Link from "next/link"
import Image from "@/components/Image"
import FeatureTile from "@/components/FeatureTile"

export default function HomePage() {
  return (
    <Layout>
      <p>
        <Image
          alt="Daniel Eden"
          height={200}
          src="2020/11/face.jpg"
          width={200}
        />
        Daniel Eden is a Design Manager at{" "}
        <Link href="https://facebook.com/business">Facebook</Link> in London,
        supporting Facebook’s Commerce organisation. He spends his time{" "}
        <Link href="/blog">writing</Link>, thinking,{" "}
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
    </Layout>
  )
}
