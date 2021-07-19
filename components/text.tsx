import React from "react"

import clsx from "clsx"

import { createUseStyles } from "react-jss"

type FontSize = "h1" | "h2" | "h3" | "h4" | "p" | "caption"
type FontFamily = "beVietnam" | "roboto"
type FontColor = "primary" | "secondary" | "grey"

interface TextProps {
  variant: FontSize
  family?: FontFamily
  color?: FontColor
  children?: React.ReactNode
}

export const Text = ({
  family = "beVietnam",
  color = "primary",
  ...otherProps
}: TextProps) => {
  const { variant, children } = otherProps

  const classes = createUseStyles((theme) => ({
    root: {
      letterSpacing: ".2rem",
    },
    beVietnam: {
      fontFamily: "Be Vietnam, sans-serif",
      fontWeight: 500,
    },
    roboto: {
      fontFamily: "Roboto, sans-serif",
      fontWeight: 300,
    },
    h1: {
      fontSize: "7.594rem",
    },
    h2: {
      fontSize: "5.063rem",
    },
    h3: {
      fontSize: "3.375rem",
    },
    h4: {
      fontSize: "2.25rem",
    },
    p: {
      fontSize: "1.5rem",
    },
    caption: {
      fontSize: "1rem",
      textTransform: "uppercase",
      letterSpacing: ".5rem",
    },
    primary: {
      color: theme.palette.primary,
    },
    secondary: {
      color: theme.palette.secondary,
    },
    grey: {
      color: theme.palette.grey,
    },
  }))()

  return (
    <div
      className={clsx(
        classes.root,
        classes[family],
        classes[variant],
        classes[color]
      )}
    >
      {children}
    </div>
  )
}
