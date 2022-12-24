import {tw} from "lib"
import Head from "next/head"
import {useRouter} from "next/router"
import {ReactNode} from "react"

import Footer from "./footer"
import Header from "./header"

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
  const router = useRouter()
  const meta: Meta = {
    title: "Marcell Ciszek Druzynski",
    description: "software developer | endurance freak | tech nerd",
    image: "https://marcell-cd.vercel.app/public/static/images/jp.jpeg",
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
      <Header />
      <main className={tw(`flex-1`, styles)}>{children}</main>
      <Footer />
    </>
  )
}
