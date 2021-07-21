import clsx from "clsx"

import { createUseStyles } from "react-jss"

import Link from "next/link"

import { Icon } from "@icons"

interface NavBarProps {
  className?: string
}

export const NavBar = (props: NavBarProps) => {
  const classes = createUseStyles((theme) => ({
    container: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing.lg,
      height: theme.component.nav.height,
    },
    logo: {
      height: "7rem",
      width: "7rem",
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
    </div>
  )
}
