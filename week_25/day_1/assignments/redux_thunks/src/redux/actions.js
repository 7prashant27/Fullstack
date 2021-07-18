import {
    REGISTER_USERS_FAILURE, REGISTER_USERS_REQUEST, REGISTER_USERS_SUCCESS,
    LOGIN_USERS_REQUEST, LOGIN_USERS_SUCCESS, LOGIN_USERS_FAILURE,
    GITHUB_USERS_REQUEST, GITHUB_USERS_SUCCESS, GITHUB_USERS_FAILURE,
    PROFILE_USERS_REQUEST, PROFILE_USERS_SUCCESS, PROFILE_USERS_FAILURE,
    LOGOUT_USER, HANDLE_PAGE_CHANGE
} from './actionTypes'

import axios from "axios"


export const registerUserRequest = () => ({
    type: REGISTER_USERS_REQUEST,
})

export const registerUserSuccess = (payload) => ({
    type: REGISTER_USERS_SUCCESS,
    payload
})

export const registerUserFailure = (payload) => ({
    type: REGISTER_USERS_FAILURE,
    payload
})

export const registerRequest = payload => dispatch => {
    dispatch(registerUserRequest())
    console.log(payload)
    return axios.post("http://localhost:8080/auth/register", {
        ...payload
    }).then(res => dispatch(registerUserSuccess(res.data))).catch(err => dispatch(registerUserFailure(err)))
}



export const loginUserRequest = () => ({
    type: LOGIN_USERS_REQUEST,
})

export const loginUserSuccess = (payload) => ({
    type: LOGIN_USERS_SUCCESS,
    payload
})

export const loginUserFailure = (payload) => ({
    type: LOGIN_USERS_FAILURE,
    payload
})

export const loginRequest = payload => dispatch => {
    dispatch(loginUserRequest())
    console.log(payload)
    return axios.post("http://localhost:8080/auth/login",{...payload})
    .then(res => dispatch(loginUserSuccess({token : res.data.token, username : payload.username})))
    .catch(err => dispatch(loginUserFailure(err)))
}


export const logoutUser = () => ({
    type: LOGOUT_USER
})

export const githubUserRequest = (payload) => ({
    type: GITHUB_USERS_REQUEST,
    payload
})

export const githubUserSuccess = (payload) => ({
    type: GITHUB_USERS_SUCCESS,
    payload
})

export const githubUserFailure = (payload) => ({
    type: GITHUB_USERS_FAILURE,
    payload
})

export const githubRequest = payload => dispatch => {
    dispatch(githubUserRequest())
    console.log(payload)
    return axios.get(`https://api.github.com/search/users?q=${payload.query}&page=${payload.page}&per_page=${payload.perpage}`)
        .then(res => {
            console.log(res.data)
            return dispatch(githubUserSuccess({data:res.data.items, total: res.data.total_count}))
        })
        .catch(err => dispatch(githubUserFailure(err)))
}

export const pagination = (payload) => ({
    type: HANDLE_PAGE_CHANGE,
    payload
  })


export const profileUserRequest = () => ({
    type: PROFILE_USERS_REQUEST,
})

export const profileUserSuccess = (payload) => ({
    type: PROFILE_USERS_SUCCESS,
    payload
})

export const profileUserFailure = (payload) => ({
    type: PROFILE_USERS_FAILURE,
    payload
})

export const profileRequest = payload => dispatch => {
    dispatch(profileUserRequest())
    console.log(payload)
    return axios(
        `http://localhost:8080/user/${payload.username}`,
        {
          method: "get",
          headers: {
            Authorization: `Bearer ${payload.token}`
          },
        }
      )
    .then(res => dispatch(profileUserSuccess(res.data)))
    .catch(err => dispatch(profileUserFailure(err)))
}