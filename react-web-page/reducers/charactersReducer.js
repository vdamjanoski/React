import { FETCH_CHARACTERS } from "../actions/characterActions";

const initialState = {
    list: [],
};

export default function charactersReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_CHARACTERS:
            return {...state, list: action.payload};
            default:
                return state;
    }
}