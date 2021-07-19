import Head from "next/head"

import { Layout } from "@components"

import { ThemeProvider } from "react-jss"

const theme: Jss.Theme = {
  palette: {
    primary: "#191923",
    secondary: "#C81D25",
    grey: "#A0A0A0",
    white: "#FBFEF9",
  },
  spacing: {
    sm: "8px",
    md: "16px",
    lg: "24px",
  },
  component: {
    nav: { height: "100px" },
    socialBar: { width: "75px" },
  },
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Anthony W.</title>
        <meta
          name="description"
          content="Anthony Washington Senior Software Engineer personal website"
        />
        <meta name="msapplication-TileColor" content="#191923" />
        <meta name="theme-color" content="#191923" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/public/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/public/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/public/favicon-16x16.png"
        />
        <link rel="manifest" href="/public/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/public/safari-pinned-tab.svg"
          color="#191923"
        />
        <link
          rel="preload"
          as="font"
          href="/public/fonts/BeVietnam/BeVietnam-Medium.ttf"
          crossOrigin=""
        />
        <link
          rel="preload"
          as="font"
          href="/public/fonts/BeVietnam/BeVietnam-Light.ttf"
          crossOrigin=""
        />
        <link
          rel="preload"
          as="font"
          href="/public/fonts/Roboto/Roboto-Light.ttf"
          crossOrigin=""
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </>
  )
}
