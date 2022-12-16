import Link from "next/link"
import {Reddit, Twitter} from "ui"

import {parseDate} from "~/lib/date"
import {MainFont, SecondaryFont} from "~/lib/fonts"
import {PostsType} from "~/lib/types"

type Props = {
  post: PostsType
}

const shareIcons = [
  {
    name: "twitter",
    icon: <Twitter />,
  },
  {
    name: "reddit",
    icon: <Reddit />,
  },
]

export default function PostHero({post}: Props) {
  return (
    <div className="bg-gray-900 dark:bg-slate-100 text-white dark:text-gray-900 p-4 py-20">
      <div
        className={`max-w-4xl m-auto px-5 py-5 ${SecondaryFont.className} border-slate-100 dark:border-gray-900  relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full md:after:w-2/4 after:h-2 after:bg-slate-100 dark:after:bg-gray-900  
            before:content-[''] before:absolute before:left-0 before:top-0 before:w-full md:before:w-2/3 before:h-2 before:bg-slate-100 dark:before:bg-gray-900`}
      >
        <h1
          className={`text-2xl md:text-4xl lg:text-6xl ${MainFont.className}`}
        >
          {post.title}
        </h1>
        <p className="md:text-xl mb-5">{post.description}</p>
        <div className="flex flex-wrap gap-5">
          <p className="text-slate-400 dark:text-slate-700">
            <span className="font-bold">Updated:</span>{" "}
            {parseDate(post.updated)}
          </p>
          <ul className="flex gap-4">
            {post.tags.map((tag) => (
              <li
                key={tag}
                className="capitalize text-slate-400 dark:text-slate-700 hover:text-slate-100 dark:hover:text-slate-900"
              >
                <Link href={`/tags/${tag}`}>{tag}</Link>
              </li>
            ))}
          </ul>
          <ul className="flex gap-4">
            {shareIcons.map(({icon, name}) => (
              <li
                key={name}
                className="text-slate-400 dark:text-slate-700 hover:text-slate-100 dark:hover:text-slate-900"
              >
                <button>{icon}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
