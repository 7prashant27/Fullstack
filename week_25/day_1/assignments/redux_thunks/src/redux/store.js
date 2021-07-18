import { createStore, applyMiddleware, compose } from "redux"
import reducer from './reducer'
import thunk from "redux-thunk";


const logger = () => next => action => {
    return next(action)
}

// const logger = (store) => (next) => (action) => {
//   console.log("logger 1 dispatching action:", action);
//   console.log("store", store);
//   return next(action);
// };

// const thunk = (args) => ({ getState, dispatch }) => (next) => (action) => {
//   console.log("inside thunk");
//   if (typeof action === "function") {
//     return action(dispatch, getState, args);
//   }
//   return next(action);
// };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(reducer,
    composeEnhancers(applyMiddleware(thunk,logger))
)