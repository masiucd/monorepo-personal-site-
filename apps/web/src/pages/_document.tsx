import {Head, Html, Main, NextScript} from "next/document"

import {InterFont} from "~/lib/fonts"

export default function Document() {
  return (
    <Html lang="en" className={InterFont.className}>
      <Head>
        {/* <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        /> */}
        {/* <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
