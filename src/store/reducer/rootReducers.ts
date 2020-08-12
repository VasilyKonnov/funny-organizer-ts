
import { combineReducers } from "redux";
import homeReducer from './home';
import profileReducer from './tasks';

export default combineReducers({
    home: homeReducer,
    profile: profileReducer
})