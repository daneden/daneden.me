import widont from "@/app/utils/widont"
import { readFileSync } from "fs"
import { ImageResponse } from "next/og"
import { join } from "path"

const tiemposHeadline = readFileSync(
  join(process.cwd(), "public/og-fonts/TiemposHeadline-Light.otf")
)

const soehne = readFileSync(
  join(process.cwd(), "public/og-fonts/Soehne-Buch.otf")
)

const defaultTitle = "Daniel Eden, Designer"

export default async function opengraphImage(title = defaultTitle) {

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
          data: tiemposHeadline,
          style: "normal",
        },
        {
          name: "Soehne",
          data: soehne,
          style: "normal",
        },
      ],
    }
  )
}
