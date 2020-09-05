import Markdown from "@/utils/Markdown"
import React from "react"
import { Align, Caption, Figure } from "./designSystem"
import { FigureProps } from "./designSystem/Figure"

interface ImageProps extends Omit<FigureProps, "children"> {
  align?: "left" | "right"
  alt?: string
  caption?: string
  defaultSize?: string
  invertInDarkMode?: boolean
  src: string
}

const Image = ({
  align,
  alt,
  className,
  caption,
  invertInDarkMode = false,
  responsive = true,
  margin = true,
  src,
}: ImageProps) => {
  let Wrapper: typeof Align.Left | typeof Align.Right | typeof React.Fragment
  const isSVG = src.endsWith("svg")
  const extension = src.split(".").slice(-1)
  const imageWidths = [114, 272, 340, 544, 680, 1360]

  const webpSrcSet = imageWidths
    .map((size) => `/api/image?name=/uploads/${src}&w=${size}&fm=webp ${size}w`)
    .join(", ")

  const srcSet = imageWidths
    .map(
      (size) =>
        `/api/image?name=/uploads/${src}&w=${size}&fm=${extension} ${size}w`
    )
    .join(", ")

  const defaultSizes =
    "(min-width: 860px) 680px, (min-width: 621px) calc(57.14vw + 189px), calc(90.63vw - 18px)"
  const alignedSizes =
    "(min-width: 1024px) 340px, (min-width: 800px) 272px, (min-width: 621px) calc(75.84vw + 73px), calc(90.63vw - 18px)"
  let sizes = defaultSizes

  switch (align) {
    case "left":
      Wrapper = Align.Left
      sizes = alignedSizes
      break
    case "right":
      Wrapper = Align.Right
      sizes = alignedSizes
      break
    default:
      Wrapper = React.Fragment
  }

  const img = (
    <>
      <picture>
        {!isSVG && (
          <>
            <source sizes={sizes} srcSet={webpSrcSet} type="image/webp" />
            <source sizes={sizes} srcSet={srcSet} type={`image/${extension}`} />
          </>
        )}

        <img
          alt={alt}
          className={invertInDarkMode ? "invertInDarkMode" : ""}
          loading="lazy"
          src={`/uploads/${src}`}
        />
      </picture>
      <style jsx>{`
        @media (prefers-color-scheme: dark) {
          .invertInDarkMode {
            filter: invert(100%) hue-rotate(180deg);
          }
        }
      `}</style>
    </>
  )

  return (
    <Wrapper>
      <Figure className={className} margin={margin} responsive={responsive}>
        {img}
        {caption && (
          <Caption>
            <Markdown>{caption}</Markdown>
          </Caption>
        )}
      </Figure>
    </Wrapper>
  )
}

export default Image
