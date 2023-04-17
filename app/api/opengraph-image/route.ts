import opengraphImage from "@/utils/opengraphImage"
import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get("title")

  return opengraphImage(title ?? undefined)
}

export const config = {
  runtime: "edge",
}
