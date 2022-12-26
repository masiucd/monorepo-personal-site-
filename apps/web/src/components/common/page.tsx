import Head from "next/head"
import {useRouter} from "next/router"
import {ReactNode} from "react"
import {twMerge as tw} from "tailwind-merge"

type Meta = {
  title?: string
  description?: string
  image?: string
  type?: string
}
interface Props {
  children: ReactNode
  fluid?: boolean
  styles?: string
  metaData?: Meta
}

export default function Page({
  children,
  fluid = false,
  styles = "",
  metaData,
}: Props) {
  const router = useRouter()
  const meta: Meta = {
    title: "Marcell Ciszek Druzynski",
    description: "software developer | endurance freak | tech nerd",
    image: "https://marcell-cd.vercel.app/images/jp.jpg",
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
        <meta property="og:site_name" content="marcell-cd" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@masiu_cd" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <div className={tw("m-auto max-w-3xl", mergedStyles(fluid, styles))}>
        {children}
      </div>
    </>
  )
}

function mergedStyles(fluid: boolean, styles: string) {
  return tw(applyFluidStyles(fluid), styles)
}
function applyFluidStyles(fluid: boolean): string {
  if (fluid) {
    return " max-w-[100%] "
  }
  return ""
}
