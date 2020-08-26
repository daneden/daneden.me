import { DocumentContext } from "next/dist/next-server/lib/utils"
import Document, { Head, Html, Main, NextScript } from "next/document"
import { ReactElement } from "react"
type Context = DocumentContext

interface Props {
  ids: string[]
}

export default class MyDocument extends Document<Props> {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  static async getInitialProps(ctx: Context) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render(): ReactElement<HTMLDocument> {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
