import Head from "next/head"
import React, { ReactElement } from "react"
import site from "../data/siteconfig.json"

interface MetatagsProps {
  title?: string
  description: string
  url?: string
  pathname?: string
  thumbnail: string
}

const dnsPrefetchURLs = ["https://stream.mux.com", "https://cdn.usefathom.com"]

function Metatags(props: MetatagsProps): ReactElement<typeof Head> {
  const { title, description, url, pathname, thumbnail } = props
  const pageTitle = title == site.title ? title : `${title} | ${site.title}`

  return (
    <Head>
      {/* Title */}
      <title>{pageTitle}</title>
      <meta content={pageTitle} name="title" />
      <meta content={pageTitle} name="twitter:title" />

      {/* Description */}
      <meta content={description} name="description" />
      <meta content={description} name="twitter:description" />
      <meta content={description} property="og:description" />

      {pathname && <meta content={url + pathname} property="og:url" />}

      {/* Thumbnail */}
      {thumbnail && (
        <>
          <meta content={thumbnail} property="og:image" />
          <meta content={thumbnail} property=" og:image:secure_url" />
          <meta content={thumbnail} name="twitter:image" />
        </>
      )}
      <meta content="1200" property="og:image:width" />
      <meta content="630" property="og:image:height" />
      <meta content="summary_large_image" name="twitter:card" />

      <meta content="en" property="og:locale" />

      {/* Favicon */}
      <link href="/images/favicon.svg" rel="icon" type="image/svg+xml" />
      <link color="#888" href="/images/favicon.svg" rel="mask-icon"></link>

      {dnsPrefetchURLs.map((url, index) => [
        <link href={url} key={`preconnect-${index}`} rel="preconnect" />,
        <link href={url} key={`prefetch-${index}`} rel="dns-prefetch" />,
      ])}
    </Head>
  )
}
export default Metatags
