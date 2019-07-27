interface Site {
  siteMetadata: {
    authorName: string
    description: string
    siteUrl: string
    title: string
  }
}

export interface LayoutQueryData {
  site: Site
}
