import React from "react"

import { createUseStyles } from "react-jss"

import { Section } from "@sections"
import { Hyperlink, Text } from "@components"

export const Home = () => {
  const classes = createUseStyles((theme) => ({
    text: {
      marginBottom: theme.spacing.md,
    },
    mission: {
      maxWidth: "60rem",
      marginTop: theme.spacing.lg,
    },
    actions: {
      display: "flex",
      flexWrap: "wrap",
      marginTop: theme.spacing.lg,
      "& > :first-child": {
        marginRight: theme.spacing.lg,
      },
    },
    button: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: `.2rem solid ${theme.palette.secondary}`,
      borderRadius: ".4rem",
      padding: "2.5rem",
      color: theme.palette.primary,
    },
  }))()
  return (
    <Section>
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
        automate food preparation
        <Hyperlink url="" title=" @Hyphen" />.
      </Text>
      <div className={classes.actions}>
        <a href="" className={classes.button}>
          <Text variant="caption">Email Me</Text>
        </a>
        <a href="" className={classes.button}>
          <Text variant="caption">Get Resume</Text>
        </a>
      </div>
    </Section>
  )
}
