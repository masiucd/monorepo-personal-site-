/* eslint-disable @next/next/no-head-element */
import "../styles/global.css"

import {tw} from "lib"
import React from "react"

import {barlowCondensed400, openSans400} from "~/lib/fonts"

import NavLink from "./nav_link"

type Props = {
  children: React.ReactNode
}

const navListItems = [
  {name: "about", href: "/about"},
  {name: "blog", href: "/blog"},
]

function Header() {
  return (
    <header>
      <div className="lg:max-w-[75%] flex items-center border border-red-500 m-auto">
        <strong>
          <NavLink styles="md:text-4xl" href="/">
            M<span className="text-blue-500">ar</span>cell.
            <span className="text-blue-500">C</span>.D.com
          </NavLink>{" "}
        </strong>
        <nav className="border border-blue-500 min-h-[10rem] flex items-center ml-auto">
          <ul className={tw("flex gap-5 md:px-5 px-2", openSans400.className)}>
            {navListItems.map(({name, href}) => (
              <li key={name}>
                <NavLink href={href}> {name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="flex gap-5 md:px-5 px-2">
          <li>Dark</li>
          <li>Light</li>
          <li>System</li>
        </ul>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border border-blue-500 min-h-[10rem]">
      <h1>footer</h1>
    </footer>
  )
}

function RootLayout({children}: Props) {
  return (
    <html lang="en" className={barlowCondensed400.className}>
      <head>
        <title>Marcell.cd.com</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <body>
        <Header />
        <main className="border border-red-500 h-[calc(100vh-20rem)] w-full flex flex-col flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
