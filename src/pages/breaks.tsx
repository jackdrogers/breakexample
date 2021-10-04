import React from "react"
import { Holidays } from "./Holidays"
import { Router as MyRouter } from "@reach/router"

const Router = () => {
  return (
    <MyRouter>
      <Holidays path="/breaks/:date" />
    </MyRouter>
  )
}

export default Router
