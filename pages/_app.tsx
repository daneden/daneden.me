import * as Fathom from "fathom-client"
import { AppProps } from "next/app"
import { useRouter } from "next/router"
import { ReactFragment, useEffect } from "react"
import "../public/fonts/fonts.css"

function App({ Component, pageProps }: AppProps): ReactFragment {
  const router = useRouter()

  useEffect(() => {
    // Initialize Fathom when the app loads
    Fathom.load("WXBIFABH", {
      honorDNT: true,
      includedDomains: ["daneden.me"],
    })

    function logPageEndReached(e: Event) {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        Fathom.trackGoal("YD669UL2", 0)
      }
    }

    window.addEventListener("scroll", logPageEndReached)

    function onRouteChangeComplete() {
      Fathom.trackPageview()
    }
    // Record a pageview when route changes
    router.events.on("routeChangeComplete", onRouteChangeComplete)

    // Unassign event listener
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete)
      window.removeEventListener("scroll", logPageEndReached)
    }
  })

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default App
