import {render, screen} from "@testing-library/react"
import {describe, expect, test} from "vitest"

import NavLink from "~/components/nav/nav_link"

describe("NavLink", () => {
  test("NavLink renders as expected", () => {
    const href = "/href"
    const children = "children"
    render(<NavLink href={href}>{children}</NavLink>)
    const link = screen.getByRole("link", {name: children})
    expect(link).toBeDefined()
    expect(link.getAttribute("href")).toBe("/href")
  })
})
