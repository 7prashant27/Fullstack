import React from "react"
import {Route} from "react-router-dom"
import Landing from "../Components/Landing"
import Login from "../Components/Login"

function Routes(){
    return(
        <>
        <Route path = '/' exact component = {Landing} />
        <Route path = "/login" component = {Login} />
        </>
    )
}
export  default Routes

