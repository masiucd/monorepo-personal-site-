import fs from "node:fs"

import matter from "gray-matter"
import path from "path"

const absolutePath = process.cwd()
const getPath = (dir = "blog_posts") => path.join(absolutePath, "src", dir)

export function getPostSlugs() {
  return fs.readdirSync(getPath(), "utf8")
}

type PostData = {
  [k: string]: string | string[]
}

export function getPostBySlug(file: string, fields: string[]) {
  const slug = file.replace(/.mdx$/, "")
  const postContent = fs.readFileSync(path.join(getPath(), file), "utf8")
  const {data, content} = matter(postContent)
  const postData: PostData = {}

  for (const field of fields) {
    if (field === "slug") {
      postData[field] = slug
    }
    if (field === "content") {
      postData[field] = content
    }
    if (data[field]) {
      postData[field] = data[field]
    }
  }
  return postData
}

export function getAllPosts(fields: string[] = []) {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug, fields))
    .sort((a, b) => (a.date > b.date ? -1 : 1))
}
