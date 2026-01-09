import opengraphImage from "@/app/utils/opengraphImage"

export const runtime = "nodejs"

export async function GET() {
  return await opengraphImage()
}
