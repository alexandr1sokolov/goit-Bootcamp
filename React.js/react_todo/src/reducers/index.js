import {combineReducers} from 'redux';
import input from './inputReducer'
import inputsArr from './addTaskReducer'

const rootReducer = combineReducers({input,inputsArr});
export default rootReducer;
