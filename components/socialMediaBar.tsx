import React from "react"

import { createUseStyles } from "react-jss"

import { CSSTransition } from "react-transition-group"

import { Icon, IconType } from "@icons"

import { useTransitionStyles, delay } from "@transition"

interface SocialMedia {
  name: IconType
  url: string
}

const socialMedias: SocialMedia[] = [
  {
    name: "github",
    url: "https://github.com/antwash",
  },
  {
    name: "twitter",
    url: "https://twitter.com/antdwash",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/antdwash/",
  },
  {
    name: "youtube",
    url: "https://www.youtube.com/c/theprolificdev/",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/antdwash/",
  },
]

const SocialMediaList = () => {
  const classes = createUseStyles((theme) => ({
    iconList: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& a": {
        cursor: "nesw-resize",
        padding: theme.spacing.md,
        "& svg": {
          height: "2rem",
          width: "2rem",
        },
      },
    },
    line: {
      backgroundColor: theme.palette.primary,
      width: "0.2rem",
      height: "10rem",
    },

    "@media (max-width: 48rem)": {
      iconList: {
        flexDirection: "row",
      },
      line: {
        display: "none",
      },
    },
  }))()

  const transitions = useTransitionStyles()

  return (
    <CSSTransition
      in
      appear
      timeout={delay}
      classNames={{
        appear: transitions.fadeAppear,
        appearActive: transitions.fadeAppearActive,
      }}
    >
      <div className={classes.iconList}>
        {socialMedias.map((socialMedia) => {
          const { name, url } = socialMedia
          return (
            <a key={name} aria-label={name} href={url}>
              <Icon name={name} />
            </a>
          )
        })}
        <div className={classes.line} />
      </div>
    </CSSTransition>
  )
}

export const VerticalSocialMediaBar = () => {
  const classes = createUseStyles((theme) => ({
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      width: theme.component.socialBar.width,
      position: "fixed",
      bottom: 0,
    },
    "@media (max-width: 48rem)": {
      container: {
        display: "none",
      },
    },
  }))()
  return (
    <div className={classes.container}>
      <SocialMediaList />
    </div>
  )
}

export const HorizontalSocialMediaBar = () => {
  const classes = createUseStyles({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    "@media (min-width: 769px)": {
      container: {
        display: "none",
      },
    },
  })()

  return (
    <div className={classes.container}>
      <SocialMediaList />
    </div>
  )
}
