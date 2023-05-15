import { ImageResponse } from "next/server"

export const alt = "About Acme"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"
export const runtime = "edge"

export default function og() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#001d3d",
          color: "#f2fcfe",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex" }}>
          <svg
            viewBox="0 0 373 363"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: "absolute",
              transform: "translate(-50%, -50%)",
              margin: "0 auto",
              opacity: 0.15,
            }}
          >
            <path
              d="M186.609 346.591V315.338M82.1088 325.941L97.7349 298.876M284.272 325.941L268.646 298.876M66.9709 141.009C66.9709 207.083 120.535 260.647 186.609 260.647C252.682 260.647 306.246 207.083 306.246 141.009M16 255.872L43.2532 240.137M356.626 255.676L329.712 240.137M114.338 88.7592C114.338 88.7592 151.943 45.8475 186.609 16M186.609 16C220.337 45.8475 256.926 88.7592 256.926 88.7592M186.609 16V141.009"
              stroke="currentcolor"
              stroke-width="31.2523"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <code>Deep Dive</code>
        <h1 style={{ fontSize: "5rem", fontWeight: 700 }}>Solstice</h1>
      </div>
    )
  )
}
