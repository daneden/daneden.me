import { Favicon, Thumbnail } from "@/components/Metatags"

export default function Head() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <title>Daniel Eden, Designer</title>
      <Thumbnail url={`https://${process.env.VERCEL_URL}/api/og`} />
      <Favicon />
    </>
  )
}
