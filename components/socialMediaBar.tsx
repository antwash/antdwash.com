import React from "react"

import clsx from "clsx"

import { createUseStyles } from "react-jss"

import { Icon, IconType } from "@components/icons"

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
    url: "https://twitter.com/theprolificdev",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/theprolificdev/",
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

interface SocialMediaBarProps {
  className?: string
}

export const SocialMediaBar = (props: SocialMediaBarProps) => {
  const classes = createUseStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    iconList: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& a": {
        cursor: "nesw-resize",
        padding: "15px",
        "& svg": {
          height: "20px",
          width: "20px",
        },
      },
    },
    line: {
      backgroundColor: "#A0A0A0",
      width: "1px",
      height: "100px",
    },

    "@media (max-width: 768px)": {
      container: {
        justifyContent: "center",
      },
      iconList: {
        flexDirection: "row",
      },
      line: {
        display: "none",
      },
    },
  })()

  const { className } = props

  return (
    <div className={clsx(className, classes.container)}>
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
    </div>
  )
}
