import { Index } from "@src/pages-component/index"
import { AppLayout } from "@src/pages-layout"
import { CustomNextPage } from "next"
import React from "react"

const IndexPage: CustomNextPage = () => {
  return <Index />
}

IndexPage.getLayout = (page) => {
  return <AppLayout>{page}</AppLayout>
}

export default IndexPage
