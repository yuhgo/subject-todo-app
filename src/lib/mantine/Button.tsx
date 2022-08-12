import type { ButtonProps } from "@mantine/core"
import { Button as MantineButton } from "@mantine/core"
import React, { cloneElement, forwardRef } from "react"

/** @package */
export const Button = forwardRef<
  HTMLButtonElement,
  ButtonProps & { dent?: boolean }
>(({ dent, sx, ...props }, ref) => {
  return cloneElement(<MantineButton />, {
    sx: {
      ...sx,
      "&:not(:disabled):active": dent ? undefined : { transform: "none" },
    },
    ref,
    ...props,
  })
})

Button.displayName = "Button"
