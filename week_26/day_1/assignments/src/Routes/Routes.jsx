import React from "react"
import { Route } from "react-router-dom"
import Home from "../Components/home"
import Tasks from "../Components/task_list"
import Task from "../Components/task"
import TaskEdit from "../Components/task_edit"

function Routes(){
    return(
        <>
        <Route path="/" exact render={()=> <Home/>}/>
        <Route path="/tasks" exact render={()=> <Tasks/>}/>
        <Route path="/tasks/:id" exact render={(props)=> <Task {...props}/>}/>
        <Route path="/tasks/:id/edit" exact render={(props)=> <TaskEdit {...props}/>}/>
        </>
    )
}
export {Routes}