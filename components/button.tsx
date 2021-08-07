import React from "react"

import { createUseStyles } from "react-jss"

import { Text } from "@components"

interface ButtonProps {
  link: string
  label: string
}

export const Button = (props: ButtonProps) => {
  const { link, label } = props
  const classes = createUseStyles((theme) => ({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: `.2rem solid ${theme.palette.secondary}`,
      borderRadius: ".4rem",
      padding: "2.5rem",
      minWidth: "10rem",
      color: theme.palette.primary,
      "&:hover": {
        backgroundColor: theme.palette.secondaryTint,
      },
    },
  }))()

  return (
    <a href={link} className={classes.container}>
      <Text variant="caption">{label}</Text>
    </a>
  )
}
