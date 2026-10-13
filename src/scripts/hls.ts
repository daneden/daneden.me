// Plays Mux HLS streams. Safari (and anything else with native HLS) gets the
// stream as a plain src; everyone else lazy-loads hls.js.
const videos = document.querySelectorAll<HTMLVideoElement>("video[data-hls-src]")

if (videos.length > 0) {
  const probe = document.createElement("video")
  const native = probe.canPlayType("application/vnd.apple.mpegurl") !== ""

  if (native) {
    videos.forEach((video) => (video.src = video.dataset.hlsSrc!))
  } else {
    import("hls.js").then(({ default: Hls }) => {
      if (!Hls.isSupported()) return

      videos.forEach((video) => {
        const hls = new Hls({ enableWorker: false })
        hls.attachMedia(video)
        hls.on(Hls.Events.MEDIA_ATTACHED, () => hls.loadSource(video.dataset.hlsSrc!))
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
}
