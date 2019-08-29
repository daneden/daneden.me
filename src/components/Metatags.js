import React from "react"
import Helmet from "react-helmet"

function Metatags(props) {
  const { title, defaultTitle, description, url, pathname, thumbnail } = props

  return (
    <Helmet defaultTitle={defaultTitle} titleTemplate={`%s | ${defaultTitle}`}>
      <html lang="en" />
      <title>{title}</title>
      <meta name="title" content={title} />

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

      <meta name="twitter:title" content={title} />

      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />

      {thumbnail && <meta name="twitter:image" content={thumbnail} />}

      <link rel="preconnect" href="https://daneden.imgix.net" />
      <link rel="dns-prefetch" href="https://daneden.imgix.net" />
      <link rel="preconnect" href="http://res.cloudinary.com" />
      <link rel="dns-prefetch" href="http://res.cloudinary.com" />
    </Helmet>
  )
}
export default Metatags
