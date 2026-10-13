import Align from "@/components/Align"
import React, { type ReactNode } from "react"

/** A static import (Astro's ImageMetadata) or a path under /public. */
export type ImageSource = string | { src: string; width: number; height: number }

export interface ImageProps {
  src: ImageSource
  alt: string
  width?: number
  height?: number
  sizes?: string
  className?: string
  align?: "left" | "right"
  caption?: ReactNode
  invertInDarkMode?: boolean
}

const Image = ({
  align,
  alt,
  className,
  caption,
  invertInDarkMode = false,
  src,
  width,
  height,
}: ImageProps) => {
  const Wrapper =
    align === "left" ? Align.Left : align === "right" ? Align.Right : React.Fragment

  const resolved = typeof src === "string" ? { src, width, height } : src

  return (
    <Wrapper>
      <figure className={className}>
        <img
          alt={alt}
          className={invertInDarkMode ? "invertInDarkMode" : undefined}
          src={resolved.src}
          width={width ?? resolved.width}
          height={height ?? resolved.height}
          loading="lazy"
          decoding="async"
        />
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    </Wrapper>
  )
}

export default Image
