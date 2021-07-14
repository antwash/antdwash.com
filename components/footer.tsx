import { createUseStyles } from "react-jss"

import { HorizontalSocialMediaBar } from "@components"

export const Footer = () => {
  const classes = createUseStyles((theme) => ({
    container: {
      display: "flex",
      width: "100%",
      flexDirection: "column",
      paddingBottom: theme.spacing.md,
    },
    message: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: theme.palette.grey,
    },
  }))()

  const year = new Date().getFullYear()

  return (
    <div className={classes.container}>
      <HorizontalSocialMediaBar />
      <div className={classes.message}>
        <span>Designed & Built by Anthony with ♥️</span>
        <span>Copyright @1994 - {year}. All rights reserved.️</span>
      </div>
    </div>
  )
}
