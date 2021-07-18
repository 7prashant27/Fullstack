import { Add_Counter, Reduce_Counter, Multiply_Counter, Divide_Counter  } from "./actionTypes"


export const addCounter = (payload) => ({
    type : Add_Counter,
    payload
})

export const reduceCounter = (payload) => ({
    type : Reduce_Counter,
    payload
})

export const multiplyCounter = (payload) => ({
    type : Multiply_Counter,
    payload
})

export const DivideCounter = (payload) => ({
    type : Divide_Counter,
    payload
})