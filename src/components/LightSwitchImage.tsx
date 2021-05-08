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
}: Props) {
  const [src, setSrc] = useState(srcLight)
  const typedWidth = typeof width === "number" ? Number(width) : String(width)
  const typedHeight =
    typeof height === "number" ? Number(height) : String(height)

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

  return <Image alt={alt} height={typedHeight} src={src} width={typedWidth} />
}
