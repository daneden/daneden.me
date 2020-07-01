import { Atoms } from "@/designSystem"
import { css, Global } from "@emotion/core"
import FontFaceObserver from "fontfaceobserver"
import { GetServerSideProps } from "next"
import Head from "next/head"
import React, { ReactFragment } from "react"
import site from "../siteconfig.json"

const { useEffect } = React

declare global {
  interface Window {
    FontFaceObserver: unknown
  }
}

export default function OpenGraphImagePage({
  title = "Hello World",
}): ReactFragment {
  useEffect(() => {
    window.FontFaceObserver = FontFaceObserver
  })

  const parsedTitle =
    title !== site.title ? title.replace(/ ([^ ]*)$/, "\u00A0$1") : title

  return (
    <>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
          }

          html,
          #__next {
            width: 1200px;
            height: 1200px;
            background-color: ${Atoms.colors.text};
          }

          body {
            position: relative;
          }

          .title {
            font: 80px/1 "Soehne Breit Web", sans-serif;
            color: ${Atoms.colors.wash};
            max-width: 1024px;
          }

          .title p {
            position: absolute;
            top: 50%;
            left: 66px;
            transform: translateY(-55%);
            margin: 0;
          }

          .author {
            font: 36px/1 "National 2 Web", sans-serif;
            color: ${Atoms.colors.whiteAlpha};
            transform: rotate(-90deg) translateY(300%);
            position: absolute;
            top: 50%;
            right: 0;
          }
        `}
      />

      <Head>
        <meta name="robots" content="noindex" />
        <link rel="stylesheet" href="/fonts/fonts.css" />
      </Head>

      <div
        className="title"
        style={{ position: "relative", height: "100%", width: "100%" }}
      >
        <p>{parsedTitle}</p>
      </div>

      {site.title !== title && <p className="author">{site.title}</p>}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    req: { headers },
    res,
    query: { title = "Hello World" },
  } = context

  console.log(headers)

  return {
    props: {
      title,
    },
  }
}
