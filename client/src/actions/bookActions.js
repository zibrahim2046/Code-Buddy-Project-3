import axios from 'axios';
import { GET_BOOKS, ADD_BOOK, DELETE_BOOK, BOOKS_LOADING } from  './types';
import { tokenConfig } from './authActions';
import { returnErrors} from './errorActions';


export const getBooks = () => (dispatch, getState) => {
    dispatch(setBooksLoading());
    axios
        .get('/api/books', tokenConfig(getState))
        .then(res =>
            dispatch({
                type: GET_BOOKS,
                payload: res.data
            })
        ).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
    
};

// export const addBook = (book) => (dispatch, getState) => {
//     axios   
//         .post('/api/books', book, tokenConfig(getState))
//         .then(res => 
//             dispatch({
//                 type: ADD_BOOK,
//                 payload: res.data
//             })
//         ).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
// };

export const addBook = ({ title, author, synopsis, link }) => (dispatch, getState) => {
    // const config = {
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }

    // Request body
    const body = JSON.stringify({ title, author, synopsis, link });
    
    
    axios   
        .post('/api/books', body, tokenConfig(getState))
        .then(res => 
            dispatch({
                type: ADD_BOOK,
                payload: res.data
            })
        ).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const deleteBook = (id) => (dispatch, getState) => {
    axios
        .delete(`/api/books/${id}`, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: DELETE_BOOK,
                payload: id
            })
        ).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
    };

export const setBooksLoading = () => {
    return {
        type: BOOKS_LOADING
    }
}

// const body = JSON.stringify({ videoURL, books });

// axios.post('/api/saved', body, config).then(res => dispatch({
//     type: SAVED_ITEMS,
//     payload: res.data
// }));