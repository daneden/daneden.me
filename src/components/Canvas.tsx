import { useCallback, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import renderWebGLLayer from "../webGL/webGLRenderer"
export const Canvas = () => {
  const docRef = useRef<HTMLElement>()
  const [mounted, setMounted] = useState(false)
  const teardown = useRef<() => void>()

  const canvasRef = useCallback((node) => {
    if (node !== null) {
      const { canceller } = renderWebGLLayer(node)
      teardown.current = canceller
    }
  }, [])

  useEffect(() => {
    docRef.current = document.body
    setMounted(true)

    return () => {
      if (teardown.current) {
        teardown.current()
      }
    }
  }, [])

  return mounted
    ? createPortal(
        <>
          <canvas className="canvas" ref={canvasRef}></canvas>
          <style jsx>{`
            .canvas {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: -1;
              animation: canvasEnter 3s ease;
              animation-fill-mode: both;
              will-change: opacity;
            }

            @keyframes canvasEnter {
              from {
                opacity: 0;
              }
            }
          `}</style>
        </>,
        docRef.current as Element
      )
    : null
}
