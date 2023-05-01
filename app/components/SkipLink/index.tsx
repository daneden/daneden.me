import Link from "next/link"
import styles from "./styles.module.css"

const SkipLink = () => (
  <>
    <nav className={styles.skipLink}>
      <Link href="#content">Skip to content</Link>
    </nav>
  </>
)

export default SkipLink
