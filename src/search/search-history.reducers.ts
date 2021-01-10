import { SET_SEARCH_HISTORY } from './search-history.const'

export const searchHistory = (
    state = [],
    // @ts-ignore
    action,
) => {
    switch (action.type) {
        case SET_SEARCH_HISTORY:
            return action.payload;
        default:
            return state;
    }
};