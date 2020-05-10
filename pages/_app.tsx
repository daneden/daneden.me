import "katex/dist/katex.min.css"
import { AppProps } from "next/app"
import { ReactFragment } from "react"
import "../css/fonts.css"
import "../css/syntax.css"

function MyApp({ Component, pageProps }: AppProps): ReactFragment {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
