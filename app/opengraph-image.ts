import opengraphImage from "@/app/utils/opengraphImage"

export const alt = "Daniel Eden, Designer"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export const runtime = "nodejs"

export default async function Image() {
  return await opengraphImage()
}
