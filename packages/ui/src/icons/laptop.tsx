import {motion} from "framer-motion"

import {Props} from "./types"

const Laptop = ({height = 30, width = 30, options}: Props) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 256 256"
    whileHover={{
      scale: 1.01,
    }}
    {...options}
  >
    <path fill="none" d="M0 0H256V256H0z" />
    <path
      d="M40 176V72a16 16 0 0116-16h144a16 16 0 0116 16v104M24 176h208v16a16 16 0 01-16 16H40a16 16 0 01-16-16v-16h0z"
      fill="none"
      className="stroke-current"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
    />
    <path
      fill="none"
      className="stroke-current"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M144 88L112 88"
    />
  </motion.svg>
)

export {Laptop}
