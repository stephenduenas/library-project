import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/book' });

const fetchBooks =  () => {
    return API.get('/list');
};

const createBook =  (params) => {
    return API.post('/', params);
};

const updateBook =  (params) => {
    return API.patch(`/${params._id}`, params);
};

const deleteBook =  (id) => {
    return API.delete(`/${id}`);
};

export { fetchBooks, createBook, updateBook, deleteBook };
  