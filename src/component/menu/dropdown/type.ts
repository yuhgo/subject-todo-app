import React from "react"

/** @package */
export type MenuItem = {
  id: number
  icon?: React.ReactNode
  text?: string
  className?: string
  isLabel: boolean
  isDivider: boolean
}
