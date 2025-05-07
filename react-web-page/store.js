import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';



const rootReducer = combineReducers({
    characters: charactersReducer,
    favorites: favoritesReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));