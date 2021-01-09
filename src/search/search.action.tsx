import React from 'react';
import api from '../api/api';

export const getItem = async () => {
  const response = await api('https://api.github.com/repositories');

  console.log('getItem -> response', response);
  return response;
};
