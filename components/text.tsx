import React from "react"

import clsx from "clsx"

import { createUseStyles } from "react-jss"

type FontSize = "h1" | "h2" | "h3" | "h4" | "p" | "caption"
type FontFamily = "beVietnam" | "roboto"
type FontColor = "primary" | "secondary" | "grey"
type FontAlignment = "center"

interface TextProps {
  variant: FontSize
  family?: FontFamily
  color?: FontColor
  align?: FontAlignment
  children?: React.ReactNode
  className?: string
}

const h1FontSize = "7.594rem"
const h2FontSize = "5.063rem"
const h3FontSize = "3.375rem"
const h4FontSize = "2.25rem"
const pFontSize = "1.5rem"
const captionFontSize = "1rem"

export const Text = ({
  family = "beVietnam",
  color = "primary",
  ...otherProps
}: TextProps) => {
  const { variant, children, align, className } = otherProps

  const classes = createUseStyles((theme) => ({
    root: {
      letterSpacing: ".3rem",
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
      fontSize: `clamp(${h3FontSize}, 5vw, ${h1FontSize})`,
    },
    h2: {
      fontSize: `clamp(${h4FontSize}, 5vw, ${h2FontSize})`,
    },
    h3: {
      fontSize: `clamp(${pFontSize}, 5vw, ${h3FontSize})`,
    },
    h4: {
      fontSize: `clamp(${pFontSize}, 5vw, ${h4FontSize})`,
    },
    p: {
      fontSize: `clamp(${captionFontSize}, 3vw, ${pFontSize})`,
      lineHeight: "170%",
    },
    caption: {
      fontSize: captionFontSize,
      textTransform: "uppercase",
      letterSpacing: ".4rem",
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
    center: {
      textAlign: "center",
    },
  }))()

  return (
    <div
      className={clsx(
        className,
        classes.root,
        classes[family],
        classes[variant],
        classes[color],
        {
          [classes.center]: align === "center",
        }
      )}
    >
      {children}
    </div>
  )
}
