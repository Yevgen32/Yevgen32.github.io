import { combineReducers } from 'redux';

import { repositories } from '../repositories/repositories.reducers';
import { searchHistory } from '../search/search-history.reducers';
import { ui } from '../ui/ui.reducers';

const rootReducer = combineReducers({
    ui,
    repositories,
    searchHistory,
});

export default rootReducer;