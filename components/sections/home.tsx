import React from "react"

import { Text } from "@components"
import { createUseStyles } from "react-jss"

export const Home = () => {
  const classes = createUseStyles((theme) => ({
    container: {
      minHeight: "100vh",
      padding: `${theme.spacing.xl}`,
    },
    text: {
      marginBottom: theme.spacing.md,
    },
    mission: {
      maxWidth: "60rem",
      marginTop: theme.spacing.lg,
    },
  }))()
  return (
    <div className={classes.container}>
      <Text
        variant="h4"
        color="secondary"
        family="roboto"
        className={classes.text}
      >
        Hello, I am
      </Text>
      <Text variant="h1" color="primary" className={classes.text}>
        Anthony Washington.
      </Text>
      <Text variant="h1" color="grey" className={classes.text}>
        Senior Software Engineer.
      </Text>
      <Text
        variant="p"
        color="grey"
        family="roboto"
        className={classes.mission}
      >
        I prioritize designing and building intuitive digital products with an
        emphasizes on UI/UX. Currently, I’m focused on building an IOT robot to
        automate food preparation{" "}
        <a href="" target="_blank" rel="noreferrer">
          @Hyphen
        </a>
        .
      </Text>
    </div>
  )
}
