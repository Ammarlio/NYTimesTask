import { combineReducers } from 'redux';
import userReducer from './userReducer';
import newsReducer from './newsReducer';
import settingsReducer from './settingsReducer';

export default combineReducers({
    userReducer,
    newsReducer,
    settingsReducer,
})