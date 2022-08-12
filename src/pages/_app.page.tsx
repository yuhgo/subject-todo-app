import "../lib/tailwind.css"

import { MantineProvider } from "@mantine/core"
import { store } from "@src/redux/apps"
import { CustomAppPage } from "next/app"
import React, { memo } from "react"
import { Provider } from "react-redux"

export const App: CustomAppPage = ({ Component, pageProps }) => {
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return page
    })

  return (
    <Provider store={store}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        {getLayout(<Component {...pageProps} />)}
      </MantineProvider>
    </Provider>
  )
}

export default memo(App)
