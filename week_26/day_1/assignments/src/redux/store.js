import { createStore, applyMiddleware, compose } from "redux"
import reducer  from './reducer'
import thunk from "redux-thunk";


const logger = () => next => action => {
    console.log(action.type)
    return next(action)
}


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export const store = createStore(reducer,
    composeEnhancers(applyMiddleware(thunk,logger))
)