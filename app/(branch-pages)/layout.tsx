import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Wrapper from "@/components/Wrapper"
import siteConfig from "@/data/siteconfig.json"
import "../styles/fonts/fonts.css"
import "../styles/global.css"
import "../styles/syntax.css"

export const metadata = {
  title: {
    template: "%s | Daniel Eden",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="sp-m">
      <body>
        <Header siteTitle={siteConfig.title} />
        <Wrapper>{children}</Wrapper>
        <Footer />
      </body>
    </html>
  )
}
