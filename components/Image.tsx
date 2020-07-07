import Markdown from "@/utils/Markdown"
import cxs from "cxs"
import React, { FunctionComponent, useEffect, useState } from "react"
import { Align, Caption, Figure } from "./designSystem"
import { FigureProps } from "./designSystem/Figure"

function supportsWebp(setter: (val: boolean) => void) {
  if (typeof window === "undefined") return false

  const webpImage = new window.Image()

  webpImage.onload = webpImage.onerror = function () {
    setter(webpImage.height === 2)
  }

  webpImage.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
}

interface ImageProps extends Omit<FigureProps, "children"> {
  align?: "left" | "right"
  alt?: string
  caption?: string
  defaultSize?: string
  invertInDarkMode?: boolean
  src: string
}

const Image: FunctionComponent<ImageProps> = ({
  align,
  alt,
  className,
  caption,
  invertInDarkMode = false,
  responsive = true,
  margin = true,
  src,
}) => {
  let Wrapper: typeof Align.Left | typeof Align.Right | typeof React.Fragment
  const usesSrcSet = !src.endsWith("svg")
  const imageWidths = [114, 272, 340, 544, 680, 1360]
  const [webpSupport, setWebpSupport] = useState(false)

  useEffect(() => {
    supportsWebp(setWebpSupport)
  }, [])

  const srcSet = imageWidths
    .map(
      (size) =>
        `/api/image?name=/uploads/${src}&w=${size}${
          webpSupport ? "&fm=webp" : ""
        } ${size}w`
    )
    .join(", ")

  const defaultSizes =
    "(min-width: 860px) 680px, (min-width: 621px) calc(57.14vw + 189px), calc(90.63vw - 18px)"
  const alignedSizes =
    "(min-width: 1024px) 340px, (min-width: 800px) 272px, (min-width: 621px) calc(75.84vw + 73px), calc(90.63vw - 18px)"
  let sizes = defaultSizes

  const wrapperClass = cxs({
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
      src={"/uploads/" + src}
      alt={alt}
      loading="lazy"
      srcSet={usesSrcSet ? srcSet : ""}
      sizes={sizes}
    />
  )

  return (
    <Wrapper>
      <Figure className={className} margin={margin} responsive={responsive}>
        <div className={wrapperClass}>{img}</div>
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
