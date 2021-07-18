import Home from "./home"
import Contact from "./contact"
import About from "./about"
import Services from "./services"
import Login from "./login"
import { Route } from "react-router-dom"
import React from "react"

function Routes(){
    return(
        <>
        <Route path = '/' exact component = {Home} />
        <Route path = "/contact"  component = {Contact} />
        <Route path = "/about-us"  component = {About} />
        <Route path = "/services"  component = {Services} />
        <Route path = "/login" component = {Login} />
        </>
    )
}
export  default Routes

