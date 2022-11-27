import {ParsedUrlQuery} from "node:querystring"

import {GetStaticPaths, GetStaticProps} from "next"
import Head from "next/head"
import {ReactElement} from "react"
import {z} from "zod"

import Page from "~/components/common/page"
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

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
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
  return (
    <>
      <Head>
        <title>post</title>
        {/* <title>Blog | {post.frontMatter.title}</title>
    <meta name="description" content={post.frontMatter.excerpt} />
    <meta property="og:title" content={post.frontMatter.title} /> */}
      </Head>
      <Page fluid>
        <div>BlogItemSlugPage</div>
      </Page>
    </>
  )
}

BlogSlugPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
