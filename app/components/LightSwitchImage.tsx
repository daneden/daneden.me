"use client"
import Image, { ImageProps } from "next/image"
import { useEffect, useState } from "react"

interface Props extends Omit<ImageProps, "src"> {
  srcLight: string
  srcDark: string
}

export default function LightswitchImage({
  srcDark,
  srcLight,
  alt,
  width,
  height,
  className,
}: Props) {
  const [src, setSrc] = useState(srcLight)

  useEffect(() => {
    const mediaQuery = window?.matchMedia("(prefers-color-scheme: dark)")

    function switchSrc(query: MediaQueryListEvent) {
      setSrc(query.matches ? srcDark : srcLight)
    }

    mediaQuery.addEventListener("change", switchSrc)

    // Fire once on mount and then count on the media query to trigger future changes
    setSrc(mediaQuery.matches ? srcDark : srcLight)

    return () => {
      mediaQuery.removeEventListener("change", switchSrc)
    }
  }, [srcLight, srcDark])

  return (
    <Image
      className={className}
      alt={alt}
      height={height}
      src={src}
      width={width}
    />
  )
}
