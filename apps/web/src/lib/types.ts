import {NextPage} from "next"
import {ReactElement, ReactNode} from "react"
import {z} from "zod"

import {AllPostsSchema, PostSlugItemSchema, PostsSchema} from "./schemas"

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement) => ReactNode
}

type AllPosts = z.infer<typeof AllPostsSchema>
type Post = z.infer<typeof PostsSchema>

type PostsType = z.infer<typeof PostSlugItemSchema>

export type {AllPosts, NextPageWithLayout, Post, PostsType}
