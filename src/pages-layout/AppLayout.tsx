import { Footer, Header, LayoutErrorBoundary } from "@src/pages-layout"
import type { CustomLayout } from "next"
import React from "react"

/** @package */
export const AppLayout: CustomLayout = (page) => {
  const { children } = page

  return (
    <>
      <Header title="ヘッダーだよ" />
      <LayoutErrorBoundary>{children}</LayoutErrorBoundary>
      <Footer />
    </>
  )
}
