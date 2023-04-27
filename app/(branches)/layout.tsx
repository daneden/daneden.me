import Footer from "@/components/Footer"
import Header from "@/components/Header"
import SkipLink from "@/components/SkipLink"
import Wrapper from "@/components/Wrapper"
import defaultMetadata, { config } from "@/data/siteconfig"
import { Analytics } from "@vercel/analytics/react"
import { JetBrains_Mono } from "next/font/google"
import { soehne, tiemposHeadline, tiemposText } from "../fonts"
import "../styles/global.css"
import "../styles/syntax.css"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata = defaultMetadata

export default function BranchPageLayout({
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
        <div className={`sp-m ${jetbrainsMono.variable}`}>
          <Header siteTitle={config.title} />
          <Wrapper>{children}</Wrapper>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
