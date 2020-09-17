interface MusicResponse {
  id: string
  type: string
  href: string
  attributes: {
    artwork: {
      width: number
      height: number
      url: string
      bgColor: string
      textColor1: string
      textColor2: string
      textColor3: string
      textColor4: string
    }
    artistName?: string
    curatorName?: string
    url: string
    name: string
  }
}
