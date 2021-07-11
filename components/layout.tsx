import React from "react"

import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  container: {
    backgroundColor: "orange",
    minHeight: "100vh",
    display: "grid",
    gridTemplateColumns: "0.1fr 1fr",
    gridTemplateRows: "0.1fr 1fr 0.1fr",
    gridTemplateAreas: `
      'nav nav'
      'sidebar content'
      'footer footer'
    `,
  },
  nav: {
    backgroundColor: "purple",
    gridArea: "nav",
  },
  sideBar: {
    backgroundColor: "lightblue",
    gridArea: "sidebar",
  },
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
        'sidebar'
        'footer'
      `,
    },
  },
})

export const Layout = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <nav className={classes.nav}>NavBar</nav>
      <div className={classes.sideBar}>Social Media side bar</div>
      <main className={classes.content}>
        <span>Welcome to Anthony&apos;s personal website!</span>
      </main>
      <footer className={classes.footer}>Footer of the page</footer>
    </div>
  )
}
