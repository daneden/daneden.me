"use client"
import ReactHlsPlayer from "react-hls-player";

interface Props {
  autoPlay: boolean
  caption?: string
  controls: boolean
  id: string
  loop: boolean
  preload: boolean
  playsInline: boolean
  // The timestamp to render for the poster image. No poster image is shown when this value is undefined.
  poster?: number
  muted: boolean
  width?: number
  height?: number
  className?: string
}

export default function MuxVideo({
  autoPlay = false,
  caption,
  controls = true,
  id,
  loop = false,
  preload = true,
  playsInline = false,
  poster,
  muted = false,
  width,
  height,
  className,
}: Props) {
  const posterSrc =
    poster == undefined
      ? undefined
      : `https://image.mux.com/${id}/thumbnail.webp?time=${poster}`

      const src = `https://stream.mux.com/${id}.m3u8`

  return (
    <figure>
      {/** @ts-ignore */}
      <ReactHlsPlayer
        src={src}
        className={className}
        autoPlay={autoPlay}
        playsInline={playsInline}
        controls={controls}
        loop={loop}
        preload={preload ? "auto" : "none"}
        poster={posterSrc}
        width={width}
        height={height}
        muted={muted}
      />

      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
