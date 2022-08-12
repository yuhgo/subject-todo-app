import React, { FC } from "react"

type HeaderProps = {
  title: string
}

/** @package */
export const Header: FC<HeaderProps> = (props) => {
  const { title } = props

  return (
    <header className="bg-red-400">
      <h1>{title}</h1>
    </header>
  )
}
