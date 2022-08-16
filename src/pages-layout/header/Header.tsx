import { Add } from "@src/pages-layout/header/add"
import { Avatar } from "@src/pages-layout/header/avatar"
import Link from "next/link"
import React, { FC } from "react"

/** @package */
export const Header: FC = () => {
  return (
    <header
      className="
      fixed box-border
      flex
      h-[60px]
      w-full
      items-center
      justify-between bg-blue-500/[.35]
      px-2
      shadow-lg
      "
    >
      <Link href="/">
        <h1 className="text-3xl">TODOアプリ</h1>
      </Link>

      <div className="flex items-center space-x-4">
        <Add />
        <Avatar />
      </div>
    </header>
  )
}
