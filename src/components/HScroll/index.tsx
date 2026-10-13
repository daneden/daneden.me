import styles from "./styles.module.css"

export default function HScroll({ children, scrollSnapping = true }) {
  return (
    <div
      className={`${styles.root} ${
        scrollSnapping ? styles.scrollSnapping : ""
      }`}
    >
      {children}
    </div>
  )
}
