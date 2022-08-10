import "../styles/globals.css"

import { MantineProvider } from "@mantine/core"
import type { AppPropsWithLayout } from "next/app"
import React, { memo } from "react"
import { Provider } from "react-redux"

import { store } from "@/redux/apps/store"

export const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return page
    })

  return (
    <Provider store={store}>
      <MantineProvider>
        {getLayout(<Component {...pageProps} />)}
      </MantineProvider>
    </Provider>
  )
}

export default memo(App)
