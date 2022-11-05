"use client"

import {Props} from "./types"

function Linkedin({width = 25, height = 25}: Props): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className="fill-current"
      viewBox="0 0 256 256"
    >
      <rect width="256" height="256" fill="none"></rect>
      <rect
        x="36"
        y="36"
        width="184"
        height="184"
        rx="8"
        fill="none"
        className="stroke-slate-900 dark:stroke-slate-100"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></rect>
      <line
        x1="120"
        y1="112"
        x2="120"
        y2="176"
        fill="none"
        className="stroke-slate-900 dark:stroke-slate-100"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></line>
      <line
        x1="88"
        y1="112"
        x2="88"
        y2="176"
        fill="none"
        className="stroke-slate-900 dark:stroke-slate-100"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></line>
      <path
        d="M120,140a28,28,0,0,1,56,0v36"
        fill="none"
        className="stroke-slate-900 dark:stroke-slate-100"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></path>
      <circle cx="88" cy="80" r="12"></circle>
    </svg>
  )
}

export {Linkedin}
