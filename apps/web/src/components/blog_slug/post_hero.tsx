import {formatDate} from "lib"

import {MainFont, SecondaryFont} from "~/lib/fonts"
import {PostsType} from "~/lib/types"

import Link from "../common/link"

interface Props {
  post: PostsType
}

export default function PostHero({post}: Props) {
  return (
    <div className="bg-gray-900 p-4 py-20 text-white dark:bg-slate-100 dark:text-gray-900">
      <div
        className={`m-auto max-w-4xl p-5${SecondaryFont.className} relative border-slate-100  before:absolute before:left-0 before:top-0 before:h-2 before:w-full before:bg-slate-100 before:content-[''] after:absolute after:left-0 after:bottom-0  
            after:h-2 after:w-full after:bg-slate-100 after:content-[''] dark:border-gray-900 dark:before:bg-gray-900 dark:after:bg-gray-900 md:before:w-2/3 md:after:w-2/4`}
      >
        <h1
          className={`text-2xl md:text-4xl lg:text-6xl ${MainFont.className}`}
        >
          {post.title}
        </h1>
        <p className="mb-5 md:text-xl">{post.description}</p>
        <Bottom tags={post.tags} created={post.date} updated={post.updated} />
      </div>
    </div>
  )
}

type BottomProps = {
  tags: string[]
  created: string
  updated: string
}
function Bottom({tags, created, updated}: BottomProps) {
  return (
    <div className="flex flex-wrap gap-5">
      <div className="flex items-center justify-center gap-3">
        <p className="text-slate-400 dark:text-slate-700 p-0 m-0">
          <span className="font-bold">Created:</span> {formatDate(created)}
        </p>
        {created !== updated && (
          <p className="text-slate-400 dark:text-slate-700 p-0 m-0">
            <span className="font-bold">Updated:</span> {formatDate(updated)}
          </p>
        )}
      </div>
      <Tags tags={tags} />
      {/* TODO SHARe API */}
    </div>
  )
}

type TagsProps = {
  tags: string[]
}

function Tags({tags}: TagsProps) {
  return (
    <ul className="flex gap-4">
      {tags.map((tag) => (
        <li
          key={tag}
          className="capitalize text-slate-400 dark:text-slate-700 hover:text-slate-100 dark:hover:text-slate-900"
        >
          <Link href={`/tags/${tag}`}>{tag}</Link>
        </li>
      ))}
    </ul>
  )
}
