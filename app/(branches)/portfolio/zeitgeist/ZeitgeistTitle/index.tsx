import Image from "next/image"
import styles from "./styles.module.css"
import blueprintLogo from "./zeitgeist-blueprint-logo.png"

export default function ZeitgeistTitle() {
  return (
    <header className={styles.root}>
      <div className={styles.iconContainer}>
        <Image className={styles.icon} src={blueprintLogo} alt="" />
      </div>
      <span className={styles.tagline}>Deep Dive</span>
      <h1 className={styles.title}>Zeitgeist</h1>
    </header>
  )
}
