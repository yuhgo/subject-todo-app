import { LayoutErrorBoundary } from "@src/pages-layout"
import { Header } from "@src/pages-layout/header"
import React, { FC } from "react"

type AppLayoutProps = {
  children: React.ReactNode
}

/** @package */
export const AppLayout: FC<AppLayoutProps> = (page) => {
  const { children } = page

  return (
    <div className="box-border">
      <Header />
      <main className="w-full max-w-screen-sm px-2 pt-[60px]">
        <LayoutErrorBoundary>{children}</LayoutErrorBoundary>
      </main>
      {/*<Footer />*/}
    </div>
  )
}
