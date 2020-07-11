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

const dnsPrefetchURLs = [
  "https://daneden.imgix.net",
  "https://videodelivery.net",
  "https://stats.g.doubleclick.net",
  "https://www.google.com",
  "https://embed.videodelivery.net",
  "https://www.googletagmanager.com",
  "https://www.google-analytics.com",
]

function Metatags(props: MetatagsProps): ReactElement<typeof Head> {
  const { title, description, url, pathname, thumbnail } = props
  const pageTitle = title == site.title ? title : `${title} | ${site.title}`

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta content={pageTitle} name="title" />

      <meta content={description} name="description" />

      {pathname && <meta content={url + pathname} property="og:url" />}

      {thumbnail && <meta content={thumbnail} property="og:image" />}

      {thumbnail && (
        <meta content={thumbnail} property=" og:image:secure_url" />
      )}

      <meta content={description} property="og:description" />

      <meta content="1200" property="og:image:width" />

      <meta content="630" property="og:image:height" />

      <meta content="en" property="og:locale" />

      <meta content={pageTitle} name="twitter:title" />

      <meta content={description} name="twitter:description" />
      <meta content="summary_large_image" name="twitter:card" />

      {thumbnail && <meta content={thumbnail} name="twitter:image" />}

      <link href="/images/favicon.png" rel="shortcut icon" />

      {dnsPrefetchURLs.map((url, index) => [
        <link href={url} key={`preconnect-${index}`} rel="preconnect" />,
        <link href={url} key={`prefetch-${index}`} rel="dns-prefetch" />,
      ])}
    </Head>
  )
}
export default Metatags
