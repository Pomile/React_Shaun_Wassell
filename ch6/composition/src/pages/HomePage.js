import React from "react"
import { Greeting } from "../Greeting"

export const HomePage = () => {
  return (
    <>
    <h1>HomePage</h1>
    <Greeting userName='Евгений' numOfMessages={10} />
    </>
  )
}