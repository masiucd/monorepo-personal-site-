"use client"

import {Props} from "./types"

function Twitter({width = 25, height = 25}: Props): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className="fill-current"
      viewBox="0 0 256 256"
      data-testid="twitter-svg-icon-ui"
    >
      <rect width="256" height="256" fill="none"></rect>
      <path
        d="M128,88c0-22,18.5-40.3,40.5-40a40,40,0,0,1,36.2,24H240l-32.3,32.3A127.9,127.9,0,0,1,80,224c-32,0-40-12-40-12s32-12,48-36c0,0-64-32-48-120,0,0,40,40,88,48Z"
        fill="slate-300"
        className="stroke-slate-600 dark:stroke-slate-500"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></path>
    </svg>
  )
}

export {Twitter}
