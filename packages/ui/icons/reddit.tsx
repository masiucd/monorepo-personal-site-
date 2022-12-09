import {Props} from "./types"
function Reddit({width = 30, height = 30, options}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 256 256"
      {...options}
    >
      <path fill="none" d="M0 0H256V256H0z"></path>
      <circle
        cx="188"
        cy="32"
        r="16"
        fill="none"
        className="stroke-current"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      ></circle>
      <path
        fill="none"
        className="stroke-current"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M161 176a71.9 71.9 0 01-66 0"
      ></path>
      <path
        fill="none"
        className="stroke-current"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M128 72L136 24 172.2 29.6"
      ></path>
      <path
        fill="none"
        className="stroke-current"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M59.4 89.9C77.7 78.7 101.7 72 128 72s50.3 6.7 68.6 17.9h0a24 24 0 1131.6 34.8h0A50.7 50.7 0 01232 144c0 39.8-46.6 72-104 72S24 183.8 24 144a50.7 50.7 0 013.8-19.3h0a24 24 0 1131.6-34.8z"
      ></path>
      <circle className="fill-current" cx="88" cy="132" r="16"></circle>
      <circle className="fill-current" cx="168" cy="132" r="16"></circle>
    </svg>
  )
}

export {Reddit}
