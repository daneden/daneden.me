import { Metadata } from "next"
import StickerGrid from "./components/StickerGrid"
import type { StickerData } from "./components/effects/types"
import stickersData from "./stickers.json"
import styles from "./styles.module.css"

export const metadata: Metadata = {
  title: "Stickers",
  description:
    "A collection of stickers designed for internal team swag and projects",
  openGraph: {
    title: "Stickers",
    description:
      "A collection of stickers designed for internal team swag and projects",
  },
}

export default function StickersPage() {
  const stickers = stickersData.stickers as StickerData[]

  return (
    <>
      <h1>Stickers</h1>
      <p className={styles.intro}>
        Over the years, I&apos;ve designed various stickers for team swag,
        internal projects, and just for fun. These vinyl stickers have a
        satisfying glossy finish that catches the light as you move around
        them—hover or tap to see the peel effect.
      </p>

      <p className={styles.instructions}>
        <span className="hover">Hover over stickers to see them peel</span>
        <span className="touch">Tap stickers to see them peel</span>
      </p>

      <StickerGrid stickers={stickers} />
    </>
  )
}
