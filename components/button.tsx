import React from "react"

import { createUseStyles } from "react-jss"

import { Text } from "@components"

interface ButtonProps {
  label: string
  onClick: () => void
}

export const Button = (props: ButtonProps) => {
  const { label, onClick } = props
  const classes = createUseStyles((theme) => ({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: `.2rem solid ${theme.palette.secondary}`,
      borderRadius: ".5rem",
      padding: "2rem",
      minWidth: "10rem",
      cursor: "pointer",
      color: theme.palette.primary,
      "&:hover": {
        backgroundColor: theme.palette.secondaryTint,
      },
    },
  }))()

  return (
    <div className={classes.container} onClick={onClick}>
      <Text variant="caption">{label}</Text>
    </div>
  )
}
