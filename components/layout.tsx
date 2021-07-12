import React from "react"

import { createUseStyles } from "react-jss"

import { SocialMediaBar } from "@components/socialMediaBar"

const useStyles = createUseStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary,
    minHeight: "100vh",
    display: "grid",
    gridTemplateColumns: "0.1fr 1fr",
    gridTemplateRows: "0.1fr 1fr 0.1fr",
    gridTemplateAreas: `
      'nav nav'
      'socialMedia content'
      'socialMedia footer'
    `,
  },
  nav: {
    backgroundColor: "purple",
    gridArea: "nav",
  },
  socialMedia: { gridArea: "socialMedia" },
  content: {
    backgroundColor: "red",
    gridArea: "content",
  },
  footer: {
    backgroundColor: "lightgreen",
    gridArea: "footer",
  },
  "@media (max-width: 768px)": {
    container: {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "0.1fr 1fr 0.1fr 0.1fr",
      gridTemplateAreas: `
        'nav'
        'content'
        'socialMedia'
        'footer'
      `,
    },
  },
}))

const Layout = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <nav className={classes.nav}>NavBar</nav>
      <SocialMediaBar className={classes.socialMedia} />
      <main className={classes.content}>
        <span>Welcome to Anthony&apos;s personal website!</span>
      </main>
      <footer className={classes.footer}>Footer of the page</footer>
    </div>
  )
}
export default Layout
