import { Thumbnail } from "@/components/Metatags"

export default function Head() {
  return (
    <>
      <title>Daniel Eden, Designer</title>
      <Thumbnail url={`https://${process.env.VERCEL_URL}/api/og`} />
    </>
  )
}
