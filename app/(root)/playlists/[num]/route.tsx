import { ImageResponse } from "next/server"

// Route segment config
export const runtime = "edge"

// Image metadata
export const alt = "About Acme"
export const size = {
  width: 2048,
  height: 2048,
}

export const contentType = "image/png"

const map = (value, x1, y1, x2, y2) =>
  ((value - x1) * (y2 - x2)) / (y1 - x1) + x2

export async function GET(_req: Request, { params: { num } }) {
  let playlistDate = "202401"

  const regexpResult = `${num}`.match(/[0-9]{6}/)

  if (regexpResult != undefined && regexpResult?.length > 0) {
    playlistDate = regexpResult?.[0]
  }

  const [h, s, l] = [
    Math.round(map(parseInt(playlistDate) % 12, 0, 11, 0, 360)),
    Math.round(map(parseInt(playlistDate.slice(4)) % 12, 0, 12, 40, 80)),
    Math.round(map(parseInt(playlistDate.slice(2, 4)) % 10, 0, 10, 20, 50)),
  ]

  const hsl = `hsl(${h}, ${s}%, ${l}%)`
  const hslFga = `hsl(${h}, ${s}%, ${l * 2}%)`
  const hslFgb = `hsl(${h}, ${s}%, ${l * 2}%, 0.6)`

  console.log(hsl)

  const [year, month] = [playlistDate.slice(0, 4), playlistDate.slice(4)]

  // Font
  const obviously = fetch(
    new URL("./Obviously-ExtendedItalic.otf", import.meta.url)
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 768,
          background: hsl,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          wordBreak: "break-all",
          textAlign: "center",
          lineHeight: 0.65,
        }}
      >
        <span
          style={{
            marginTop: "-0.5em",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: hslFga,
          }}
        >
          <span>{year}</span>
          <span style={{ color: hslFgb }}>{month}</span>
        </span>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "Obviously",
          data: await obviously,
          style: "italic",
          weight: 400,
        },
      ],
    }
  )
}
