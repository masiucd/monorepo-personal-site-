import {AnimatePresence, motion} from "framer-motion"
import {useLockedBody} from "lib"
import {useRouter} from "next/router"
import {useEffect} from "react"
import {Menu} from "ui"

import NavLink from "~/components/common/nav_link"
import navLinks from "~/static_data/nav_links.json"

const itemVariants = {
  closed: {
    opacity: 0,
    x: -100,
  },
  open: {opacity: 1, x: 0},
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
    },
  },
}

function MobileMenu() {
  const [locked, setLocked] = useLockedBody()
  const {pathname} = useRouter()
  const toggleMenu = () => {
    setLocked(!locked)
  }
  useEffect(() => {
    setLocked(false)
  }, [pathname, setLocked])
  return (
    <>
      <button
        type="button"
        aria-label="Menu Button"
        className="ml-2 relative z-20"
        onClick={toggleMenu}
      >
        <Menu on={locked} />
      </button>
      <AnimatePresence>
        {locked && (
          <motion.aside
            className="fixed top-0 left-0 w-full h-full flex bg-slate-50 dark:bg-black z-10"
            role="dialog"
            initial={{opacity: 0.45, scale: 0.3}}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0.45,
              y: "100%",
              transition: {delay: 0.7, duration: 0.3},
            }}
          >
            <motion.ul
              className="flex flex-col gap-5 pt-20 px-5 w-full"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {navLinks.map(({name, path}) => (
                <motion.li
                  key={name}
                  className="text-3xl border-b-2 border-sky-600 dark:border-sky-500 dark:border-opacity-60"
                  variants={itemVariants}
                  whileHover={{scale: 1.01}}
                >
                  <NavLink className="capitalize pb-1 block" href={path}>
                    {name}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileMenu
