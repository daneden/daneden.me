interface Props {
  autoPlay?: boolean
  caption?: string
  controls?: boolean
  id: string
  loop?: boolean
  preload?: boolean
  playsInline?: boolean
  // The timestamp to render for the poster image. No poster image is shown when this value is undefined.
  poster?: number
  muted?: boolean
  width?: number
  height?: number
  className?: string
}

/**
 * Renders a plain <video>; src/scripts/hls.ts attaches hls.js to any
 * video[data-hls-src] in browsers that can't play HLS natively.
 */
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
        data-hls-src={`https://stream.mux.com/${id}.m3u8`}
        autoPlay={autoPlay}
        className={className}
        controls={controls}
        height={height}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        poster={posterSrc}
        preload={preload ? "auto" : "none"}
        width={width}
      />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
