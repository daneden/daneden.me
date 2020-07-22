import cxs from "cxs"
import { useEffect, useRef, useState } from "react"
import ReactDOM from "react-dom"
export const Canvas = () => {
  const ref = useRef<HTMLCanvasElement>(null)
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const style = cxs({
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    animation: "canvasEnter 3s ease, canvasHues 20s linear infinite",
    animationFillMode: "both",
  })

  useEffect(() => {
    const canvas = ref.current

    function resized() {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }

    window.addEventListener("resize", resized)
    window.addEventListener("load", resized)

    // Draw to canvas
    if (canvas !== null) {
      const ctx = canvas.getContext("2d") as CanvasRenderingContext2D
      const w = width
      const h = height
      const r = Math.PI * 2
      ctx.canvas.width = w
      ctx.canvas.height = h

      ctx.fillStyle = "orange"
      ctx.fillRect(0, 0, w, h)
      ctx.filter = "blur(100px)"
      ctx.fillStyle = "green"
      ctx.beginPath()
      ctx.ellipse(0, h / 5, w / 5, w / 5, 0, 0, r)
      ctx.fill()

      ctx.fillStyle = "dodgerblue"
      ctx.beginPath()
      ctx.ellipse(w / 2, h / 2, w / 4, w / 4, 0, 0, r)
      ctx.fill()

      ctx.filter = "blur(150px)"
      ctx.fillStyle = "indigo"
      ctx.beginPath()
      ctx.ellipse(w / 1.2, h / 6, w / 3.5, w / 3.5, 0, 0, r)
      ctx.fill()

      ctx.filter = "blur(100px)"
      ctx.fillStyle = "gold"
      ctx.beginPath()
      ctx.ellipse(w / 6, h / 1.2, w / 3.5, w / 3.5, 0, 0, r)
      ctx.fill()

      ctx.filter = "blur(200px)"
      ctx.fillStyle = "deeppink"
      ctx.beginPath()
      ctx.ellipse(w / 1.25, h / 1.1, w / 3.5, w / 3.5, 0, 0, r)
      ctx.fill()
    }
    return () => {
      window.removeEventListener("resize", resized)
    }
  }, [ref, width, height])

  if (typeof document === "undefined") return null

  return ReactDOM.createPortal(
    <>
      <canvas
        className={style}
        height={height}
        ref={ref}
        width={width}
      ></canvas>
      <style global jsx>{`
        @keyframes canvasEnter {
          from {
            opacity: 0;
          }
        }

        @keyframes canvasHues {
          from {
            filter: hue-rotate(-360deg);
          }
        }
      `}</style>
    </>,
    document.body
  )
}
