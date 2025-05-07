const initialState = {
    items: JSON.parse(localStorage.getItem(`favorites`)) || [],
};

export default function favoritesReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_FAVORITE':
            const updated = [...state.items, action.payload];
            localStorage.setItem(`favorites`, JSON.stringify(updated));
            return {...state, items: updated };
            default:
                return state;
    }
}