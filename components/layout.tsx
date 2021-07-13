import React from "react"

import { createUseStyles } from "react-jss"

import { NavBar, SocialMediaBar } from "@components"

const useStyles = createUseStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary,
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: { display: "flex", flex: 1 },
  content: {
    backgroundColor: "pink",
    flex: 1,
    marginLeft: theme.component.socialBar.width,
  },
  footer: { backgroundColor: "lightgreen" },
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
        <SocialMediaBar />
        <div className={classes.content}>
          <span>Welcome to Anthony&apos;s personal website!</span>
          <footer className={classes.footer}>Footer of the page</footer>
        </div>
      </main>
    </div>
  )
}
