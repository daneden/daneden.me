import ReviewCard from "../ReviewCard"
import styles from "./styles.module.css"

export default function Review({ title, children, stars }) {
  const filledStar = "★"
  const emptyStar = "☆"
  const rating = Array(5)
    .fill(emptyStar)
    .map((value, index) => (index < stars ? filledStar : value))
  return (
    <ReviewCard>
      <header>
        <strong>{title}</strong> <span className={styles.rating}>{rating}</span>
      </header>
      {children}
    </ReviewCard>
  )
}
