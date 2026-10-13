// Plays Mux HLS streams with hls.js wherever it's supported. Native playback is
// only the fallback: Chrome answers "maybe" to canPlayType for HLS but can't
// play these streams.
const videos = document.querySelectorAll<HTMLVideoElement>("video[data-hls-src]")

if (videos.length > 0) {
  import("hls.js").then(({ default: Hls }) => {
    videos.forEach((video) => {
      const src = video.dataset.hlsSrc!

      if (!Hls.isSupported()) {
        video.src = src
        return
      }

      const hls = new Hls({ enableWorker: false })
      hls.attachMedia(video)
      hls.on(Hls.Events.MEDIA_ATTACHED, () => hls.loadSource(src))
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        if (video.autoplay) video.play().catch(() => {})
      })
      hls.on(Hls.Events.ERROR, (_, data) => {
        if (!data.fatal) return
        if (data.type === Hls.ErrorTypes.NETWORK_ERROR) hls.startLoad()
        else if (data.type === Hls.ErrorTypes.MEDIA_ERROR) hls.recoverMediaError()
      })
    })
  })
}
