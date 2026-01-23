"use client"

import { useCallback, useRef, useState } from "react"
import type { StickerData } from "../effects/types"
import styles from "./styles.module.css"

interface StickerProps {
  sticker: StickerData
}

export default function Sticker({ sticker }: StickerProps) {
  const [isLifted, setIsLifted] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  const stickerRef = useRef<HTMLDivElement>(null)
  const isLiftedRef = useRef(false)

  const updateTransform = useCallback((x: number, y: number) => {
    const el = stickerRef.current
    if (!el) return

    const lifted = isLiftedRef.current

    // x, y are 0-100 representing position on sticker
    // Tilt follows mouse - opposite edge lifts (natural "pressing down" feel)
    const tiltX = ((y - 50) / 50) * (lifted ? -10 : 0)
    const tiltY = ((x - 50) / 50) * (lifted ? 10 : 0)
    const scale = lifted ? 1.05 : 1

    el.style.setProperty("--mouse-x", `${x / 100}`)
    el.style.setProperty("--mouse-y", `${y / 100}`)
    el.style.setProperty("--tilt-x", `${tiltX}`)
    el.style.setProperty("--tilt-y", `${tiltY}`)
    el.style.setProperty("--scale", `${scale}`)
  }, [])

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (isTouchDevice) return

      const rect = e.currentTarget.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100

      updateTransform(x, y)
    },
    [isTouchDevice, updateTransform]
  )

  const handlePointerEnter = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (isTouchDevice) return

      const rect = e.currentTarget.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100

      // Set origin to entry point
      const el = stickerRef.current
      if (el) {
        el.style.setProperty("--peel-origin", `${x}% ${y}%`)
      }

      isLiftedRef.current = true
      setIsLifted(true)
      updateTransform(x, y)
    },
    [isTouchDevice, updateTransform]
  )

  const handlePointerLeave = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (isTouchDevice) return

      const rect = e.currentTarget.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100

      // Update origin to exit point
      const el = stickerRef.current
      if (el) {
        el.style.setProperty("--peel-origin", `${x}% ${y}%`)
      }

      isLiftedRef.current = false
      setIsLifted(false)
      updateTransform(x, y)
    },
    [isTouchDevice, updateTransform]
  )

  const handleTouchStart = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      setIsTouchDevice(true)

      const rect = e.currentTarget.getBoundingClientRect()
      const touch = e.touches[0]
      const x = ((touch.clientX - rect.left) / rect.width) * 100
      const y = ((touch.clientY - rect.top) / rect.height) * 100

      const el = stickerRef.current
      if (el) {
        el.style.setProperty("--peel-origin", `${x}% ${y}%`)
      }

      const newLifted = !isLiftedRef.current
      isLiftedRef.current = newLifted
      setIsLifted(newLifted)
      updateTransform(x, y)
    },
    [updateTransform]
  )

  const classNames = [styles.sticker, isLifted && styles.isLifted]
    .filter(Boolean)
    .join(" ")

  return (
    <div className={styles.container}>
      <div
        ref={stickerRef}
        className={classNames}
        style={
          {
            "--sticker-url": `url(${sticker.image.src})`,
          } as React.CSSProperties
        }
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onTouchStart={handleTouchStart}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={sticker.image.src}
          alt={sticker.name}
          width={sticker.image.width}
          height={sticker.image.height}
        />
      </div>
    </div>
  )
}
