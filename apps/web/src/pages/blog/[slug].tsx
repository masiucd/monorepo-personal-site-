import {ParsedUrlQuery} from "node:querystring"

import {GetStaticPaths, GetStaticProps} from "next"
import Head from "next/head"
import Link from "next/link"
import {ReactElement} from "react"
import {Reddit, Twitter} from "ui"
import {z} from "zod"

import Page from "~/components/common/page"
import Layout from "~/components/layout"
import {getAllPosts, getPostBySlug} from "~/lib/blog"
import {BarlowFont} from "~/lib/fonts"

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
const PostsSchema = z.object({
  title: z.string(),
  content: z.string(),
  updated: z.string(),
  tags: z.array(z.string()),
  author: z.object({name: z.string()}),
  description: z.string(),
})
type PostsType = z.infer<typeof PostsSchema>

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
  const post = PostsSchema.parse(
    getPostBySlug(`${params.slug}.mdx`, [
      "title",
      "content",
      "updated",
      "tags",
      "author",
      "description",
    ])
  )

  return {
    props: {
      post,
    },
  }
}

type Props = {
  post: PostsType
}
export default function BlogSlugPage({post}: Props) {
  // navigator.share
  return (
    <>
      <Head>
        <title>{post.title}</title>
        {/* <title>Blog | {post.frontMatter.title}</title>
    <meta name="description" content={post.frontMatter.excerpt} />
    <meta property="og:title" content={post.frontMatter.title} /> */}
      </Head>
      <Page fluid>
        <div className="bg-gray-900 dark:bg-slate-100 text-white dark:text-gray-900 p-4">
          <div
            className={`max-w-4xl px-5 py-4 ${BarlowFont.className} border-t-2 border-b-2 border-slate-100 dark:border-gray-900`}
          >
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <div className="flex flex-col">
              <ul className="flex gap-4 pb-2">
                {post.tags.map((tag) => (
                  <li key={tag} className="capitalize">
                    <Link href={`/tags/${tag}`}>{tag}</Link>
                  </li>
                ))}
              </ul>
              <ul className="flex gap-4">
                <li>
                  <button>
                    <Twitter />
                  </button>
                </li>
                <li>
                  <button>
                    <Reddit />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <section className="max-w-3xl m-auto border border-blue-500">
          <div dangerouslySetInnerHTML={{__html: post.content}} />
        </section>
      </Page>
    </>
  )
}

BlogSlugPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
