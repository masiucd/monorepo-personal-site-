import {motion} from "framer-motion"

import {Props} from "./types"

const Moon = ({height = 30, width = 30, options}: Props) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width={height}
    height={width}
    viewBox="0 0 256 256"
    whileHover={{
      scale: 1.01,
    }}
    {...options}
  >
    <motion.path fill="none" d="M0 0H256V256H0z" />
    <motion.path
      d="M216.7 152.6A91.9 91.9 0 01103.4 39.3h0a92 92 0 10113.3 113.3z"
      fill="none"
      className="stroke-current"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      initial={{pathLength: 0}}
      animate={{pathLength: 1}}
      transition={{duration: 0.6}}
    />
  </motion.svg>
)

export {Moon}
