import Review from "../Review"
import styles from "./style.module.css"

interface AppStoreConnectReview {
  type: string
  id: string
  attributes: {
    rating: number
    title: string
    body: string
    reviewerNickname: string
    createdDate: string
    territory: string
  }
}

export default async function Reviews() {
  const reviewsData = await fetch(
    "https://connect.daneden.me/1547580907/reviews"
  )
  const json = await reviewsData.json()
  const { data: reviews } = json
  console.log(json)
  const sortedReviews = (reviews as AppStoreConnectReview[]).sort(
    (lhs, rhs) => {
      return (
        new Date(lhs.attributes.createdDate).getTime() -
        new Date(rhs.attributes.createdDate).getTime()
      )
    }
  )

  return (
    <div className={styles.root}>
      {sortedReviews.map((review) => (
        <Review
          key={review.attributes.createdDate}
          stars={review.attributes.rating}
          title={review.attributes.title}
        >
          {review.attributes.body}
        </Review>
      ))}
      <div className={styles.readMore}>
        <label>
          <input type="checkbox" />
          Read <span className={styles.readMoreLabel}>more</span>
          <span className={styles.readLessLabel}>less</span>
        </label>
      </div>
    </div>
  )
}
