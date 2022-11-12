import {tw} from "lib"
import Head from "next/head"
import React from "react"

import {InterFont} from "~/lib/fonts"

type Props = {
  children: React.ReactNode
  styles?: string
  fluid?: boolean
  title?: string
}

export default function Page({
  children,
  styles = "",
  fluid = false,
  title = "Marcell.C.D.com",
}: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main
        className={tw(
          `m-auto flex items-center ${fluidStyles(fluid)} ${
            InterFont.className
          } min-h-[calc(100vh-20ch)] `,
          styles
        )}
      >
        {children}
      </main>
    </>
  )
}

function fluidStyles(fluid: boolean) {
  let styles = " "
  if (fluid) {
    styles += " w-full "
  } else {
    styles += " max-w-[140ch] "
  }
  return styles
}
