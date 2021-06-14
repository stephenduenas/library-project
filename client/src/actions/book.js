import { ACTION_TYPES } from '../constants/action-types';
import { createBook, updateBook as fetchUpdateBook, deleteBook as fetchDeleteBook, fetchBooks } from '../api/book';

const listBooks = () => async (dispatch) => {
    const response = await fetchBooks();
    dispatch({ type: ACTION_TYPES.FETCH_BOOKS, payload: response.data });
};

const addBook = (params) => async (dispatch) => {
    try {
        const response = await createBook(params);
        dispatch({ type: ACTION_TYPES.ADD_BOOK, payload: response.data });
    } catch (error) {
        console.error(error);
    }
};

const updateBook = (params) => async (dispatch) => {
    try {
        const response = await fetchUpdateBook(params);
        dispatch({
            type: ACTION_TYPES.UPDATE_BOOK,
            payload: {
                id: response.data._id,
                form: response.data
            }
        });
    } catch (error) {
        console.error(error);
    }
};

const deleteBook = (id) => async(dispatch) => {
    try {
        await fetchDeleteBook(id);
        dispatch({
            type: ACTION_TYPES.DELETE_BOOK,
            payload: id
        });
    } catch (error) {
        console.error(error);
    }
}

export { listBooks, addBook, updateBook, deleteBook };
