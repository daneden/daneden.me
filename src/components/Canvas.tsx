import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react"
import { createPortal } from "react-dom"
import renderWebGLLayer from "../webGL/webGLRenderer"
export const Canvas = () => {
  const docRef = useRef<HTMLElement>()
  const [mounted, setMounted] = useState(false)
  const teardown = useRef<() => void>()
  const [scaleAmount, setScaleAmount] = useState(1)
  const rotateAmount = 12

  const canvasRef = useCallback((node) => {
    if (node !== null) {
      const { canceller } = renderWebGLLayer(node)
      teardown.current = canceller
    }
  }, [])

  useEffect(function mountCanvas() {
    docRef.current = document.body
    setMounted(true)

    return () => {
      if (teardown.current) {
        teardown.current()
      }
    }
  }, [])

  const applyTransform = useCallback(() => {
    if (typeof window === "undefined") {
      return
    }

    const { abs, cos, sin, PI } = Math
    const radiansFactor = PI / 180
    const { innerHeight: h, innerWidth: w } = window
    const W =
      w * abs(cos(rotateAmount * radiansFactor)) +
      h * abs(sin(rotateAmount * radiansFactor))
    const H =
      w * abs(sin(rotateAmount * radiansFactor)) +
      h * abs(cos(rotateAmount * radiansFactor))

    const a = Math.min(w / W, h / H)
    setScaleAmount(a)
  }, [])

  // If the scale amount hasn't yet been calculated, call applyTransform
  if (scaleAmount === 1) {
    applyTransform()
  }

  useLayoutEffect(
    function transformCanvas() {
      if (typeof window === "undefined") {
        return
      }

      window.addEventListener("resize", applyTransform)

      return () => {
        window.removeEventListener("resize", applyTransform)
      }
    },
    [applyTransform]
  )

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
              will-change: opacity, transform;
            }

            @keyframes canvasEnter {
              from {
                opacity: 0;
              }
            }
          `}</style>
          <style jsx>{`
            .canvas {
              transform: scale(${scaleAmount}) rotate(${rotateAmount}deg);
            }
          `}</style>
        </>,
        docRef.current as Element
      )
    : null
}
