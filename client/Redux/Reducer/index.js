import { combineReducers } from 'redux';
import boardReducer from './board'
import flagReducer from './flag'
import countReducer from './bombcounter'

export default combineReducers({
    board : boardReducer,
    flag: flagReducer,
    count: countReducer
})