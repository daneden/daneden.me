import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
export const Canvas = () => {
  const ref = useRef<HTMLElement>()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.body
    setMounted(true)
  })

  return mounted
    ? createPortal(
        <>
          <div className="canvas"></div>
          <style jsx>{`
            .canvas {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              z-index: -1;
              animation: canvasEnter 3s ease, canvasHues 20s linear infinite;
              animation-fill-mode: both;
              backgroundcolor: orange;
              background-image: radial-gradient(
                  circle at top left,
                  #008000ff,
                  #00800000
                ),
                radial-gradient(circle at center, #1e90ffff, #1e90ff00),
                radial-gradient(circle at bottom right, #4b0082ff, #4b008200),
                radial-gradient(circle at bottom left, #ffd700ff, #ffd70000),
                radial-gradient(circle at bottom, #ff1493ff, #ff149300);
            }

            @keyframes canvasEnter {
              from {
                opacity: 0;
                transform: scale(2);
              }
            }

            @keyframes canvasHues {
              from {
                filter: hue-rotate(-360deg);
              }
            }
          `}</style>
        </>,
        ref.current as Element
      )
    : null
}
