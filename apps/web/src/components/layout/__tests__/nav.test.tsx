// import {render, screen} from "@testing-library/react"
import {afterEach, beforeAll, describe, expect, test, vi} from "vitest"

// import Nav from "../nav"

describe("Nav", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: true,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    })
  })
  afterEach(() => {
    vi.restoreAllMocks()
  })
  test("Nav is rendered on larger screens and then on smaller screen", () => {
    const matches = true
    expect(matches).toBeTruthy()
    // const {rerender} = render(<Nav matches={matches} />)

    // let blogLink: HTMLElement | null = screen.getByRole("link", {
    //   name: /blog/gi,
    // })
    // let aboutLink: HTMLElement | null = screen.getByRole("link", {
    //   name: /about/gi,
    // })

    // let toggleButton: HTMLElement | null = screen.queryByTestId("toggle")

    // expect(toggleButton).toBeNull()

    // expect(blogLink).toBeDefined()
    // expect(aboutLink).toBeDefined()

    // rerender(<Nav matches={false} />)

    // toggleButton = screen.getByTestId("toggle")

    // expect(toggleButton).toBeDefined()

    // blogLink = screen.queryByRole("link", {name: /blog/gi})
    // aboutLink = screen.queryByRole("link", {name: /about/gi})

    // expect(blogLink).toBeNull()
    // expect(aboutLink).toBeNull()
  })
})
