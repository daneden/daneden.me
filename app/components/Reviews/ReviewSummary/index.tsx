import { AppStoreConnectReview } from ".."
import ReviewCard from "../ReviewCard"
import styles from "./styles.module.css"

export default function ReviewSummary({
  reviews,
}: {
  reviews: AppStoreConnectReview[]
}) {
  const reviewAverage =
    reviews.reduce((previousValue, currentReview) => {
      return previousValue + currentReview.attributes.rating
    }, 0) / reviews.length

  return (
    <ReviewCard>
      <div className="tac">
        <h1 className={styles.reviewAverage}>{reviewAverage.toFixed(1)}</h1>
        <p className="meta">{reviews.length} reviews</p>
      </div>
    </ReviewCard>
  )
}
