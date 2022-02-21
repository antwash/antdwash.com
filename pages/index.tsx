import Head from "next/head"

import { Layout } from "@components"

import { ThemeProvider } from "react-jss"

const theme: Jss.Theme = {
  palette: {
    background: "#191923",
    primary: "#FBFEF9",
    secondary: "#C81D25",
    secondaryTint: "rgba(200, 29, 37, 0.1)",
    grey: "#A0A0A0",
  },
  spacing: {
    sm: ".8rem",
    md: "1.6rem",
    lg: "3.2rem",
    xl: "6.4rem",
  },
  component: {
    nav: { height: "10rem" },
    socialBar: { width: "10rem" },
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
          rel="prefetch"
          as="font"
          href="/public/fonts/BeVietnam/BeVietnam-Medium.ttf"
          crossOrigin=""
        />
        <link
          rel="prefetch"
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
