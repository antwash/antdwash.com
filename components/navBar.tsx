import clsx from "clsx"

import { createUseStyles } from "react-jss"

import Link from "next/link"

import { Text } from "@components"
import { Icon } from "@icons"

interface NavBarProps {
  className?: string
}

export const NavBar = (props: NavBarProps) => {
  const classes = createUseStyles((theme) => ({
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: theme.spacing.lg,
      height: theme.component.nav.height,
    },
    logo: {
      display: "inline-block",
      height: "65px",
      width: "65px",
    },
    resumeBtn: {
      border: `2px solid ${theme.palette.secondary}`,
      borderRadius: "4px",
      padding: "1.5rem",
      color: theme.palette.primary,
    },
  }))()

  const { className } = props
  return (
    <div className={clsx(className, classes.container)}>
      <Link href="/">
        <a aria-label="home" className={classes.logo}>
          <Icon name="logo" />
        </a>
      </Link>
      <a href="" className={classes.resumeBtn}>
        <Text variant="caption">Get Resume</Text>
      </a>
    </div>
  )
}
