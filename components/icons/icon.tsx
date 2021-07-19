import { Github, Instagram, Linkedin, Logo, Twitter, Youtube } from "@icons"

export type IconType =
  | "github"
  | "instagram"
  | "linkedin"
  | "twitter"
  | "youtube"
  | "logo"

interface IconProps {
  name: IconType
}

export const Icon = (props: IconProps) => {
  const { name } = props

  switch (name) {
    case "github":
      return <Github />
    case "linkedin":
      return <Linkedin />
    case "instagram":
      return <Instagram />
    case "twitter":
      return <Twitter />
    case "youtube":
      return <Youtube />
    case "logo":
      return <Logo />
  }
}
