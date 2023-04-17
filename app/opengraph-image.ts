import opengraphImage from "@/utils/opengraphImage"

export default async function og() {
  return await opengraphImage()
}

export const runtime = "edge"
