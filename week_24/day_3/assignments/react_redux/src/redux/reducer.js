import { ADD_COUNTER, REDUCE_COUNETER, ADD_TODO , DELETE_TODO, TOGGLE_STATUS} from "./actionTypes"

export const initState = {
    counter: 0,
    todo: [],
    total: 0,
    completed_task: 0,
    not_completed: 0
}

export default (state = initState, { type, payload }) => {

    switch (type) {
        case ADD_COUNTER:
            return { ...state, counter: state.counter + payload }
        case REDUCE_COUNETER:
            return { ...state, counter: state.counter - payload }
        case ADD_TODO:

            return {
                ...state,
                todo: [...state.todo, payload],
                total: state.total + 1,
                completed_task: state.completed_task,
                not_completed: state.not_completed + 1
            }
        case DELETE_TODO:

            let task
            state.todo.forEach(Element => {
                if(Element.id == payload){
                    task = Element.status
                }
            })

            return {
                ...state,
                todo: state.todo.filter(Element => Element.id !== payload),
                total: state.total - 1,
                completed_task: task ? state.completed_task - 1 : state.completed_task,
                not_completed: task ? state.not_completed : state.not_completed - 1
            }
        case TOGGLE_STATUS:

            let todo = state.todo

            todo = todo.map(elem => {
                if (elem.id === payload) {
                    return { ...elem, status: !elem.status }
                }
                else {
                    return elem
                }
            })
            
           let x = todo.filter((item) => item.status === true).length
            let y = state.total - x

            return {
                ...state,
                todo: todo,
                completed_task: x,
                not_completed: y
            }
        default:
            return state
    }
}