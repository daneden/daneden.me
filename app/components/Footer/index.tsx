import Link from "next/link"
import styles from "./styles.module.css"

export default function Footer() {
  return (
    <>
      <footer className={styles.root}>
        <div className={`${styles.wrapper} small`}>
          Written, designed, and built by Daniel Eden, a designer who you can
          find on{" "}
          <Link rel="me" href="https://threads.net/@_dte">
            Threads
          </Link>
          ,{" "}
          <Link rel="me" href="https://github.com/daneden">
            GitHub
          </Link>
          , or good old-fashioned{" "}
          <Link href="mailto:dan.eden@me.com">Email</Link>.
        </div>
      </footer>
    </>
  )
}
