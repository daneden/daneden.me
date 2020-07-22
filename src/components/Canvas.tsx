import cxs from "cxs"
import ReactDOM from "react-dom"
export const Canvas = () => {
  const style = cxs({
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    animation: "canvasEnter 3s ease, canvasHues 20s linear infinite",
    animationFillMode: "both",
    backgroundColor: "orange",
    backgroundImage: `radial-gradient(circle at top left, #008000FF, #00800000),
      radial-gradient(circle at center, #1E90FFFF, #1E90FF00),
      radial-gradient(circle at bottom right, #4B0082FF, #4B008200),
      radial-gradient(circle at bottom left, #FFD700FF, #FFD70000),
      radial-gradient(circle at bottom, #FF1493FF, #FF149300)
    `,
  })

  if (typeof document === "undefined") return null

  return ReactDOM.createPortal(
    <>
      <div className={style}></div>
      <style global jsx>{`
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
    document.body
  )
}
