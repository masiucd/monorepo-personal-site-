"use client"

import {Props} from "./types"

const Instagram = ({width = 25, height = 25}: Props): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    className="stroke-fill-current"
    viewBox="0 0 256 256"
    data-testid="instagram-svg-icon-ui"
  >
    <rect width="256" height="256" fill="none"></rect>
    <circle
      cx="128"
      cy="128"
      r="40"
      fill="none"
      className="stroke-current"
      strokeMiterlimit="10"
      strokeWidth="16"
    ></circle>
    <rect
      x="36"
      y="36"
      width="184"
      height="184"
      rx="48"
      fill="none"
      className="stroke-current"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    ></rect>
    <circle cx="180" cy="76" r="12" className="stroke-current"></circle>
  </svg>
)

export {Instagram}
