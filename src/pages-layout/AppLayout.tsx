import { Footer, LayoutErrorBoundary } from "@src/pages-layout"
import { Header } from "@src/pages-layout/header"
import type { CustomLayout } from "next"
import React from "react"

/** @package */
export const AppLayout: CustomLayout = (page) => {
  const { children } = page

  return (
    <div className="">
      <Header />
      <main className="mx-auto w-full max-w-screen-sm px-4">
        <LayoutErrorBoundary>{children}</LayoutErrorBoundary>
      </main>
      <Footer />
    </div>
  )
}
