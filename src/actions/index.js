import axios from 'axios';
import types from './types';
import { endpoints } from '../utils/pathUtil';
// axios.defaults.baseURL = 'http://localhost:3001';

export const fetchUser = () => async dispatch => {
    const response = await axios.get(endpoints.FETCH_USER);

    dispatch({ type: types.FETCH_USER, payload: response.data });
};

export const addCategory = (category) => async dispatch => {
    const res = await axios.post(endpoints.CATEGORY, category);
    dispatch({ type: types.ADD_CATEGORY, payload: res });
};

export const fetchCategory = (categoryId) => async dispatch => {
    const res = await axios.get(endpoints.CATEGORY + `/${categoryId}`);
    dispatch({ type: types.FETCH_CATEGORY, payload: res });
};

export const updateCategory = (category) => async dispatch => {
    const res = await axios.put(endpoints.CATEGORY + `/${category._id}`,category);
    dispatch({ type: types.UPDATE_CATEGORY, payload: res });
};

export const deleteCategory = (categoryId) => async dispatch => {
    const res = await axios.delete(endpoints.CATEGORY + `/${categoryId}`);
    dispatch({ type: types.DELETE_CATEGORY, payload: res });
};

export const fetchCategories = () => async dispatch => {
    const res = await axios.get(endpoints.CATEGORY);
    dispatch({ type: types.FETCH_CATEGORIES, payload: res.data });
};

export const addItem = (item) => async dispatch => {
    debugger
    const res = await axios.post(endpoints.ITEM, item);

    dispatch({ type: types.ADD_ITEM, payload: res });
};

export const fetchItems = () => async dispatch => {
    const res = await axios.get(endpoints.ITEM);

    dispatch({ type: types.FETCH_ITEMS, payload: res.data });
};

export const searchItems = (queryData) => async dispatch => {
    const res = await axios.post(endpoints.SEARCH_ITEMS, queryData);

    dispatch({ type: types.SEARCH_ITEMS, payload: res.data });
};