import { createStore, applyMiddleware, combineReducers } from "redux"
import { thunk } from "redux-thunk"
import { weatherReducer } from "./reducers/weatherReducer"

const rootReducer = combineReducers({
    weather: weatherReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))