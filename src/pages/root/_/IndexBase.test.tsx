import { render } from "@testing-library/react"
import React from "react"

import { IndexBase } from "@/pages/root/_/IndexBase"

describe("IndexBase Component Tests", () => {
  test("Should render IndexBase", () => {
    const { getByText } = render(<IndexBase />)

    expect(getByText("メインだよ")).toBeTruthy()
  })
})
