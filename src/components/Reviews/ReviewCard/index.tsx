import styles from "./styles.module.css"

export default function ReviewCard({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className={styles.root}>{children}</div>
}
