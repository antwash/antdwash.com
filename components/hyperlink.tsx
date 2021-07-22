import React from "react"

interface HyperlinkProps {
  url: string
  title: string
}

export const Hyperlink = (props: HyperlinkProps) => {
  const { url, title } = props
  return (
    <a href={url} target="_blank" rel="noreferrer">
      {title}
    </a>
  )
}
