import React from 'react';

import './search.css';

type Props = {
  description: string;
  name: string;
  id: string;
  language: string;
};

const SearchItem = (props: Props) => {
  const { description, name, id, language } = props;

  return (
    <div className="search-item" key={id}>
      <b>{name}</b>
      <div>
        Language: <b>{language}</b>
      </div>
      <div>
        Description: <b>{description}</b>
      </div>
    </div>
  );
};

export default SearchItem;
