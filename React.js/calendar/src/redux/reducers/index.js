import {combineReducers} from 'redux';
import days from './daysReducer'
import now from './nowReducer'

const rootReducer = combineReducers({days,now});
export default rootReducer;