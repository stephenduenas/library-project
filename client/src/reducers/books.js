
import { ACTION_TYPES } from '../constants/action-types.js';

const { FETCH_BOOKS, ADD_BOOK, UPDATE_BOOK, DELETE_BOOK } = ACTION_TYPES;

const INITIAL_VALUE = {};

const bookReducer = (state = INITIAL_VALUE, {type, payload}) => {
    switch (type) {
        case FETCH_BOOKS:
            return {
                ...state,
                ...payload
            };
        case ADD_BOOK:
            return {
                ...state,
                [payload._id]: {
                    ...payload
                }
            };
        case UPDATE_BOOK:
            return {
                ...state,
                [payload.id]: {
                    ...payload.form
                }
            };
        case DELETE_BOOK:
            delete state[payload];
            return { ...state };
        default:
            return state;
    }
};

export default bookReducer;
