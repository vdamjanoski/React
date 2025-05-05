import { createStore, combineReducers } from "redux"
import counterReducer from "./reducers/counterReducer"
import authReducer from "./reducers/authReducer"
import cartreducer from "./reducers/cartReducer"

// creating a store for one reducer
// export const store = createStore(counterReducer)
const rootReducer = combineReducers({
    cart: cartreducer
})

export const store = createStore(rootReducer)
// https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0243cd7b7cb5b2c1add33b06e1d0307b&units=metric