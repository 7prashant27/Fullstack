import {
    ADD_TODO
} from './actionTypes'


const initState = {
    todoData:[]
}


export default (state = initState, { type, payload }) => {
    switch(type){
        case ADD_TODO:
            return{
                ...state,
                todoData:[...state.todoData, payload]
            }
        
        default:
            return state
    }
}