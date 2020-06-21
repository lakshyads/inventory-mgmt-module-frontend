import { combineReducers } from 'redux';
import authReducer from './authReducer';
import categoryReducer from './categoryReducer';
import itemsReducer from './itemsReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    auth: authReducer,
    categories: categoryReducer,
    items: itemsReducer,
    form: formReducer,
})