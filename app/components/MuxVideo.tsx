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
  return (
    <figure>
      <video
        className={className}
        autoPlay={autoPlay}
        controls={controls}
        loop={loop}
        preload={preload ? "auto" : "none"}
        playsInline={playsInline}
        poster={posterSrc}
        muted={muted}
        width={width}
        height={height}
      >
        <source
          src={`https://stream.mux.com/${id}.m3u8`}
          type="application/x-mpegURL"
        />
      </video>

      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
