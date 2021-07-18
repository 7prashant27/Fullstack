import {
    POST_NEW_TASK_REQUEST, POST_NEW_TASK_SUCCESS, POST_NEW_TASK_FAILURE,
    GET_TODO_LIST_REQUEST, GET_TODO_LIST_SUCCESS, GET_TODO_LIST_FAILURE,
    GET_TASK_REQUEST, GET_TASK_SUCCESS, GET_TASK_FAILURE,
    DELETE_TASK_REQUEST, DELETE_TASK_SUCCESS, DELETE_TASK_FAILURE,
    EDIT_TASK_REQUEST, EDIT_TASK_SUCCESS, EDIT_TASK_FAILURE,
    HANDLE_PAGE_CHANGE
} from './actionTypes'

import axios from "axios"



export const postNewTaskRequest = () => ({
    type: POST_NEW_TASK_REQUEST,
})
export const postNewTaskSuccess = (payload) => ({
    type: POST_NEW_TASK_SUCCESS,
    payload
})
export const postNewTaskFailure = (payload) => ({
    type: POST_NEW_TASK_FAILURE,
    payload
})
export const newTodoRequest = payload => dispatch => {
    dispatch(postNewTaskRequest())
    return axios.get(``, {
        ...payload
    }).then(res => dispatch(postNewTaskSuccess(res.data))).catch(err => dispatch(postNewTaskFailure(err)))
}



export const getTodoListRequest = () => ({
    type: GET_TODO_LIST_REQUEST,
})
export const getTodoListSuccess = (payload) => ({
    type: GET_TODO_LIST_SUCCESS,
    payload
})
export const getTodoListFailure = (payload) => ({
    type: GET_TODO_LIST_FAILURE,
    payload
})
export const TodoListRequest = payload => dispatch => {
    dispatch(getTodoListRequest())
    console.log(payload)
    return axios.get(``)
        .then(res => dispatch(getTodoListSuccess(res.data)))
        .catch(err => dispatch(getTodoListFailure(err)))
}



export const getTaskRequest = () => ({
    type: GET_TASK_REQUEST,
})
export const getTaskSuccess = (payload) => ({
    type: GET_TASK_SUCCESS,
    payload
})
export const getTaskFailure = (payload) => ({
    type: GET_TASK_FAILURE,
    payload
})
export const taskRequest = payload => dispatch => {
    dispatch(getTaskRequest())
    console.log(payload)
    return axios.post(``, { ...payload })
        .then(res => dispatch(getTaskSuccess({ token: res.data.token, username: payload.username })))
        .catch(err => dispatch(getTaskFailure(err)))
}




export const deleteTaskRequest = (payload) => ({
    type: DELETE_TASK_REQUEST,
    payload
})
export const deleteTaskSuccess = (payload) => ({
    type: DELETE_TASK_SUCCESS,
    payload
})
export const deleteTaskFailure = (payload) => ({
    type: DELETE_TASK_FAILURE,
    payload
})
export const deleteRequest = payload => dispatch => {
    dispatch(deleteTaskRequest())
    console.log(payload)
    return axios.get(``)
        .then(res => {
            console.log(res.data)
            return dispatch(deleteTaskSuccess({ data: res.data.items, total: res.data.total_count }))
        })
        .catch(err => dispatch(deleteTaskFailure(err)))
}


export const editTaskRequest = (payload) => ({
    type: EDIT_TASK_REQUEST,
    payload
})
export const editTaskSuccess = (payload) => ({
    type: EDIT_TASK_SUCCESS,
    payload
})
export const editTaskFailure = (payload) => ({
    type: EDIT_TASK_FAILURE,
    payload
})
export const editRequest = payload => dispatch => {
    dispatch(editTaskRequest())
    console.log(payload)
    return axios.get(``)
        .then(res => {
            console.log(res.data)
            return dispatch(editTaskSuccess({ data: res.data.items, total: res.data.total_count }))
        })
        .catch(err => dispatch(editTaskFailure(err)))
}



export const pagination = (payload) => ({
    type: HANDLE_PAGE_CHANGE,
    payload
})