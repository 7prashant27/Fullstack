import { Add_Counter, Reduce_Counter, Multiply_Counter, Divide_Counter } from "./actionTypes"
import { store } from "./store"

export const initState = {counter:0}

export default (state, {type, payload} ) => {
    switch(type){

        case Add_Counter:
            return {...state, counter: state.counter + payload }
        case Reduce_Counter:
            return {...state, counter: state.counter - payload }
        case Multiply_Counter:
            return {...state, counter: state.counter * payload }
        case Divide_Counter:
            if(state.counter / payload){
                return {...state, counter: state.counter / payload }
            }
            else(alert("sorry not divisible"))
        default:
            return state

    }
}