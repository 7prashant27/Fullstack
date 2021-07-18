import React from "react"
import { Route } from "react-router-dom"
import About from "./About"
import Home from "./Home"
import Pricing from "./Pricing"
import Products from "./Products"
import Sign from "./Sign-up"
import Support from "./Support"

function Routes(){
    return(
        <>
        <Route path="/" exact render={()=><Home/> }/>
        <Route path="/about" exact render={()=><About/>}/>
        <Route path="/products" render={()=> <Products/>}/>
        <Route path="/pricing" render={()=> <Pricing/>}/>
        <Route path="/support" render={()=> <Support/>}/>
        <Route path="/sign-up" render={()=> <Sign/>}/>
        </>
    )
}
export { Routes}