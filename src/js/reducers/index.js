import { combineReducers } from 'redux';
import AppsReducer from './app';
import UiReducer from './ui';

const rootReducer = combineReducers({
    app: AppsReducer,
    ui: UiReducer
});

export default rootReducer;
