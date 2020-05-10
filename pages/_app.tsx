import "katex/dist/katex.min.css"
import { AppProps } from "next/app"
import "../css/fonts.css"
import "../css/syntax.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
