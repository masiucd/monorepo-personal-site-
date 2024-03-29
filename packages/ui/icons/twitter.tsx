import {Props} from "./types"

function Twitter({width = 30, height = 30, options}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 256 256"
      {...options}
    >
      <path fill="none" d="M0 0H256V256H0z"></path>
      <path
        fill="none"
        stroke="#000"
        className="stroke-current"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M128 88c0-22 18.5-40.3 40.5-40a40 40 0 0136.2 24H240l-32.3 32.3A127.9 127.9 0 0180 224c-32 0-40-12-40-12s32-12 48-36c0 0-64-32-48-120 0 0 40 40 88 48z"
      ></path>
    </svg>
  )
}

export {Twitter}
