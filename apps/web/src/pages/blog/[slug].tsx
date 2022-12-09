import {ParsedUrlQuery} from "node:querystring"

import {GetStaticPaths, GetStaticProps} from "next"
import Head from "next/head"
import Link from "next/link"
import {MDXRemote, MDXRemoteSerializeResult} from "next-mdx-remote"
import {ReactElement} from "react"
import {Reddit, Twitter} from "ui"

import Page from "~/components/common/page"
import Layout from "~/components/layout"
import {getAllPosts, getPostBySlug} from "~/lib/blog"
import {BarlowFont} from "~/lib/fonts"
import {parseContentToMDX} from "~/lib/mdx"
import {PostsBySlugSchema, PostSlugItemSchema} from "~/lib/schemas"
import {PostsType} from "~/lib/types"

interface Params extends ParsedUrlQuery {
  slug: string
}

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
  const post = PostSlugItemSchema.parse(
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
      source: await parseContentToMDX(post.content),
    },
  }
}

type Props = {
  post: PostsType
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >
}
export default function BlogSlugPage({post, source}: Props) {
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
        <div className="bg-gray-900 dark:bg-slate-100 text-white dark:text-gray-900 p-4 py-10">
          <div
            className={`max-w-4xl m-auto px-5 py-4 ${BarlowFont.className} border-t-2 border-b-2 border-slate-100 dark:border-gray-900  relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-2/3 after:h-2 after:bg-slate-100 dark:after:bg-gray-900 `}
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
        <article
          id="blog_article"
          className="max-w-3xl m-auto py-3 prose prose-stone dark:prose-invert lg:prose-xl"
        >
          <MDXRemote {...source} />
        </article>
      </Page>
    </>
  )
}

BlogSlugPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
