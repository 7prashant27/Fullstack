import React from "react"
import {Route} from "react-router-dom"
import UserProfile from "../Components/UserProfile"

function PrivateRoutes(){
    return(
        <>
        <Route path = '/user/:id' exact component = {UserProfile}/>
        </>
    )
}
export  default PrivateRoutes

