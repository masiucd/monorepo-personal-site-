import {render, screen} from "@testing-library/react"
import {afterEach, describe, expect, test, vi} from "vitest"

import NavLink from "~/components/common/nav_link"

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

describe("NavLink", () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })
  test("NavLink renders as expected", () => {
    const href = "/href"
    const children = "children"
    render(<NavLink href={href}>{children}</NavLink>)
    const link = screen.getByRole("link", {name: children})
    expect(link).toBeDefined()
    expect(link.getAttribute("href")).toBe("/href")
  })
})
