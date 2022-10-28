import Footer from "@/components/Footer"
import Header from "@/components/Header"
import SkipLink from "@/components/SkipLink"
import Wrapper from "@/components/Wrapper"
import siteConfig from "@/data/siteconfig.json"
import "./styles/fonts/fonts.css"
import "./styles/global.css"
import "./styles/syntax.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head></head>
      <body>
        <SkipLink />
        <Header siteTitle={siteConfig.title} />
        <Wrapper>{children}</Wrapper>
        <Footer />

        <style jsx>{`
          header {
            margin-bottom: var(--sp-l);
            padding-bottom: var(--sp-xl);
          }

          header > :global(h1) {
            margin-bottom: 0 !important;
            padding-bottom: 0 !important;
          }
        `}</style>
      </body>
    </html>
  )
}
