import {combineReducers} from 'redux';
import input from './inputReducer'
import gallery from './galleryReducer'

const rootReducer = combineReducers({input,gallery});

export default rootReducer;