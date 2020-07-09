import { GET_BOOKS, ADD_BOOKS, DELETE_BOOKS, BOOKS_LOADING } from  '../actions/types';

const initialState = {
    saved: [],
    loading: false, 
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_BOOKS:
            return {
                ...state
            }
        case ADD_BOOKS:
            return {
                ...state,
                saved: action.payload,
                loading: false
            }
        case BOOKS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}