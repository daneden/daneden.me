import { Card, CardButton, CardList, CardRow, type CardListItem } from "@/components/Cards"
import resume from "@/data/resume.json"
import timeline from "@/data/timeline.json"

type Kind = "app" | "talk" | "interview" | "project"

const entries = (...kinds: Kind[]): CardListItem[] =>
  timeline
    .filter((entry) => kinds.includes(entry.kind as Kind))
    .map((entry) => ({
      title: entry.title,
      url: entry.url,
      detail: entry.description,
      year: entry.date.slice(0, 4),
    }))

export default function HomeCards() {
  return (
    <CardRow label="Work and appearances">
      <Card variant="text">
        <h2>Résumé</h2>
        <CardList
          items={resume.map(({ company, url, role, years }) => ({
            title: company,
            url,
            detail: role,
            year: years,
          }))}
        />
        <CardButton href="/portfolio">Read more &rarr;</CardButton>
      </Card>
      <Card variant="text">
        <h2>Talks &amp; Interviews</h2>
        <CardList items={entries("talk", "interview")} />
      </Card>
      <Card variant="text">
        <h2>Apps</h2>
        <CardList items={entries("app")} />
      </Card>
      <Card variant="text">
        <h2>Open Source &amp; Side Projects</h2>
        <CardList items={entries("project")} />
      </Card>
    </CardRow>
  )
}
