//import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit'
//import { createStore, applyMiddleware } from "redux";
import reposReducer from "./reposReducer";
//import { composeWithDevTools } from "redux-devtools-extension";
//import thunk from "redux-thunk"

// const rootReducer = combineReducers({
//     repos: reposReducer,

// })
// Automatically adds the thunk middleware and the Redux DevTools extension
export const store = configureStore({
    // Automatically calls `combineReducers`, added thunk
    reducer: {
        repos: reposReducer,
    }
  })

//export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))