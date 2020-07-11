import Markdown from "@/utils/Markdown"
import React, { FunctionComponent } from "react"
import ScriptTag from "react-script-tag"
import { Caption, Figure } from "./designSystem"

interface CFVideoProps {
  autoPlay: boolean
  caption?: string
  controls: boolean
  id: string
  loop: boolean
  preload: boolean
}

const CFVideo = ({
  autoPlay = false,
  caption,
  controls = true,
  id,
  loop = false,
  preload = true,
}: CFVideoProps) => {
  return (
    <Figure>
      <stream
        autoPlay={autoPlay}
        controls={controls}
        loop={loop}
        preload={String(preload)}
        src={id}
      ></stream>
      <ScriptTag
        data-cfasync="false"
        defer
        src={`https://embed.videodelivery.net/embed/r4xu.fla9.latest.js?video=${id}`}
        type="text/javascript"
      />
      {caption && (
        <Caption>
          <Markdown>{caption}</Markdown>
        </Caption>
      )}
    </Figure>
  )
}

export default CFVideo
