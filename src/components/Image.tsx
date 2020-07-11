import Markdown from "@/utils/Markdown"
import cxs from "cxs"
import React, { FunctionComponent, useContext } from "react"
import { Align, Caption, Figure } from "./designSystem"
import { FigureProps } from "./designSystem/Figure"
import WebPSupportContext from "./WebPSupportContext"

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
  const usesSrcSet = !src.endsWith("svg")
  const extension = src.split(".").slice(-1)
  const imageWidths = [114, 272, 340, 544, 680, 1360]

  // Assume webp support by default to limit requests on modern browsers
  const webPSupport = useContext(WebPSupportContext)

  const srcSet = imageWidths
    .map(
      (size) =>
        `/api/image?name=/uploads/${src}&w=${size}&fm=${
          webPSupport ? "webp" : extension
        }
         ${size}w`
    )
    .join(", ")

  const defaultSizes =
    "(min-width: 860px) 680px, (min-width: 621px) calc(57.14vw + 189px), calc(90.63vw - 18px)"
  const alignedSizes =
    "(min-width: 1024px) 340px, (min-width: 800px) 272px, (min-width: 621px) calc(75.84vw + 73px), calc(90.63vw - 18px)"
  let sizes = defaultSizes

  const imageClassName = cxs({
    "@media (prefers-color-scheme: dark)": {
      filter: invertInDarkMode ? "invert(100%) hue-rotate(180deg)" : "initial",
    },
  })

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
    <img
      alt={alt}
      className={imageClassName}
      loading="lazy"
      sizes={sizes}
      src={"/uploads/" + src}
      srcSet={usesSrcSet ? srcSet : ""}
    />
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
