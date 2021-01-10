import { LOADING, SET_MESSAGE } from './ui.const'


export const ui = (
    state = [],
    // @ts-ignore
    action,
) => {
    switch (action.type) {
        case LOADING:
            return ({ isLoading: action.payload });
        case SET_MESSAGE:
            return ({ message: action.payload })
        default:
            return state;
    }
};