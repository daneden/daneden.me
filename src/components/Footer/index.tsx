import styles from "./styles.module.css"

export default function Footer() {
  return (
    <>
      <footer className={styles.root}>
        <div className={`${styles.wrapper} small`}>
          Written, designed, and built by Daniel Eden, a designer who you can
          find on{" "}
          <a rel="me" href="https://threads.net/@_dte">
            Threads
          </a>
          ,{" "}
          <a rel="me" href="https://github.com/daneden">
            GitHub
          </a>
          , or good old-fashioned{" "}
          <a href="mailto:dan.eden@me.com">Email</a>.
        </div>
      </footer>
    </>
  )
}
