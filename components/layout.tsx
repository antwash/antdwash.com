import React from "react"

import { createUseStyles } from "react-jss"

import { Footer, NavBar, VerticalSocialMediaBar } from "@components"
import { About, Home } from "@sections"

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
    marginLeft: theme.component.socialBar.width,
    paddingRight: theme.spacing.xl,
    paddingLeft: theme.spacing.xl,
  },

  "@media (max-width: 768px)": {
    content: {
      marginLeft: 0,
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
          <Footer />
        </div>
      </main>
    </div>
  )
}
