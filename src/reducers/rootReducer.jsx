
import { combineReducers } from 'redux';

import  authReducer from '../reducers/authReducer';

const rootReducer = combineReducers({
    auth: authReducer,
});
console.log(rootReducer)
export default rootReducer;
