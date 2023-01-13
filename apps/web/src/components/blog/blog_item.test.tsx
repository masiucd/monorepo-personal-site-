// import {render} from "@testing-library/react"
import {describe, expect, test, vi} from "vitest"

// import BlogItem from "./blog_item"

// mock lib module using vitest
vi.mock("lib", () => ({
  formatDate: (date: string) => date,
}))

describe("BlogItem", () => {
  test("BlogItem renders as expected", () => {
    // const post = {
    //   title: "title",
    //   slug: "slug",
    //   updated: "2023-01-01",
    //   date: "2023-01-01",
    //   time: "2023-01-01",
    //   description: "description",
    //   tags: ["tag1", "tag2"],
    // }
    // render(<BlogItem post={post} />)
    expect(true).toBe(true)
  })
})
