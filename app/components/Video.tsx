interface Props {
  autoPlay: boolean
  caption?: string
  controls: boolean
  id: string
  loop: boolean
  preload: boolean
  playsInline: boolean
  poster?: string
}

const Video = ({
  autoPlay = false,
  caption,
  controls = true,
  id,
  loop = false,
  preload = true,
  playsInline = false,
  poster,
}: Props) => {
  return (
    <figure>
      <video
        autoPlay={autoPlay}
        controls={controls}
        loop={loop}
        preload={preload ? "auto" : "none"}
        playsInline={playsInline}
        poster={poster}
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

export default Video
