import { SET_SEARCH_HISTORY } from './search-history.const'

export const setSearchHistory = (searchWorld: string) => {
    const localStorageHistory = localStorage?.getItem('searchHistoryList');
    const searchHistory = localStorageHistory ? JSON.parse(localStorageHistory) : [];
    // @ts-ignore
    const searchHistoryList = searchHistory.concat(searchWorld);

    if (searchHistoryList.length > 5) {
        searchHistoryList.splice(0, 1);
    }

    localStorage.setItem('searchHistoryList', JSON.stringify(searchHistoryList));

    return ({
        type: SET_SEARCH_HISTORY,
        payload: searchHistoryList
    })

};