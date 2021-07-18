import { ADD_COUNTER , ADD_TODO, REDUCE_COUNETER ,DELETE_TODO,TOGGLE_STATUS } from "./actionTypes"


export const addCounter = (payload) => ({
    type : ADD_COUNTER,
    payload
})

export const reduceCounter = (payload) => ({
    type : REDUCE_COUNETER,
    payload
})

export const addTodo = payload => ({
    type: ADD_TODO,
    payload: { id: payload.id, title: payload.title, status: false }
})

export const deleteTodo = payload => ({
    type: DELETE_TODO,
    payload
})

export const toggleStatus = payload => ({
    type: TOGGLE_STATUS,
    payload
})


