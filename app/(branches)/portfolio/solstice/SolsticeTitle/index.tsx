import styles from "./styles.module.css"

export default function SolsticeTitle() {
  return (
    <header className={styles.root}>
      <div className={styles.iconContainer}>
        <svg
          className={styles.icon}
          viewBox="0 0 373 363"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M186.609 346.591V315.338M82.1088 325.941L97.7349 298.876M284.272 325.941L268.646 298.876M66.9709 141.009C66.9709 207.083 120.535 260.647 186.609 260.647C252.682 260.647 306.246 207.083 306.246 141.009M16 255.872L43.2532 240.137M356.626 255.676L329.712 240.137M114.338 88.7592C114.338 88.7592 151.943 45.8475 186.609 16M186.609 16C220.337 45.8475 256.926 88.7592 256.926 88.7592M186.609 16V141.009"
            stroke="currentcolor"
            stroke-width="31.2523"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <span className={styles.tagline}>Deep Dive</span>
      <h1 className={styles.title}>Solstice</h1>
    </header>
  )
}
