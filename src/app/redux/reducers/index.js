import {combineReducers} from 'redux';
import userSettingsReducers from './userSettingsReducers';

const root = combineReducers({
    userSettingsReducers,
});

export default root;
