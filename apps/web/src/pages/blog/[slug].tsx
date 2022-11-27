import {ParsedUrlQuery} from "node:querystring"

import {GetStaticPaths, GetStaticProps} from "next"
import {ReactElement} from "react"
import {z} from "zod"

import Layout from "~/components/layout"
import {getAllPosts, getPostBySlug} from "~/lib/blog"

interface Params extends ParsedUrlQuery {
  slug: string
}

const PostBySlugSchema = z.object({
  slug: z.string(),
})

const PostsBySlugSchema = z.array(PostBySlugSchema)

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const posts = PostsBySlugSchema.parse(getAllPosts(["slug"]))
  return {paths: posts.map(({slug}) => ({params: {slug}})), fallback: false}
}

export const getStaticProps: GetStaticProps<any, Params> = async ({params}) => {
  if (!params) {
    return {
      redirect: {
        destination: "/blog",
        permanent: false,
      },
    }
  }
  // TODO use zod
  // const post = getPostBySlug(`${params.slug}.mdx`, [
  //   "title",
  //   "content",
  //   "updated",
  //   "tags",
  //   "author",
  // ])

  return {
    props: {
      post: null,
    },
  }
}

type Props = {
  post: null
}
export default function BlogSlugPage({post}: Props) {
  console.log({post})
  return <div>BlogItemSlugPage</div>
}

BlogSlugPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout metaData={{title: "Articles"}}>{page}</Layout>
}
