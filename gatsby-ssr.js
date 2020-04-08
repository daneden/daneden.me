import React from 'react'
export const onRenderBody = ({ setHeadComponents }) => {
  const prefetch = ['AyerPosterAngular-SemiboldItalic-Web']
  const preload = [
    'National2Web-Regular',
    'National2Web-RegularItalic',
    'AyerPosterAngular-SemiboldItalic-Web',
  ]

  setHeadComponents([
    prefetch.map((font, key) => (
      <link
        key={key}
        rel="prefetch"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
        href={`/fonts/${font}.woff2`}
      />
    )),

    preload.map((font, key) => (
      <link
        key={key}
        rel="preload"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
        href={`/fonts/${font}.woff2`}
      />
    )),
  ])
}

export { wrapRootElement } from './src/components/designSystem/DesignSystemProvider'
