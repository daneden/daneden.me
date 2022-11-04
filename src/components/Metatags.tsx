import Head from "next/head"

interface MetatagsProps {
  title?: string
  description: string
  thumbnail: string
}

const dnsPrefetchURLs = ["https://stream.mux.com"]

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

function Metatags({
  title = "Daniel Eden, Designer",
  description,
  thumbnail,
}: MetatagsProps) {
  return (
    <Head>
      {/* Title */}
      <Title>{title}</Title>

      {/* Description */}
      <Description>{description}</Description>

      {/* Thumbnail */}
      {thumbnail && <Thumbnail url={thumbnail} />}

      <meta content="en" property="og:locale" />

      {/* Favicon */}
      <link href="/images/face.jpeg" rel="icon" type="image/jpeg" />

      {dnsPrefetchURLs.map((url, index) => [
        <link href={url} key={`preconnect-${index}`} rel="preconnect" />,
        <link href={url} key={`prefetch-${index}`} rel="dns-prefetch" />,
      ])}
    </Head>
  )
}
export default Metatags
