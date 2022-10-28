import GlobalStyles from "@/components/GlobalStyles"
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
      <head>
        <GlobalStyles />
      </head>
      <body>{children}</body>
    </html>
  )
}
