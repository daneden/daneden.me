import resume from "@/data/resume.json"
import timeline from "@/data/timeline.json"
import styles from "./styles.module.css"

interface Entry {
  title: string
  url?: string
  detail?: string
  year: string
}

type Kind = "app" | "talk" | "interview" | "project"

const entries = (...kinds: Kind[]): Entry[] =>
  timeline
    .filter((entry) => kinds.includes(entry.kind as Kind))
    .map((entry) => ({
      title: entry.title,
      url: entry.url,
      detail: entry.description,
      year: entry.date.slice(0, 4),
    }))

function List({ items }: { items: Entry[] }) {
  return (
    <ul className={styles.list}>
      {items.map(({ title, url, detail, year }) => (
        <li key={`${title}-${year}`}>
          <span>{url ? <a href={url}>{title}</a> : title}</span>
          <span className={styles.year}>{year}</span>
          {detail && <span className={styles.detail}>{detail}</span>}
        </li>
      ))}
    </ul>
  )
}

export default function HomeSections() {
  return (
    <div className={styles.root}>
      <section>
        <h2>Résumé</h2>
        <List
          items={resume.map(({ company, url, role, years }) => ({
            title: company,
            url,
            detail: role,
            year: years,
          }))}
        />
      </section>
      <section>
        <h2>Talks &amp; Interviews</h2>
        <List items={entries("talk", "interview")} />
      </section>
      <section>
        <h2>Open Source &amp; Side Projects</h2>
        <List items={entries("project")} />
      </section>
    </div>
  )
}
