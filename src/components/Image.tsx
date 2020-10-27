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
  width,
  height,
}: ImageProps) => {
  let Wrapper: typeof Align.Left | typeof Align.Right | typeof React.Fragment

  switch (align) {
    case "left":
      Wrapper = Align.Left
      break
    case "right":
      Wrapper = Align.Right
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
    <NextImage {...commonProps} unsized={true} />
  ) : (
    <NextImage
      {...commonProps}
      height={height as number}
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
