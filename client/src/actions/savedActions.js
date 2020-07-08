import axios from 'axios';
import { SAVED_ITEMS, ADD_ITEMS, DELETE_ITEM, SAVED_LOADING } from './types';

export const savedItems = ({ videoURL, books }) => dispatch => {
    dispatch(setSavedLoading());
    axios
        .get('/api/saved')
        .then(res =>
            dispatch({
                type: GET_SAVED,
                payload: res.data
            })
        )
};

//Save Content

export const setSavedItems = ({ videoURL, books }) => dispatch => {
    return {
        type: SAVED_ITEMS
    }
}

const body = JSON.stringify({ videoURL, books });

axios.post('/api/saved', body, config).then(res => dispatch({
    type: SAVED_ITEMS,
    payload: res.data
}));