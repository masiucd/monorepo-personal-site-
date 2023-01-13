import {render, screen} from "@testing-library/react"
import {afterEach, describe, expect, test, vi} from "vitest"

import Page from "../page"

vi.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
    }
  },
}))
describe("Page wrapper", () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })
  test("Page wrapper renders children as expected, without any props", () => {
    const children = (
      <div data-testid="el">
        <h1>Marcell.C.D</h1>
      </div>
    )
    render(<Page> {children}</Page>)

    expect(screen.getByText("Marcell.C.D")).toBeDefined()
    expect(screen.getByTestId("el")).toBeDefined()
  })

  test("Page wrapper renders children as expected, with metadata", () => {
    const metaData = {
      title: "MCD",
      description: "software developer | endurance freak | tech nerd",
      image: "https://marcell-cd.vercel.app/images/someimg.jpg",
      type: "website",
    }
    const children = (
      <div data-testid="el">
        <h1>Marcell.C.D</h1>
      </div>
    )
    render(<Page metaData={metaData}> {children}</Page>)
    expect(screen.getByText("Marcell.C.D")).toBeDefined()
    expect(screen.getByTestId("el")).toBeDefined()
  })
})
