import Markdown from "@/utils/Markdown"
import cxs from "cxs"
import React, { FunctionComponent } from "react"
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
  const sizes = [272, 340, 544, 680, 1360]
  const srcSet = sizes
    .map((size) => `/api/image?name=/uploads/${src}&w=${size} ${size}w`)
    .join(", ")

  const wrapperClass = cxs({
    "@media (prefers-color-scheme: dark)": {
      filter: invertInDarkMode ? "invert(100%) hue-rotate(180deg)" : "initial",
    },
  })

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

  const img = (
    <img
      src={"/uploads/" + src}
      alt={alt}
      loading="lazy"
      srcSet={src.endsWith("svg") ? "" : srcSet}
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
