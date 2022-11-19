import {motion} from "framer-motion"

import {Props} from "./types"

interface MenuProps extends Props {
  on: boolean
}

const Menu = ({height = 30, width = 30, options, on}: MenuProps) => (
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
    <motion.path fill="none" d="M0 0H256V256H0z" />
    <motion.path
      className="stroke-current"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M40 128L216 128"
      initial={{pathLength: 0}}
      animate={{pathLength: on ? 0.5 : 1}}
    />
    <motion.path
      className="stroke-current"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M40 64L216 64"
      initial={{pathLength: 0}}
      animate={{pathLength: on ? 0.75 : 1}}
    />
    <motion.path
      className="stroke-current"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M40 192L216 192"
      initial={{pathLength: 0}}
      animate={{pathLength: on ? 0.65 : 1}}
    />
  </motion.svg>
)

export {Menu}
