import { Analytics } from "@vercel/analytics/react"
import type { AppProps } from "next/app"
import "../src/fonts/fonts.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
