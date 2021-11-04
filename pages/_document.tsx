import Document, { Head, Html, Main, NextScript } from "next/document"

class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* JetBrains Mono (for code blocks) */}
          <link
            href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
