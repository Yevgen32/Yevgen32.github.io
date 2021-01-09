import { GET_REPOSITORIES } from './repositories.conts';

export const repositories = (
    state = {},
    action,
) => {
    switch (action.type) {
        case GET_REPOSITORIES:
            return action.payload;
        default:
            return state;
    }
};