import { extractCritical } from "emotion-server"
import Document, { Head, Main, NextScript } from "next/document"

interface Props {
  ids: any
  css: any
}

export default class MyDocument extends Document<Props> {
  static getInitialProps({ renderPage }) {
    const page = renderPage()
    const styles = extractCritical(page.html)
    return { ...page, ...styles }
  }

  render() {
    return (
      <html>
        <Head>
          <style
            data-emotion-css={this.props.ids.join(" ")}
            dangerouslySetInnerHTML={{ __html: this.props.css }}
          />
          <link rel="shortcut icon" href="/static/images/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
