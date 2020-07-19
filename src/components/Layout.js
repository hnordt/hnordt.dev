import React from "react"
import Head from "next/head"

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title} | hnordt.dev</title>
      </Head>
      <main>{props.children}</main>
    </>
  )
}
