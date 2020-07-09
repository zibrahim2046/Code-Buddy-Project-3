import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import bookReducer from './bookReducer';


export default combineReducers({
    error: errorReducer,
    auth: authReducer,
    book: bookReducer
});
