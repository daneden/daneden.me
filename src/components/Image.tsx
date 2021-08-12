import Align from "@/components/Align"
import NextImage from "next/image"
import React, { ReactNode } from "react"

interface ImageProps {
  align?: "left" | "right"
  alt?: string
  caption?: ReactNode
  className?: string
  defaultSize?: string
  invertInDarkMode?: boolean
  src: string
  width: string | number
  height: string | number
  sizes?: string
}

const Image = ({
  align,
  alt,
  className,
  caption,
  invertInDarkMode = false,
  src,
  sizes,
  width,
  height,
}: ImageProps) => {
  let imgSizes = "(max-width: 800px) 680px, 100vw"
  let Wrapper: typeof Align.Left | typeof Align.Right | typeof React.Fragment
  const isRemote = src.startsWith("http")

  switch (align) {
    case "left":
      Wrapper = Align.Left
      imgSizes = "(max-width: 1032px) 340px, (max-width: 800px) 272px, 100vw"
      break
    case "right":
      Wrapper = Align.Right
      imgSizes = "(max-width: 1032px) 340px, (max-width: 800px) 272px, 100vw"
      break
    default:
      Wrapper = React.Fragment
  }

  const img = (
    <>
      <NextImage
        alt={alt}
        className={invertInDarkMode ? "invertInDarkMode" : ""}
        height={height}
        sizes={sizes ?? imgSizes}
        src={isRemote ? src : `/uploads/${src}`}
        width={width}
      />
      <style jsx>{`
        @media (prefers-color-scheme: dark) {
          :global(.invertInDarkMode) {
            filter: invert(100%) hue-rotate(180deg);
          }
        }
      `}</style>
    </>
  )

  return (
    <Wrapper>
      <figure className={className}>
        {img}
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    </Wrapper>
  )
}

export default Image
