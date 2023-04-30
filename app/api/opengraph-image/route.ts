import opengraphImage from "@/utils/opengraphImage"
import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get("title")

  return await opengraphImage(title ?? undefined)
}

export const runtime = "edge"
