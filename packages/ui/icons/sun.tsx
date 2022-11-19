import {motion} from "framer-motion"
import {Props} from "./types"

const Sun = ({width = 30, height = 30, options}: Props) => (
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
      fill="none"
      // className="stroke-current"
      className="stroke-zinc-100 dark:stroke-zinc-900"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M92.8 59L85.1 40.5"
      initial={{pathLength: 0}}
      animate={{pathLength: 1}}
      transition={{duration: 0.5}}
    />
    <motion.path
      fill="none"
      // className="stroke-current"
      className="stroke-zinc-100 dark:stroke-zinc-900"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M43 108.8L24.5 101.1"
      initial={{pathLength: 0}}
      animate={{pathLength: 1}}
      transition={{duration: 0.5}}
    />
    <motion.path
      fill="none"
      // className="stroke-current"
      className="stroke-zinc-100 dark:stroke-zinc-900"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M213 108.8L231.5 101.1"
      initial={{pathLength: 0}}
      animate={{pathLength: 1}}
      transition={{duration: 0.5}}
    />
    <motion.path
      fill="none"
      // className="stroke-current"
      className="stroke-zinc-100 dark:stroke-zinc-900"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M163.2 59L171 40.5"
      initial={{pathLength: 0}}
      animate={{pathLength: 1}}
      transition={{duration: 0.5}}
    />
    <motion.path
      fill="none"
      // className="stroke-current"
      className="stroke-zinc-100 dark:stroke-zinc-900"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M240 160L16 160"
      initial={{pathLength: 0}}
      animate={{pathLength: 1}}
      transition={{duration: 0.5}}
    />
    <motion.path
      fill="none"
      // className="stroke-current"
      className="stroke-zinc-100 dark:stroke-zinc-900"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="M208 200L48 200"
      initial={{pathLength: 0}}
      animate={{pathLength: 1}}
      transition={{duration: 0.5}}
    />
    <motion.path
      d="M70.2 160a60 60 0 11115.6 0"
      fill="none"
      // className="stroke-current"
      className="stroke-zinc-100 dark:stroke-zinc-900"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      initial={{pathLength: 0}}
      animate={{pathLength: 1}}
      transition={{duration: 0.5}}
    />
  </motion.svg>
)

export {Sun}
