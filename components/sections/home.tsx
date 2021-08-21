import React from "react"

import { createUseStyles } from "react-jss"

import { Section } from "@sections"
import { Hyperlink, Text, Button } from "@components"

export const Home = () => {
  const classes = createUseStyles((theme) => ({
    text: {
      marginBottom: theme.spacing.md,
    },
    mission: {
      maxWidth: "65rem",
      marginTop: theme.spacing.lg,
    },
    actions: {
      display: "flex",
      flexWrap: "wrap",
      marginTop: theme.spacing.lg,
      gap: theme.spacing.lg,
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
        I prioritize designing and building intuitive digital experiences with
        an emphasizes on UI/UX. Currently, I’m building an IOT, cloud connected
        robotic makeline to automate food preparation
        <Hyperlink url="https://usehyphen.com/" title=" @Hyphen" />.
      </Text>
      <div className={classes.actions}>
        <Button
          label="Email Me"
          onClick={() => {
            window.open("mailto:awashington251@gmail.com", "_self")
          }}
        />
        <Button
          label="Get Resume"
          onClick={() => {
            window.open("", "_blank")
          }}
        />
      </div>
    </Section>
  )
}
