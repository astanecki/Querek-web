import { combineReducers } from 'redux';
import AppsReducer from './reducer_apps';

const rootReducer = combineReducers({
    apps: AppsReducer
});

export default rootReducer;
