import { AppProps } from "next/app"
import "../public/fonts/fonts.css"

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default App
