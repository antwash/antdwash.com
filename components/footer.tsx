import { createUseStyles } from "react-jss"

import { HorizontalSocialMediaBar, Text } from "@components"

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
        <Text color="grey" variant="p">
          Designed & Built by Anthony with ♥️
        </Text>
        <Text color="grey" variant="p">
          Copyright @1994 - {year}. All rights reserved.️
        </Text>
      </div>
    </div>
  )
}
