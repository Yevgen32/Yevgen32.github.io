import React from 'react';

import './search.css';

const SearchHistory = () => {
  const localStorageHistory = localStorage?.getItem('searchHistoryList');
  const searchHistory = localStorageHistory ? JSON.parse(localStorageHistory) : [];

  return (
    <div className="search-history-wrapper">
      <p>Search history:</p>
      {searchHistory?.length
        ? searchHistory.map((historyItem: string) => (
            <div className="search-history-item">{historyItem}</div>
          ))
        : 'Don`t have search result...'}
    </div>
  );
};

export default SearchHistory;
