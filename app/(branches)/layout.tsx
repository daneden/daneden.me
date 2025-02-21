import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"
import SkipLink from "@/app/components/SkipLink"
import Wrapper from "@/app/components/Wrapper"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { JetBrains_Mono } from "next/font/google"
import { tiemposHeadline, tiemposText } from "../fonts"
import sharedMetadata from "../metadata"
import "../styles/global.css"
import "../styles/syntax.css"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata = sharedMetadata

export default function BranchPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      className={`${tiemposHeadline.variable} ${tiemposText.variable}`}
    >
      <body>
        <SkipLink />
        <div className={`sp-m ${jetbrainsMono.variable}`}>
          <Header />
          <Wrapper>{children}</Wrapper>
          <Footer />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
