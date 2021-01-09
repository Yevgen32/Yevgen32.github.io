import api from '../api/api';

import { GET_REPOSITORIES } from './repositories.conts';


export const getItem = () => {
    // @ts-ignore
    return (dispatch, getState) => {
        api('https://api.github.com/repositories')
            .then(res => {
                dispatch(addTodoSuccess(res));
            })
            .catch(err => {
                dispatch(addTodoFailure(err.message));
            });
    };
};

// @ts-ignore
const addTodoSuccess = item => ({
    type: GET_REPOSITORIES,
    payload: {
        ...item
    }
});

const addTodoStarted = () => ({
    type: 'ADD_TODO_STARTED'
});

// @ts-ignore
const addTodoFailure = error => ({
    type: 'ADD_TODO_FAILURE',
    payload: {
        error
    }
});