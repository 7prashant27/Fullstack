import {
    POST_NEW_TASK_REQUEST, POST_NEW_TASK_SUCCESS, POST_NEW_TASK_FAILURE,
    GET_TODO_LIST_REQUEST, GET_TODO_LIST_SUCCESS, GET_TODO_LIST_FAILURE,
    GET_TASK_REQUEST, GET_TASK_SUCCESS, GET_TASK_FAILURE,
    DELETE_TASK_REQUEST, DELETE_TASK_SUCCESS, DELETE_TASK_FAILURE,
    EDIT_TASK_REQUEST, EDIT_TASK_SUCCESS, EDIT_TASK_FAILURE,
    HANDLE_PAGE_CHANGE
} from "./actionTypes"

export const initState = {
    isLoading: false,
    todo_data: [],
    task_data:{},
    message: "",
    isError: false,
    total_count: 0,
    activePage: 0
}


export default (state = initState, { type, payload }) => {
    switch (type) {

        case POST_NEW_TASK_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
                message: "",
            }
        case POST_NEW_TASK_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                message: payload,
            }
        case POST_NEW_TASK_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                message: payload,
            }


        case GET_TODO_LIST_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
                message: ""
            }
        case GET_TODO_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                todo_data:payload.data,
                message:payload.message,
                total_count: payload.data.length
            }
        case GET_TODO_LIST_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                message: payload,
            }


        case GET_TASK_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
                message:"",
            }
        case GET_TASK_SUCCESS:
            return {
                ...state,
                isLoading: false,
                task_data: payload.data,
                isError: false,
                message: payload.message
            }
        case GET_TASK_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                message:payload
            }


        case DELETE_TASK_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
                message: "",
            }
        case DELETE_TASK_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                message: payload
            }
        case DELETE_TASK_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                message: payload
            }


        case EDIT_TASK_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
                message: "",
            }
        case EDIT_TASK_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                message:payload
            }
        case EDIT_TASK_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                message: payload
            }


        case HANDLE_PAGE_CHANGE:
            return {
                ...state,
                activePage: payload
            }

            
        default:
            return state
    }
}

export default reducer