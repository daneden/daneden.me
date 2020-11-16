import Markdown from "@/utils/Markdown"
import React from "react"
import { Align, Caption, Figure } from "./designSystem"
import { FigureProps } from "./designSystem/Figure"
import NextImage from "next/image"

interface ImageProps extends Omit<FigureProps, "children"> {
  align?: "left" | "right"
  alt?: string
  caption?: string
  defaultSize?: string
  invertInDarkMode?: boolean
  src: string
  width?: string | number
  height?: string | number
  sizes?: string
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

  const isUnsized = width === undefined || height === undefined
  const commonProps = {
    alt,
    className: invertInDarkMode ? "invertInDarkMode" : "",
    src: `/uploads/${src}`,
  }
  const image = isUnsized ? (
    <NextImage {...commonProps} layout="fill" sizes={sizes ?? imgSizes} />
  ) : (
    <NextImage
      {...commonProps}
      height={height as number}
      sizes={sizes ?? imgSizes}
      width={width as number}
    />
  )

  const img = (
    <>
      {image}
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
