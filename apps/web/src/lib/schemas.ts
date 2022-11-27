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
