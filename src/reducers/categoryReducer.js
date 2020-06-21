import types from '../actions/types';

const defaultState = {
    categories: [],
    category: {
        name: '',
    },
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case types.FETCH_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            };
        case types.ADD_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, action.payload.data],
            };
        case types.FETCH_CATEGORY:
            return {
                ...state,
                category: action.payload.data,
            };
        case types.UPDATE_CATEGORY:
            const category = action.payload.data;
            return {
                ...state,
                categories: state.categories.map(existingCategory => existingCategory._id === category._id ? category : existingCategory),
            };
        case types.DELETE_CATEGORY:
            const id = action.payload.data.categoryId;
            return {
                ...state,
                categories: state.categories.filter(category => category._id !== id)
            };
        default:
            return state;
    };
};