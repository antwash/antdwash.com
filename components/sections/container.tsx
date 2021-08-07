import React from "react"

import clsx from "clsx"

import { createUseStyles } from "react-jss"

import { Text } from "@components"

interface SectionProps {
  showSplitter?: {
    caption: string
    heading: string
  }
  children: React.ReactNode
  className?: string
}

export const Section = (props: SectionProps) => {
  const classes = createUseStyles((theme) => ({
    container: {
      minHeight: "80vh",
      padding: `${theme.spacing.xl}`,
    },
    splitter: {
      marginBottom: theme.spacing.xl,
    },
    header: {
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing.md,
    },
    sectionTitle: {
      marginRight: theme.spacing.xl,
    },
    divider: {
      height: theme.spacing.sm,
      backgroundColor: theme.palette.primary,
      marginBottom: theme.spacing.xl,
      width: "100%",
    },

    "@media (max-width: 48rem)": {
      splitter: {
        marginBottom: theme.spacing.lg,
      },
      header: {
        alignItems: "unset",
        flexDirection: "column",
      },
      sectionTitle: {
        marginBottom: theme.spacing.lg,
      },
    },
  }))()

  const { showSplitter, children, className } = props

  return (
    <div className={clsx(className, classes.container)}>
      {showSplitter && (
        <div className={classes.splitter}>
          <div className={classes.divider} />
          <div className={classes.header}>
            <Text
              variant="caption"
              color="secondary"
              className={classes.sectionTitle}
            >
              {showSplitter.caption}
            </Text>
            <Text variant="h3">{showSplitter.heading}</Text>
          </div>
        </div>
      )}
      {children}
    </div>
  )
}
