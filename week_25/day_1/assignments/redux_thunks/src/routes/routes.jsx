import { Route } from "react-router-dom"
import React from "react"
import Register from "../components/registration"
import Login from "../components/login"
import Dashboard from "../components/dashboard"
import Profile from "../components/profile"

function Routes(){
    return(
        <>
        <Route path = '/register' render={() => <Register/>} />
        <Route path = '/login' render={() => <Login/>} />
        <Route path = '/dashboard' render={() => <Dashboard/>} />
        <Route path = '/profile' render={() => <Profile/>} />
        </>
    )
}
export  default Routes

