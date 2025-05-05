import { FETCH_CITY_SUCCESS, FETCH_CITY, FETCH_CITY_FAILURE } from "../actions/fetchCity"

const initialState = {
    loading: false,
    weatherData: null,
    error: ""
}

export const weatherReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CITY:
            return {...state, loading: true, error: ""}
        case FETCH_CITY_SUCCESS:
            return{...state, loading: false, weatherData: action.payload}
        case FETCH_CITY_FAILURE:
            return{...state, loading: false, error: action.payload.message}
        default: 
        return state;
    }
}