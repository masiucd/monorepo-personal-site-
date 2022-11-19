import {tw} from "lib"
import {useTheme} from "next-themes"
import {AnimatePresence, motion} from "framer-motion"
import Head from "next/head"
import Link from "next/link"
import {useRouter} from "next/router"
import {ReactNode, useEffect, useState} from "react"
import Footer from "./footer"

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

// TODO move into hooks package
function useMounted() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  return mounted
}

export default function Layout({children, styles = "", metaData}: Props) {
  const {theme, setTheme} = useTheme()
  const mounted = useMounted()
  const router = useRouter()
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
            {/* TODO use matches here  */}
            <ul className="hidden md:flex gap-5">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Picks</Link>
              </li>
            </ul>
            <MobileMenu />
          </nav>

          <div className="relative">
            {mounted ? (
              <button
                type="button"
                aria-label="Toggle Theme Mode"
                className="mr-2 md:mr-0"
                onClick={() => {
                  setTheme(theme === "light" ? "dark" : "light")
                }}
              >
                {mounted && theme === "dark" ? "Light" : "Dark"}
              </button>
            ) : (
              <button disabled> - </button>
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
  const [on, setOn] = useState(false)
  const toggleMenu = () => {
    if (on) {
      setOn(false)
      document.body.style.overflow = ""
    } else {
      setOn(true)
      document.body.style.overflow = "hidden"
    }
  }

  useEffect(() => {
    return () => {
      document.body.style.overflow = "hidden"
    }
  })
  return (
    <>
      <button
        type="button"
        aria-label="Menu Button"
        className="md:hidden mr-auto ml-2 relative z-10"
        onClick={toggleMenu}
      >
        Menu
      </button>
      <AnimatePresence>
        {on && (
          <motion.aside
            className="fixed top-0 left-0 w-full h-full flex  bg-slate-50 dark:bg-black"
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
              className="flex flex-col gap-5 pt-16 px-5 w-full"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              <motion.li
                className="text-3xl border-b-2 border-emerald-500 border-opacity-50"
                variants={itemVariants}
                whileHover={{scale: 1.01}}
              >
                <Link className="pb-1 block" href="/">
                  Home
                </Link>
              </motion.li>
              <motion.li
                className="text-3xl border-b-2 border-emerald-500 border-opacity-50"
                variants={itemVariants}
                whileHover={{scale: 1.01}}
              >
                <Link className="pb-1 block" href="/">
                  Blog
                </Link>
              </motion.li>
              <motion.li
                className="text-3xl border-b-2 border-emerald-500 border-opacity-50"
                variants={itemVariants}
                whileHover={{scale: 1.01}}
              >
                <Link className="pb-1 block" href="/">
                  About
                </Link>
              </motion.li>
              <motion.li
                className="text-3xl border-b-2 border-emerald-500 border-opacity-50"
                variants={itemVariants}
                whileHover={{scale: 1.01}}
              >
                <Link className="pb-1 block" href="/">
                  Picks
                </Link>
              </motion.li>
            </motion.ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}
