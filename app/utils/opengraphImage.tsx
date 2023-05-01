import widont from "@/app/utils/widont"
import { ImageResponse } from "next/server"

const tiemposHeadline = fetch(
  new URL("https://daneden.me/og-fonts/TiemposHeadline-Light.otf")
).then((res) => res.arrayBuffer())

const soehne = fetch(
  new URL("https://daneden.me/og-fonts/Soehne-Buch.otf")
).then((res) => res.arrayBuffer())

const defaultTitle = "Daniel Eden, Designer"

export default async function opengraphImage(title = defaultTitle) {
  const tiemposFontData = await tiemposHeadline
  const soehneFontData = await soehne

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: "black",
          backgroundSize: "150px 150px",
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "stretch",
          justifyContent: "center",
          flexDirection: "column",
          flexWrap: "nowrap",
          gap: 40,
        }}
      >
        <div
          style={{
            fontFamily: '"Tiempos Headline"',
            fontSize: 80,
            fontStyle: "normal",
            color: "white",
            padding: "0 120px",
            lineHeight: 1.4,
            whiteSpace: "pre-wrap",
          }}
        >
          {widont(title!)}
        </div>
        <div
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            color: "rgba(255, 255, 255, 0.7)",
            transform: "rotate(90deg) translateY(-50%)",
            fontSize: 40,
            fontFamily: "Soehne",
            position: "absolute",
            right: -80,
          }}
        >
          {title != defaultTitle ? defaultTitle : null}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Tiempos Headline",
          data: tiemposFontData,
          style: "normal",
        },
        {
          name: "Soehne",
          data: soehneFontData,
          style: "normal",
        },
      ],
    }
  )
}
