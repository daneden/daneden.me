"use client"

import { useSelectedLayoutSegments } from "next/navigation"
import ServerHeader from "./ServerHeader"

export default function Header() {
  const segments = useSelectedLayoutSegments()

  return <ServerHeader activeSegments={segments} />
}
