import { Footer, Header, LayoutErrorBoundary } from "@src/layout"
import React, { FC, ReactElement } from "react"

type LayoutProps = {
  children: ReactElement
}

export const AppLayout: FC<LayoutProps> = (props) => {
  const { children } = props

  return (
    <>
      <Header title="ヘッダーだよ" />
      <LayoutErrorBoundary>{children}</LayoutErrorBoundary>
      <Footer />
    </>
  )
}
