import axios from 'axios';
import { SAVED_ITEMS, ADD_ITEMS, DELETE_ITEM, SAVED_LOADING } from  './types';

export const savedItems = () => dispatch => {
    dispatch(setSavedLoading());
    axios
        .get('/api/saved')
        .then(res => 
            dispatch({
                type:GET_SAVED,
                payload: res.data
            })
        )
};

export const setSavedLoading = () => {
    return {
        type:  SAVED_LOADING
    }
}