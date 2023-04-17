import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Wrapper from "@/components/Wrapper"
import defaultMetadata, { config } from "@/data/siteconfig"
import { JetBrains_Mono } from "next/font/google"
import "../styles/fonts/fonts.css"
import "../styles/global.css"
import "../styles/syntax.css"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`sp-m ${jetbrainsMono.variable}`}>
      <body>
        <Header siteTitle={config.title} />
        <Wrapper>{children}</Wrapper>
        <Footer />
      </body>
    </html>
  )
}
