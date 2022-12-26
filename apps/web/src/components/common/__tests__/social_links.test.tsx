import {render, screen} from "@testing-library/react"
import {describe, expect, test} from "vitest"

import SocialLinks from "../social_links"

describe("SocialMediaLinks", () => {
  test("Social media links renders  as expected", () => {
    render(<SocialLinks />)
    expect(screen.getByText("github")).toBeDefined()
    expect(screen.getByText("twitter")).toBeDefined()
    expect(screen.getByText("instagram")).toBeDefined()
  })
})
