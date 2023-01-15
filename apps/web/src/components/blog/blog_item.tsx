import {formatDate} from "lib"

import {Post} from "~/lib/types"
import {cn} from "~/lib/utils"

import Link from "../common/link"

interface Props {
  post: Post
  styles?: string
}

function BlogItem({post, styles = ""}: Props) {
  const {slug, title, updated, date, description, tags} = post
  return (
    <li
      key={slug}
      className={cn("shadow py-1 px-2 rounded-sm dark:shadow-gray-800", styles)}
    >
      <div className="flex justify-between pb-3 flex-col sm:flex-row">
        <strong>
          <Link
            reset
            href={`/blog/${slug}`}
            styles="md:text-3xl text-xl dark:hover:text-blue-500 hover:text-blue-500 scale-100 hover:scale-105 transition-all duration-200 ease-in-out block"
          >
            {title}
          </Link>
        </strong>
        <div>
          <p className="text-slate-700 dark:text-slate-400">
            {date === updated ? (
              <>{formatDate(date)}</>
            ) : (
              <>
                <span className="font-extrabold">Created:</span>{" "}
                {formatDate(date)}
              </>
            )}
          </p>
          {date !== updated && (
            <p className="text-slate-700 dark:text-slate-400">
              <span className="font-extrabold">Updated</span>:{" "}
              {formatDate(updated)}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col">
        <p className="opacity-80">{description}</p>
        <ul className="flex gap-5 justify-end">
          {tags.map((tag) => (
            <li key={tag} className="capitalize">
              <Link href={`/tags/${tag}`}>{tag}</Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export default BlogItem
