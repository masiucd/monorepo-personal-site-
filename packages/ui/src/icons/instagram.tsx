"use client"

import {Props} from "./types"

const Instagram = ({width = 25, height = 25}: Props): JSX.Element => (
  <svg
    height={height}
    viewBox="0 0 32 32"
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    className="hover:stroke-blue-500 dark:hover:stroke-blue-300"
  >
    <g className="fill-current">
      <path d="M23 30H9c-3.86 0-7-3.14-7-7V9c0-3.86 3.14-7 7-7h14c3.86 0 7 3.14 7 7v14c0 3.86-3.14 7-7 7zM9 3C5.691 3 3 5.691 3 9v14c0 3.309 2.691 6 6 6h14c3.309 0 6-2.691 6-6V9c0-3.309-2.691-6-6-6H9z" />
      <path d="M20 26h-8c-3.309 0-6-2.691-6-6v-8c0-3.309 2.691-6 6-6h8c3.309 0 6 2.691 6 6v8c0 3.309-2.691 6-6 6zM12 8c-2.206 0-4 1.794-4 4v8c0 2.206 1.794 4 4 4h8c2.206 0 4-1.794 4-4v-8c0-2.206-1.794-4-4-4h-8z" />
      <path d="M21.5 11.75c-.689 0-1.25-.561-1.25-1.25s.561-1.25 1.25-1.25 1.25.561 1.25 1.25-.561 1.25-1.25 1.25zM16 21c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm0-8c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z" />
    </g>
  </svg>
)

export {Instagram}
