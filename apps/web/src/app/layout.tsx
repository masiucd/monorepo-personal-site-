/* eslint-disable @next/next/no-head-element */
import "../styles/global.css"

import Link from "next/link"
import React from "react"

import {barlowCondensed400} from "~/lib/fonts"

type Props = {
  children: React.ReactNode
}

function RootLayout({children}: Props) {
  return (
    <html lang="en" className={barlowCondensed400.className}>
      <head>
        <title>Marcell.cd.com</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <body>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  )
}

export default RootLayout

function Header() {
  return (
    <header>
      <nav className="border border-red-500">
        <ul>
          <li>
            <Link href="/">Home</Link>{" "}
          </li>
        </ul>
      </nav>
    </header>
  )
}
