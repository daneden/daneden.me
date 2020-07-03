import { initGA, logEvent, logPageView } from "@/utils/analytics"
import { AppProps } from "next/app"
import { ReactFragment, useEffect } from "react"
import "../public/fonts/fonts.css"

export function reportWebVitals({
  id,
  name,
  label,
  value,
}: {
  id: string
  name: string
  label: string
  value: number
}): void {
  if (window?.GA_INITIALIZED) {
    logEvent({
      category: `Next.js ${label} metric`,
      action: name,
      value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
      label: id, // id unique to current page load
      nonInteraction: true, // avoids affecting bounce rate.
    })
  }
}

function App({ Component, pageProps }: AppProps): ReactFragment {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  })

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default App
