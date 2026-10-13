import type { ReactNode } from "react"
import styles from "./styles.module.css"

export { styles as cardStyles }

export function CardRow({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <section className={styles.row} aria-label={label}>
      {children}
    </section>
  )
}

export function Card({
  children,
  variant = "media",
}: {
  children: ReactNode
  variant?: "media" | "text"
}) {
  return (
    <article className={`${styles.card} ${variant === "text" ? styles.text : ""}`}>
      {children}
    </article>
  )
}

export function CardButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className={styles.button} href={href}>
      {children}
    </a>
  )
}

export interface CardListItem {
  title: string
  url?: string
  detail?: string
  year: string
}

/** A list of dated entries, e.g. jobs, talks, or apps. */
export function CardList({ items }: { items: CardListItem[] }) {
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
