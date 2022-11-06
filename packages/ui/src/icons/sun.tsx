// import {motion} from "framer-motion"

import {Props} from "./types"

function Sun({width = 30, height = 30, options}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width={width}
      height={height}
    >
      <path
        className="stroke-current"
        d="M81.444 42.056a4 4 0 117.391-3.06l7.653 18.477a4 4 0 11-7.39 3.06zm-58.45 62.779l18.478 7.653a4 4 0 003.062-7.39l-18.478-7.654a4 4 0 00-3.061 7.391zM213 112.794a3.975 3.975 0 001.529-.306l18.477-7.653a4 4 0 00-3.061-7.39l-18.478 7.653a4 4 0 001.533 7.696zm-51.323-50.096a3.996 3.996 0 005.226-2.165l7.654-18.477a4 4 0 10-7.391-3.06l-7.653 18.477a3.999 3.999 0 002.164 5.225zM244 160a4 4 0 01-4 4h-54.143l-.012.001-.014-.001H16a4 4 0 010-8h49.133a64 64 0 11125.734 0H240a4 4 0 014 4zm-170.704-4h109.408a56 56 0 10-109.408 0zM208 196H48a4 4 0 000 8h160a4 4 0 000-8z"
      />
    </svg>
    // <motion.svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width={width}
    //   height={height}
    //   viewBox="0 0 256 256"
    //   whileHover={{
    //     scale: 1.01,
    //   }}
    //   {...options}
    // >
    //   <motion.path fill="none" d="M0 0H256V256H0z" />
    //   <motion.path
    //     fill="none"
    //     className="stroke-current"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //     strokeWidth={16}
    //     d="M92.8 59L85.1 40.5"
    //     initial={{pathLength: 0}}
    //     animate={{pathLength: 1}}
    //     transition={{duration: 0.5}}
    //   />
    //   <motion.path
    //     fill="none"
    //     className="stroke-current"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //     strokeWidth={16}
    //     d="M43 108.8L24.5 101.1"
    //     initial={{pathLength: 0}}
    //     animate={{pathLength: 1}}
    //     transition={{duration: 0.5}}
    //   />
    //   <motion.path
    //     fill="none"
    //     className="stroke-current"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //     strokeWidth={16}
    //     d="M213 108.8L231.5 101.1"
    //     initial={{pathLength: 0}}
    //     animate={{pathLength: 1}}
    //     transition={{duration: 0.5}}
    //   />
    //   <motion.path
    //     fill="none"
    //     className="stroke-current"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //     strokeWidth={16}
    //     d="M163.2 59L171 40.5"
    //     initial={{pathLength: 0}}
    //     animate={{pathLength: 1}}
    //     transition={{duration: 0.5}}
    //   />
    //   <motion.path
    //     fill="none"
    //     className="stroke-current"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //     strokeWidth={16}
    //     d="M240 160L16 160"
    //     initial={{pathLength: 0}}
    //     animate={{pathLength: 1}}
    //     transition={{duration: 0.5}}
    //   />
    //   <motion.path
    //     fill="none"
    //     className="stroke-current"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //     strokeWidth={16}
    //     d="M208 200L48 200"
    //     initial={{pathLength: 0}}
    //     animate={{pathLength: 1}}
    //     transition={{duration: 0.5}}
    //   />
    //   <motion.path
    //     d="M70.2 160a60 60 0 11115.6 0"
    //     fill="none"
    //     className="stroke-current"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //     strokeWidth={16}
    //     initial={{pathLength: 0}}
    //     animate={{pathLength: 1}}
    //     transition={{duration: 0.5}}
    //   />
    // </motion.svg>
  )
}

export {Sun}
