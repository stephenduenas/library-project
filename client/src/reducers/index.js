import { combineReducers } from 'redux';
import bookReducer from './books';

export default combineReducers({
    books: bookReducer
});
