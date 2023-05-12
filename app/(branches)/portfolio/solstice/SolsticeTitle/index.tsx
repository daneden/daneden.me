import styles from "./styles.module.css"

export default function SolsticeTitle() {
  return (
    <header className={styles.root}>
      <h1 className={styles.title}>Solstice</h1>
      <div className={styles.solarChart}>
        <div className={styles.horizonUpper} />
        <svg
          className={styles.sineWave}
          width={400}
          height={200}
          viewBox="50 -4 200 200"
        >
          <path
            d="M 0 100 Q 50 200 100 100 Q 150 0 200 100 Q 250 200 300 100 "
            stroke="currentcolor"
            strokeLinecap="round"
            strokeWidth="4"
            fill="none"
            opacity="0.2"
          />
          <circle cx="150" cy="50" r="10" fill="white" />
        </svg>
        <div className={styles.horizonLine} />
        <div className={styles.horizonLower} />
      </div>
    </header>
  )
}
