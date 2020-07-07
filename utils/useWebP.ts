import { useEffect, useState } from "react"
import { checkWebPSupport } from "./checkWebPSupport"

export const useWebP = (defaultValue = false) => {
  const [supported, setSupported] = useState(defaultValue)

  useEffect(() => {
    checkWebPSupport((result) => {
      setSupported(result)
    })
  }, [])

  return supported
}
