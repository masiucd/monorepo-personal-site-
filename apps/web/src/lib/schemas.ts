import {z} from "zod"

export const PostsSchema = z.object({
  title: z.string(),
  slug: z.string(),
  updated: z.string(),
  time: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
})

export const AllPostsSchema = z.array(PostsSchema)

export const PostsBySlugSchema = z.array(z.object({slug: z.string()}))

export const PostSlugItemSchema = z.object({
  title: z.string(),
  content: z.string(),
  updated: z.string(),
  tags: z.array(z.string()),
  author: z.object({name: z.string()}),
  description: z.string(),
})
