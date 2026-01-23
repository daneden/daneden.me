"use client"

import type { StickerData } from "../effects/types"
import Sticker from "../Sticker"
import styles from "./styles.module.css"

interface StickerGridProps {
  stickers: StickerData[]
}

export default function StickerGrid({ stickers }: StickerGridProps) {
  return (
    <>
      <div className={styles.grid}>
        {stickers.map((sticker) => (
          <div key={sticker.id} className={styles.item}>
            <Sticker sticker={sticker} />
            <span className={styles.name}>{sticker.name}</span>
          </div>
        ))}
      </div>

      {/* No-JS fallback */}
      <noscript>
        <div className={styles.fallbackGrid}>
          {stickers.map((sticker) => (
            <div key={sticker.id} className={styles.item}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={sticker.image.src}
                alt={sticker.name}
                width={sticker.image.width}
                height={sticker.image.height}
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <span className={styles.name}>{sticker.name}</span>
            </div>
          ))}
        </div>
      </noscript>
    </>
  )
}
