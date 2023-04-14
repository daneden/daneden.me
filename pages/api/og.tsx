import siteConfig from "@/data/siteconfig.json"
import widont from "@/utils/widont"
import { ImageResponse } from "@vercel/og"
import { NextRequest } from "next/server"

const tiemposHeadline = fetch(
  new URL(
    "../../app/styles/fonts/ogFonts/TiemposHeadline-Light.otf",
    import.meta.url
  )
).then((res) => res.arrayBuffer())

const soehne = fetch(
  new URL("../../app/styles/fonts/ogFonts/Soehne-Buch.otf", import.meta.url)
).then((res) => res.arrayBuffer())

export default async function handler(req: NextRequest) {
  try {
    const tiemposFontData = await tiemposHeadline
    const soehneFontData = await soehne
    const { searchParams } = new URL(req.url)

    // ?title=<title>
    const hasTitle = searchParams.has("title")
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : siteConfig.title

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
            {title != siteConfig.title ? siteConfig.title : null}
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
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}

export const config = {
  runtime: "edge",
}
