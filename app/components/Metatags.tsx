export function Description({ children }: { children: string }) {
  return (
    <>
      <meta content={children} name="description" />
      <meta content={children} property="og:description" />
    </>
  )
}

export function Title({ children }: { children: string }) {
  return (
    <>
      <meta content={children} name="title" />
      <meta content={children} name="twitter:title" />
    </>
  )
}

export function Thumbnail({ url }: { url: string }) {
  return (
    <>
      <meta content={url} property="og:image" />
      <meta content={url} property=" og:image:secure_url" />
      <meta content={url} name="twitter:image" />
      <meta content="1200" property="og:image:width" />
      <meta content="630" property="og:image:height" />
      <meta content="summary_large_image" name="twitter:card" />
    </>
  )
}

export function Favicon() {
  return <link href="/images/face.jpeg" rel="icon" type="image/jpeg" />
}
