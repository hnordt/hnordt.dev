import React from "react"
import BaseDocument, { Html, Head, Main, NextScript } from "next/document"

export default class Document extends BaseDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Personal blog by Heliton Nordt" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Inter:100,200,300,400,500,600,700,800,900&display=swap"
          />
        </Head>
        <body className="bg-white antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
