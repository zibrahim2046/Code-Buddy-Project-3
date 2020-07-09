import axios from 'axios';
import { GET_BOOKS, ADD_BOOK, DELETE_BOOK, BOOKS_LOADING } from  './types';

export const getBooks = () => {
    return {
        type: GET_BOOKS
    };
};

export const deleteBook = (id) => {
    return {
        type: DELETE_BOOK,
        payload: id
    };
};

//Save Content

// export const setSavedItems = ({ videoURL, books }) => dispatch => {
//     return {
//         type: SAVED_ITEMS
//     }
// }

// const body = JSON.stringify({ videoURL, books });

// axios.post('/api/saved', body, config).then(res => dispatch({
//     type: SAVED_ITEMS,
//     payload: res.data
// }));