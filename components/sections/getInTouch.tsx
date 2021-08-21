import React from "react"

import { createUseStyles } from "react-jss"

import { Text, Button } from "@components"
import { Section } from "@sections"

export const GetInTouch = () => {
  const classes = createUseStyles((theme) => ({
    section: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
    },
    title: {
      marginBottom: theme.spacing.lg,
    },
    content1: {
      marginBottom: theme.spacing.xl,
      maxWidth: "55rem",
    },
    textSpacing: {
      marginBottom: theme.spacing.md,
    },
  }))()

  return (
    <Section className={classes.section}>
      <Text variant="h2" className={classes.title}>
        Get in Touch!
      </Text>
      <Text
        variant="p"
        color="grey"
        family="roboto"
        align="center"
        className={classes.content1}
      >
        Even though I’m not looking for new opportunities, I’m always open to
        chat!
        <div className={classes.textSpacing} />
        Send me an email and I’ll do my best to get back to you!
      </Text>
      <Button
        label="Say Hi 💌"
        onClick={() => {
          window.open("mailto:awashington251@gmail.com", "_self")
        }}
      />
    </Section>
  )
}
