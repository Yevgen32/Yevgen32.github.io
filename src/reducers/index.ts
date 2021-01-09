import { combineReducers } from 'redux';

import { repositories } from '../repositories/repositories.reducers';

const rootReducer = combineReducers({
    repositories,
});

export default rootReducer;