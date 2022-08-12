import { Index } from "@src/pages-component/index"
import { render } from "@testing-library/react"
import React from "react"

describe("Page Component Tests", () => {
  test("Should render Page", () => {
    const { getByText } = render(<Index />)

    expect(getByText("メインだよ")).toBeTruthy()
  })
})
