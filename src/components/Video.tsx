interface Props {
  autoPlay: boolean
  caption?: string
  controls: boolean
  id: string
  loop: boolean
  preload: boolean
}

const Video = ({
  autoPlay = false,
  caption,
  controls = true,
  id,
  loop = false,
  preload = true,
}: Props) => {
  return (
    <figure>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        autoPlay={autoPlay}
        controls={controls}
        loop={loop}
        preload={preload ? "auto" : "none"}
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
