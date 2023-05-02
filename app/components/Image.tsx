import Align from "@/app/components/Align"
import NextImage, { ImageProps as NextImageProps } from "next/image"
import React, { ReactNode } from "react"

interface ImageProps extends NextImageProps {
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
  sizes,
  width,
  height,
}: ImageProps) => {
  let imgSizes = "(max-width: 800px) 680px, 100vw"
  let Wrapper: typeof Align.Left | typeof Align.Right | typeof React.Fragment

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
        src={src}
        width={width}
      />
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
