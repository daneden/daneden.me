import "katex/dist/katex.min.css"
import { AppProps } from "next/app"
import { ReactFragment, useEffect } from "react"
import "../css/fonts.css"
import "../css/syntax.css"
import { initGA, logEvent } from "../utils/analytics"

export function reportWebVitals({ id, name, label, value }): void {
  logEvent({
    category: `Next.js ${label} metric`,
    action: name,
    value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
    label: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  })
}

function App({ Component, pageProps }: AppProps): ReactFragment {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
  })

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default App
