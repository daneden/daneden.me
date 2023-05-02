import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"
import SkipLink from "@/app/components/SkipLink"
import Wrapper from "@/app/components/Wrapper"
import { Analytics } from "@vercel/analytics/react"
import { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import { soehne, tiemposHeadline, tiemposText } from "../fonts"
import "../styles/global.css"
import "../styles/syntax.css"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    template: `%s | "Daniel Eden, Designer"`,
    absolute: "Daniel Eden, Designer",
  },
  description:
    "The personal site, blog, and portfolio of Daniel Eden, a designer writing and thinking about design systems.",
}

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
          <Header />
          <Wrapper>{children}</Wrapper>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
