import React from "react"

import Image from "next/image"

import { createUseStyles } from "react-jss"

import { Hyperlink, Text } from "@components"
import { Section } from "@sections"

import pictureOfMeCoding from "public/anthony_coding.jpg"

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
    section: { maxWidth: "100rem" },
    body: {
      display: "flex",
      flexWrap: "wrap",
      gap: theme.spacing.lg,
    },
    info: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
      padding: theme.spacing.md,
    },
    imageContainer: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      borderRadius: theme.spacing.md,
    },

    "@media (max-width: 64rem)": {
      body: {
        flexDirection: "column",
      },
    },
  }))()

  return (
    <Section
      className={classes.section}
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
                <Hyperlink url="https://usehyphen.com/" title=" Hyphen " />
                building intuitive user interfaces to autopilot food preparation
                with robots.
              </>
            }
          />
        </div>
        <div className={classes.imageContainer}>
          <Image
            src={pictureOfMeCoding}
            alt="Picture of Anthony coding"
            className={classes.image}
            width={450}
            height={300}
          />
        </div>
      </div>
    </Section>
  )
}
