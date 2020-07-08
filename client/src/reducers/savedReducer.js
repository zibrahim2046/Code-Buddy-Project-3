import { SAVED_ITEMS, ADD_ITEMS, DELETE_ITEM, SAVED_LOADING } from  '../actions/types';

const initialState = {
    saved: [],
    loading: false, 
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SAVED_ITEMS:
            return {
                ...state,
                saved: action.payload,
                loading: false
            }
        case SAVED_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}