import React, { useEffect } from "react"

import Image from "next/image"
import { ImageLoaderProps } from "next/dist/client/image";

import { createUseStyles } from "react-jss"

import { Hyperlink, Text } from "@components"
import { Section } from "@sections"
import { scrollRevealConfig } from "@utils"

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
      borderRadius: theme.spacing.sm,
    },

    "@media (max-width: 64rem)": {
      body: {
        flexDirection: "column",
      },
    },
  }))()

  const ref = React.useRef<HTMLDivElement>(null)

  const myLoader = ({ src, width, quality }: ImageLoaderProps) => src

  useEffect(() => {
    async function animate() {
      if (ref.current) {
        const sr = (await import("scrollreveal")).default
        sr({
          ...scrollRevealConfig,
        }).reveal(ref.current)
      }
    }
    animate()
  }, [])

  return (
    <Section
      ref={ref}
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
                It&apos;s 2008, the infamous AOL dial-up sound is playing, and
                I&apos;m Googling how to hide your MySpace top friends. At the
                time, I didn&apos;t know the copy & paste gibberish to hide my
                friends was HTML and CSS. All I knew was that it worked, and it
                was so cool!
              </>
            }
          />
          <Info
            bottomGutters
            info={
              <>
                Now it&apos;s 2012 and I&apos;m a Computer Science freshman @
                <Hyperlink
                  url="https://www.tuskegee.edu/"
                  title=" Tuskegee University"
                />
                {". "}The MySpace HTML and CSS gibberish reappeared and I came
                to learn it&apos;s actually called programming. From that day
                forward, I grew a love for diving into complex programming
                problems and writing clean instructions.
              </>
            }
          />
          <Info
            bottomGutters
            info={
              <>
                Fast forward to life after college, I’ve built software features
                impacting the International Space Station at
                <Hyperlink url="https://www.boeing.com/" title=" Boeing" />,
                several Cloud Computing projects at
                <Hyperlink url="https://www.intel.com" title=" Intel " />
                and a logistical IOT platform at
                <Hyperlink url="https://www.samsara.com/" title=" Samsara" />.
              </>
            }
          />
          <Info
            info={
              <>
                Today, I am the 2nd Senior Software Engineer at
                <Hyperlink url="https://usehyphen.com/" title=" Hyphen" />
                {". "}I&apos;m focused on building our apps intuitive user
                experience with declarative, reusable and GraphQL connected
                React components.
              </>
            }
          />
        </div>
        <div className={classes.imageContainer}>
          <Image
            loader={myLoader}
            src={pictureOfMeCoding}
            alt="Picture of Anthony coding"
            className={classes.image}
            width={450}
            height={300}
            unoptimized
          />
        </div>
      </div>
    </Section>
  )
}
