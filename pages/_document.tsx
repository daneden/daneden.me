import { extractCritical } from "emotion-server"
import Document, { Head, Main, NextScript } from "next/document"
import { ReactElement } from "react"

interface Props {
  ids: string[]
  css: string
}

export default class MyDocument extends Document<Props> {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  static getInitialProps({ renderPage }) {
    const page = renderPage()
    const styles = extractCritical(page.html)
    return { ...page, ...styles }
  }

  render(): ReactElement<HTMLDocument> {
    return (
      <html lang="en">
        <Head>
          <style
            data-emotion-css={this.props.ids.join(" ")}
            dangerouslySetInnerHTML={{ __html: this.props.css }}
          />
          <link rel="shortcut icon" href="/images/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
