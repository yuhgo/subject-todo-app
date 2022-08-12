import type { NextPage } from "next"
import type { AppProps } from "next/app"

// eslint-disable-next-line no-undef
type PageAttributes = { getLayout?: (page: ReactElement) => JSX.Element }

declare module "next" {
  // eslint-disable-next-line no-unused-vars
  type CustomLayout = NonNullable<PageAttributes["getLayout"]>
  // eslint-disable-next-line no-unused-vars
  type CustomNextPage<P = Record<string, unknown>, IP = P> = NextPage<P, IP> &
    PageAttributes
}

declare module "next/app" {
  // eslint-disable-next-line no-unused-vars
  type CustomAppPage<P = Record<string, unknown>> = (
    props: AppProps<P> & { Component: NextPage & PageAttributes },
    // eslint-disable-next-line no-undef
  ) => JSX.Element
}
