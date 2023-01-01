import {render, screen} from "@testing-library/react"
import {afterEach, describe, expect, test, vi} from "vitest"

import Title from "../title"

describe("Title", () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })
  test("Title renders children as expected", () => {
    const children = <h1 data-testid="el">children</h1>
    render(<Title> {children}</Title>)

    expect(screen.getByText("children")).toBeDefined()
    expect(screen.getByTestId("el")).toBeDefined()
  })
  test("Title renders with props  as expected", () => {
    const children = "children"
    render(<Title title={children} />)
    screen.debug()
    expect(screen.getByText("children")).toBeDefined()
  })
})
