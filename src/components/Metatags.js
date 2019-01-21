import React from "react"
import Helmet from "react-helmet"

function Metatags(props) {
  const { title, description, url, pathname, thumbnail } = props

  return (
    <Helmet
      defaultTitle={data.site.siteMetadata.title}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
    >
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
    </Helmet>
  )
}
export default Metatags
