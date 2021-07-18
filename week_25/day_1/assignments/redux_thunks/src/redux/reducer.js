import {
    REGISTER_USERS_FAILURE, REGISTER_USERS_SUCCESS, REGISTER_USERS_REQUEST,
    LOGIN_USERS_REQUEST, LOGIN_USERS_SUCCESS, LOGIN_USERS_FAILURE,
    GITHUB_USERS_FAILURE, GITHUB_USERS_REQUEST, GITHUB_USERS_SUCCESS,
    PROFILE_USERS_REQUEST, PROFILE_USERS_SUCCESS, PROFILE_USERS_FAILURE,
    LOGOUT_USER, HANDLE_PAGE_CHANGE
} from "./actionTypes"

export const initState = {
    isLoading: false,
    github_data: [],
    user_data: {},
    message: "",
    isError: false,
    isAuth: false,
    token: "",
    current_user: "",
    count: 0,
    activePage:0
}


export default (state = initState, { type, payload }) => {
    console.log(type, payload)
    switch (type) {

        case REGISTER_USERS_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        case REGISTER_USERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                message: payload,
            }
        case REGISTER_USERS_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                message: payload,
            }

        case LOGIN_USERS_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        case LOGIN_USERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                isAuth: true,
                token: payload.token,
                current_user: payload.username
            }
        case LOGIN_USERS_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                message: payload.message,
            }

        case LOGOUT_USER:
            return {
                ...state,
                isAuth: false,
                user_data: {},
                github_data:[]

            }

        case GITHUB_USERS_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        case GITHUB_USERS_SUCCESS:
            console.log(payload)
            return {
                ...state,
                isLoading: false,
                github_data: payload.data,
                isError: false,
                count: payload.total

            }
        case GITHUB_USERS_FAILURE:
            console.log(payload)
            return {
                ...state,
                isLoading: false,
                isError: true,
            }

        case HANDLE_PAGE_CHANGE:
            return {
                ...state,
                activePage: payload
            }


        case PROFILE_USERS_REQUEST:
            return {
                ...state,
                isLoading: false,
                isError: true,
                message: payload,
            }
        case PROFILE_USERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user_data: payload,
                isError: false,
            }
        case PROFILE_USERS_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                message: payload
            }

        default:
            return state
    }
}