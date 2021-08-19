import React from "react"

import { createUseStyles } from "react-jss"

import { Footer, NavBar, VerticalSocialMediaBar } from "@components"
import { About, Home, GetInTouch, Experience } from "@sections"

const useStyles = createUseStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background,
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: { display: "flex", flex: 1 },
  content: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: theme.component.socialBar.width,
  },

  "@media (max-width: 48rem)": {
    content: {
      marginLeft: theme.spacing.lg,
      marginRight: theme.spacing.lg,
    },
  },
}))

export const Layout = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <NavBar />
      <main className={classes.main}>
        <VerticalSocialMediaBar />
        <div className={classes.content}>
          <Home />
          <About />
          <Experience />
          <GetInTouch />
          <Footer />
        </div>
      </main>
    </div>
  )
}
