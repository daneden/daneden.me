import { createContext } from "react"

export interface BrowserSupportDict {
  webp: boolean
}

export default createContext<BrowserSupportDict>({ webp: false })
