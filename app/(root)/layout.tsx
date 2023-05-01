import SkipLink from "@/app/components/SkipLink"
import { Analytics } from "@vercel/analytics/react"
import { soehne, tiemposHeadline, tiemposText } from "../fonts"
import "../styles/global.css"

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
