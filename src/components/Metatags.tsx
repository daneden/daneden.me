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
      <meta name="title" content={pageTitle} />

      <meta name="description" content={description} />

      {pathname && <meta property="og:url" content={url + pathname} />}

      {thumbnail && <meta property="og:image" content={thumbnail} />}

      {thumbnail && (
        <meta property=" og:image:secure_url" content={thumbnail} />
      )}

      <meta property="og:description" content={description} />

      <meta property="og:image:width" content="1200" />

      <meta property="og:image:height" content="630" />

      <meta property="og:locale" content="en" />

      <meta name="twitter:title" content={pageTitle} />

      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />

      {thumbnail && <meta name="twitter:image" content={thumbnail} />}

      <link rel="shortcut icon" href="/images/favicon.png" />

      {dnsPrefetchURLs.map((url) => [
        <link rel="preconnect" href={url} />,
        <link rel="dns-prefetch" href={url} />,
      ])}
    </Head>
  )
}
export default Metatags
