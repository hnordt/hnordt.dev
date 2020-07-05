import React from "react"
import Head from "next/head"

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <main className="p-6">{props.children}</main>
    </>
  )
}
