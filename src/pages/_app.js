import React from "react"
import "styles/index.css"

export default function App(props) {
  return <props.Component {...props.pageProps} />
}
