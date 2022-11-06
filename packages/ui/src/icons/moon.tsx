// import {motion} from "framer-motion"

import {Props} from "./types"

function Moon({height = 30, width = 30, options}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width={height}
      height={width}
    >
      <path
        className="stroke-slate-900 dark:stroke-slate-100"
        d="M156 76a71.915 71.915 0 00-16.047 1.817 67.993 67.993 0 00-52.68-64.093 4 4 0 00-4.793 4.793A60.349 60.349 0 0184 32a60.068 60.068 0 01-60 60 60.447 60.447 0 01-13.485-1.519 4 4 0 00-4.792 4.794 68.184 68.184 0 0034.45 44.827A47.967 47.967 0 0076 220h80a72 72 0 000-144zM15.219 99.437A68.607 68.607 0 0024 100a68.077 68.077 0 0068-68 68.823 68.823 0 00-.564-8.794A59.665 59.665 0 01132 80l-.003.129a72.347 72.347 0 00-44.37 45.289 47.983 47.983 0 00-41.233 8.842 60.217 60.217 0 01-31.175-34.823zM156 212H76a40 40 0 119.541-78.856A72.05 72.05 0 0084 148a4 4 0 008 0 64 64 0 1164 64z"
      />
    </svg>
    // <motion.svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width={height}
    //   height={width}
    //   viewBox="0 0 256 256"
    //   whileHover={{
    //     scale: 1.01,
    //   }}
    //   {...options}
    // >
    //   <motion.path fill="none" d="M0 0H256V256H0z" />
    //   <motion.path
    //     d="M216.7 152.6A91.9 91.9 0 01103.4 39.3h0a92 92 0 10113.3 113.3z"
    //     fill="none"
    //     className="stroke-current"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //     strokeWidth={16}
    //     initial={{pathLength: 0}}
    //     animate={{pathLength: 1}}
    //     transition={{duration: 0.6}}
    //   />
    // </motion.svg>
  )
}

export {Moon}
