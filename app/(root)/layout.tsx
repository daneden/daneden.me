import SkipLink from "@/components/SkipLink"
import { Analytics } from "@vercel/analytics/react"
import { soehne, tiemposHeadline, tiemposText } from "../fonts"
import "../styles/global.css"
import "../styles/syntax.css"
import "./home.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      className={`${soehne.variable} ${tiemposHeadline.variable} ${tiemposText.variable}`}
    >
      <body>
        <SkipLink />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
