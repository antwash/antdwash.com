import React from "react"

import { createUseStyles } from "react-jss"

import { Hyperlink, Text } from "@components"
import { Section } from "@sections"

interface InfoProps {
  info: React.ReactNode
  bottomGutters?: boolean
}

const Info = (props: InfoProps) => {
  const classes = createUseStyles((theme) => ({
    info: {
      marginBottom: theme.spacing.lg,
    },
  }))()

  const { info, bottomGutters } = props

  return (
    <Text
      variant="p"
      family="roboto"
      color="grey"
      className={bottomGutters ? classes.info : ""}
    >
      {info}
    </Text>
  )
}

export const About = () => {
  const classes = createUseStyles((theme) => ({
    body: {
      display: "flex",
      flexWrap: "wrap",
    },
    info: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
      padding: theme.spacing.md,
    },
    image: {
      flex: 1,
    },
  }))()

  return (
    <Section
      showSplitter={{
        caption: "About",
        heading: "How did I get started?",
      }}
    >
      <div className={classes.body}>
        <div className={classes.info}>
          <Info
            bottomGutters
            info={
              <>
                In 2008, competing with friends to create the best MySpace
                profile layout was my first exposure to HTML & CSS.
              </>
            }
          />
          <Info
            bottomGutters
            info={
              <>
                In 2012, while a
                <Hyperlink
                  url="https://www.tuskegee.edu/"
                  title=" Tuskegee University "
                />
                student I discovered writing HTML & CSS is actually called
                programming. 😲
              </>
            }
          />
          <Info
            bottomGutters
            info={
              <>
                Fast forward to today, I’ve had the privilege of working at
                <Hyperlink url="https://www.boeing.com/" title=" Boeing" />,
                <Hyperlink url="https://www.intel.com" title=" Intel " />
                and
                <Hyperlink url="https://www.samsara.com/" title=" Samsara" />.
              </>
            }
          />
          <Info
            info={
              <>
                Currently, I am the 2nd Senior Software Engineer at
                <Hyperlink url="" title=" Hyphen " />
                building intuitive user interfaces to autopilot food preparation
                with robots.
              </>
            }
          />
        </div>
        <div className={classes.image}>
          <Text variant="caption">Image of me!</Text>
        </div>
      </div>
    </Section>
  )
}
