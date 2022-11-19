import {tw, useLockedBody, useMediaQuery, useMounted} from "lib"
import {useTheme} from "next-themes"
import {AnimatePresence, motion} from "framer-motion"
import Head from "next/head"
import Link from "next/link"
import {useRouter} from "next/router"
import {ReactNode} from "react"
import {Sun, Menu, Moon} from "ui"
import Footer from "./footer"

function NavLink({
  href,
  children,
  className = "",
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  const {pathname} = useRouter()

  const active = href === pathname
  return (
    <Link
      className={tw(`${active ? "border-b border-sky-500 " : ""}`, className)}
      href={href}
    >
      {children}
    </Link>
  )
}

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

type Meta = {
  title?: string
  description?: string
  image?: string
  type?: string
}

interface Props {
  children: ReactNode
  styles?: string
  metaData?: Meta
}

export default function Layout({children, styles = "", metaData}: Props) {
  const {theme, setTheme} = useTheme()
  const mounted = useMounted()
  const router = useRouter()
  const matches = useMediaQuery("(min-width: 768px)")
  const meta: Meta = {
    title: "Marcell Ciszek Druzynski, software developer",
    description: "software developer | endurance freak ",
    image: "https://marcell-cd.vercel.app/static/images/jp.jpeg",
    type: "website",
    ...metaData,
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://marcell-cd.vercel.app${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://marcell-cd.vercel.app${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Marcell.cd.com" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@masiu_cd" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <header>
        <div className="max-w-3xl mx-auto flex justify-between py-3">
          <nav className="relative">
            {matches ? (
              <ul className="flex gap-5 h-full items-center">
                <li>
                  <NavLink href="/">Home</NavLink>
                </li>
                <li>
                  <NavLink href="/blog">Blog</NavLink>
                </li>
                <li>
                  <NavLink href="/about">About</NavLink>
                </li>
                <li>
                  <NavLink href="/bites">Bites</NavLink>
                </li>
              </ul>
            ) : (
              <MobileMenu />
            )}
          </nav>
          <div className="relative border-2 border-slate-900 rounded-full flex items-center justify-center w-10 h-10 bg-zinc-900 dark:bg-zinc-50 shadow-sm mr-2 md:mr-0">
            {mounted && (
              <button
                type="button"
                aria-label="Toggle Theme Mode"
                onClick={() => {
                  setTheme(theme === "light" ? "dark" : "light")
                }}
              >
                {mounted && theme === "dark" ? <Sun /> : <Moon />}
              </button>
            )}
          </div>
        </div>
      </header>
      <main className={tw(`flex-1`, styles)}>{children}</main>
      <Footer />
    </>
  )
}

function MobileMenu() {
  const [locked, setLocked] = useLockedBody()
  const toggleMenu = () => {
    if (!locked) {
      setLocked(!locked)
    } else {
      setLocked(!locked)
    }
  }

  return (
    <>
      <button
        type="button"
        aria-label="Menu Button"
        className="ml-2 relative z-10"
        onClick={toggleMenu}
      >
        <Menu on={locked} />
      </button>
      <AnimatePresence>
        {locked && (
          <motion.aside
            className="fixed top-0 left-0 w-full h-full flex bg-slate-50 dark:bg-black"
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
              <motion.li
                className="text-3xl border-b-2 border-sky-600 dark:border-sky-500 dark:border-opacity-60"
                variants={itemVariants}
                whileHover={{scale: 1.01}}
              >
                <NavLink className="pb-1 block" href="/">
                  Home
                </NavLink>
              </motion.li>
              <motion.li
                className="text-3xl border-b-2 border-sky-600 dark:border-sky-500 dark:border-opacity-60"
                variants={itemVariants}
                whileHover={{scale: 1.01}}
              >
                <NavLink className="pb-1 block" href="/">
                  Blog
                </NavLink>
              </motion.li>
              <motion.li
                className="text-3xl border-b-2 border-sky-600 dark:border-sky-500 dark:border-opacity-60"
                variants={itemVariants}
                whileHover={{scale: 1.01}}
              >
                <NavLink className="pb-1 block" href="/">
                  About
                </NavLink>
              </motion.li>
              <motion.li
                className="text-3xl border-b-2 border-sky-600 dark:border-sky-500 dark:border-opacity-60"
                variants={itemVariants}
                whileHover={{scale: 1.01}}
              >
                <NavLink className="pb-1 block" href="/">
                  Picks
                </NavLink>
              </motion.li>
            </motion.ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}
