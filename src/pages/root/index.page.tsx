import { AppLayout } from "@src/layout/AppLayout"
import type { NextPageWithLayout } from "next"
import React from "react"

import { IndexBase } from "@/pages/root/_"

const Index: NextPageWithLayout = () => {
  return <IndexBase />
}

Index.getLayout = (page) => {
  return <AppLayout>{page}</AppLayout>
}

export default Index
