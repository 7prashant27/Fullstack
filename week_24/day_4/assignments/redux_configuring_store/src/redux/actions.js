import { DELETE_TODO, ADD_TODO, TOGGLE_TASK, AUTH_SUCCESS, LOGOUT } from './actionTypes'
import { v4 as uuid } from 'uuid'

export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload: {
        id: uuid(),
        title: payload,
        status: false
    }
})

export const deleteTodo = (payload) => ({
    type: DELETE_TODO,
    payload
})

export const toggleTask = (payload) => ({
    type: TOGGLE_TASK,
    payload
})

export const authSuccess = (email, password) => ({
    type: AUTH_SUCCESS,
    payload: {
        email: email,
        password: password
    }
})

export const handleLogout = () => ({
    type: LOGOUT
})