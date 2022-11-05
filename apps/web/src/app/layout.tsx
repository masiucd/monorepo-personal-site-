/* eslint-disable @next/next/no-head-element */
import "../styles/global.css"

import {tw} from "lib"
import React from "react"

import {barlowCondensed400, openSans400} from "~/lib/fonts"

import NavLink from "../components/nav/nav_link"
import {Highlighter} from "ui"

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
      {/* max-lg:bg-red-500 */}
      <div className="lg:max-w-[75%] flex items-center m-auto">
        <strong className="md:px-2">
          <NavLink
            styles={`md:text-4xl ${barlowCondensed400.className}`}
            href="/"
          >
            M<span className="text-blue-500">ar</span>cell.
            <span className="text-blue-500">C</span>.D.com
          </NavLink>
        </strong>
        <nav className="border border-blue-500 min-h-[10rem] flex items-center ml-auto">
          <ul className={tw("flex gap-5 md:px-5 px-2", openSans400.className)}>
            {navListItems.map(({name, href}) => (
              <li key={name} className="capitalize">
                <NavLink
                  styles="hover:text-blue-500 hover:scale-105 inline-block"
                  href={href}
                >
                  {name}
                </NavLink>
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
    <footer className="border border-blue-500 min-h-[10rem] flex">
      <aside className="lg:max-w-[75%] flex flex-col items-center m-auto border-4 border-red-500 h-full justify-center">
        <small>
          © Copyright <Highlighter>Marcell Ciszek Druzysnki</Highlighter>. All
          rights reserved. {new Date().getFullYear()}
        </small>
        <ul className="flex">
          <li>a</li>
          <li>a</li>
          <li>a</li>
        </ul>
      </aside>
    </footer>
  )
}

function RootLayout({children}: Props) {
  return (
    <html lang="en" className={barlowCondensed400.className}>
      <head>
        <title>Marcell.cd.com</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main className="border border-green-500 h-[calc(100vh-20rem)] w-full flex flex-col flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
