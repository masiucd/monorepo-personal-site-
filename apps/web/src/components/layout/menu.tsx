import {motion} from "framer-motion"

import navlinks from "~/static/nav_links.json"
import socialLinks from "~/static/social_media.json"

import NavLink from "../nav_link"

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: {opacity: 1},
}
const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
      // delayChildren: 0.5,
    },
  },
}

export default function Menu() {
  return (
    <motion.aside
      className="bg-gray-900/80 fixed left-0 top-0 w-full h-full grid items-center content-center z-40"
      initial={{y: "100%"}}
      animate={{
        y: 0,
        transition: {type: "spring", damping: 12},
      }}
      exit={{
        y: "100%",
        transition: {delay: 0.7, duration: 0.3},
      }}
    >
      <motion.ul
        initial="closed"
        animate="open"
        exit="closed"
        variants={sideVariants}
        className="flex flex-col items-center justify-center gap-5 mb-10"
      >
        <motion.li whileHover={{scale: 1.1}} variants={itemVariants}>
          <NavLink href="/" styles="text-3xl capitalize text-white">
            home
          </NavLink>
        </motion.li>
        {navlinks.map(({name, href}) => (
          <motion.li
            key={name}
            whileHover={{scale: 1.1}}
            variants={itemVariants}
          >
            <NavLink href={href} styles="text-3xl capitalize text-white">
              {name}
            </NavLink>
          </motion.li>
        ))}
      </motion.ul>

      <motion.ul
        initial="closed"
        animate="open"
        exit="closed"
        variants={sideVariants}
        className="flex items-center justify-center gap-3"
      >
        {socialLinks.map(({name, href}) => (
          <motion.li
            key={name}
            whileHover={{scale: 1.1}}
            variants={itemVariants}
          >
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-2xl capitalize text-white"
            >
              {name}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.aside>
  )
}
