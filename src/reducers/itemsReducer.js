import types from '../actions/types';

const defaultState = {
    items: [],
    item: {
        name: '',
    },
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case types.FETCH_ITEMS:
            return {
                ...state,
                items: action.payload
            };
        case types.ADD_ITEM:
            return {
                ...state,
                item: action.payload
            };
        case types.SEARCH_ITEMS:
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
    };
};