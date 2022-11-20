import {tw, useMediaQuery, useMounted} from "lib"
import Head from "next/head"
import {useRouter} from "next/router"
import {useTheme} from "next-themes"
import {ReactNode} from "react"
import {Moon, Sun} from "ui"

import NavLink from "~/components/common/nav_link"
import navLinks from "~/static_data/nav_links.json"

import Footer from "./footer"
import MobileMenu from "./mobile_menu"

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
    title: "Marcell Ciszek Druzynski",
    description: "software developer | endurance freak | tech nerd",
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
                {navLinks.map(({name, path}) => (
                  <li key={name}>
                    <NavLink href={path}>{name}</NavLink>
                  </li>
                ))}
              </ul>
            ) : (
              <MobileMenu />
            )}
          </nav>
          <div className="border-2 border-slate-900 rounded-full flex items-center justify-center w-10 h-10 bg-zinc-900 dark:bg-zinc-50 shadow-sm mr-2 md:mr-0 z-20">
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
