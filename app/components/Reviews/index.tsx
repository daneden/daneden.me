import Breakout from "@/app/components/Breakout"
import Review from "./Review"
import ReviewSummary from "./ReviewSummary"
import styles from "./style.module.css"

export interface AppStoreConnectReview {
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

export default async function Reviews({ appId }: { appId: string }) {
  let reviews: AppStoreConnectReview[] | null = null

  try {
    const reviewsData = await fetch(
      `https://connect.daneden.me/${appId}/reviews`,
      {
        next: { revalidate: 3600 }, // Revalidate hourly instead of on every build
      }
    )

    if (!reviewsData.ok) {
      return null
    }

    const json = await reviewsData.json()
    reviews = json.data
  } catch {
    return null
  }

  if (!reviews) {
    return null
  }

  const sortedReviews = reviews.sort((lhs, rhs) => {
    return (
      new Date(rhs.attributes.createdDate).getTime() -
      new Date(lhs.attributes.createdDate).getTime()
    )
  })

  return (
    <Breakout>
      <div className={styles.container}>
        <div className={styles.root}>
          <ReviewSummary reviews={reviews} />
          {sortedReviews.map((review) => (
            <Review
              key={review.attributes.createdDate}
              stars={review.attributes.rating}
              title={review.attributes.title}
            >
              {review.attributes.body}
            </Review>
          ))}
        </div>
        <div className={styles.readMore}>
          <label>
            <input type="checkbox" />
            Read <span className={styles.readMoreLabel}>more</span>
            <span className={styles.readLessLabel}>less</span>
          </label>
        </div>
      </div>
    </Breakout>
  )
}
