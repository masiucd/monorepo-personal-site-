"use client"

// import {motion} from "framer-motion"

import {Props} from "./types"

const Laptop = ({height = 30, width = 30, options}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width={width}
    height={height}
  >
    <path d="M232 172h-12V72a20.023 20.023 0 00-20-20H56a20.023 20.023 0 00-20 20v100H24a4 4 0 00-4 4v16a20.023 20.023 0 0020 20h176a20.023 20.023 0 0020-20v-16a4 4 0 00-4-4zM44 72a12.013 12.013 0 0112-12h144a12.013 12.013 0 0112 12v100H44zm184 120a12.013 12.013 0 01-12 12H40a12.013 12.013 0 01-12-12v-12h200zM148 88a4 4 0 01-4 4h-32a4 4 0 010-8h32a4 4 0 014 4z" />
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
  //   <path fill="none" d="M0 0H256V256H0z" />
  //   <path
  //     d="M40 176V72a16 16 0 0116-16h144a16 16 0 0116 16v104M24 176h208v16a16 16 0 01-16 16H40a16 16 0 01-16-16v-16h0z"
  //     fill="none"
  //     className="stroke-current"
  //     strokeLinecap="round"
  //     strokeLinejoin="round"
  //     strokeWidth={16}
  //   />
  //   <path
  //     fill="none"
  //     className="stroke-current"
  //     strokeLinecap="round"
  //     strokeLinejoin="round"
  //     strokeWidth={16}
  //     d="M144 88L112 88"
  //   />
  // </motion.svg>
)

export {Laptop}
