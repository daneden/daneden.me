import cxs from "cxs"
import { DocumentContext } from "next/dist/next-server/lib/utils"
import Document, { Head, Html, Main, NextScript } from "next/document"
import { ReactElement } from "react"
type Context = DocumentContext

interface Props {
  ids: string[]
  css: string
}

export default class MyDocument extends Document<Props> {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  static async getInitialProps(ctx: Context) {
    const initialProps = await Document.getInitialProps(ctx)
    const styles = cxs.css()
    cxs.reset()
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style dangerouslySetInnerHTML={{ __html: styles }} />
        </>
      ),
    }
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
