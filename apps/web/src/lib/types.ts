import {NextPage} from "next"
import {ReactElement, ReactNode} from "react"
import {z} from "zod"

import {AllPostsSchema} from "./schemas"

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement) => ReactNode
}

export type AllPosts = z.infer<typeof AllPostsSchema>
