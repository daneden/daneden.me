import localFont from "next/font/local"

export const soehne = localFont({
  src: [
    {
      path: "./soehne-web-buch-kursiv.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./soehne-web-buch.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./soehne-web-dreiviertelfett-kursiv.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./soehne-web-dreiviertelfett.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "auto",
})

export const tiemposHeadline = localFont({
  src: [
    {
      path: "./TiemposHeadlineWeb-Light.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./TiemposHeadlineWeb-LightItalic.woff2",
      weight: "200",
      style: "italic",
    },
  ],
  variable: "--font-heading",
  display: "auto",
})

export const tiemposText = localFont({
  src: [
    {
      path: "./TiemposTextWeb-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./TiemposTextWeb-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./TiemposTextWeb-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./TiemposTextWeb-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-serif",
  display: "auto",
})
