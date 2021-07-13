import clsx from "clsx"

import { createUseStyles } from "react-jss"

import Link from "next/link"

import { Icon } from "@components/icons"

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
    },
    logo: {
      display: "inline-block",
      height: "60px",
      width: "60px",
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
