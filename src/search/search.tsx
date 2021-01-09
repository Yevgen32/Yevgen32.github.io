import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getItem } from '../repositories/repositories.actions';

import { selectRepositories } from '../repositories/repositories.selectors';

import './search.css';

const Search = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItem());
  }, []);

  // const repositories = useSelector(selectRepositories);
  // console.log('Search -> repositories', repositories);

  return (
    <div>
      <p>Search!</p>
    </div>
  );
};

export default Search;
