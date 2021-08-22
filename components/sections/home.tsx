import React, { useState, useEffect } from "react"

import { createUseStyles } from "react-jss"

import { CSSTransition } from "react-transition-group"

import { Section } from "@sections"
import { Hyperlink, Text, Button } from "@components"
import { useTransitionStyles, delay, longDelay } from "@transition"

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

  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setShowContent(true), longDelay)
    return () => clearTimeout(timeout)
  })

  const hello = (
    <Text
      variant="h4"
      color="secondary"
      family="roboto"
      className={classes.text}
    >
      Hello, I am
    </Text>
  )

  const name = (
    <Text variant="h1" color="primary" className={classes.text}>
      Anthony Washington.
    </Text>
  )

  const title = (
    <Text variant="h1" color="grey" className={classes.text}>
      Senior Software Engineer.
    </Text>
  )

  const responsibility = (
    <Text variant="p" color="grey" family="roboto" className={classes.mission}>
      I prioritize designing and building intuitive digital experiences with an
      emphasizes on UI/UX. Currently, I’m building an IOT, cloud connected
      robotic makeline to automate food preparation
      <Hyperlink url="https://usehyphen.com/" title=" @Hyphen" />.
    </Text>
  )

  const actions = (
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
  )

  const elements: React.ReactNode[] = [
    hello,
    name,
    title,
    responsibility,
    actions,
  ]

  const transition = useTransitionStyles()

  return (
    <Section>
      {showContent && (
        <>
          {elements.map((element, index) => {
            return (
              <CSSTransition
                appear
                in
                key={index}
                timeout={delay}
                classNames={{
                  appear: transition.fadeDownAppear,
                  appearActive: transition.fadeDownAppearActive,
                }}
              >
                <div style={{ transitionDelay: `0.${index * 2}s` }}>
                  {element}
                </div>
              </CSSTransition>
            )
          })}
        </>
      )}
    </Section>
  )
}
