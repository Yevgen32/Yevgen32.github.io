import api from '../api/api';

import { GET_REPOSITORIES } from './repositories.conts';

import { setLoading, setMessage } from '../ui/ui.action'

export const getItem = (search: string) => {
    // @ts-ignore
    return (dispatch, getState) => {
        dispatch(setLoading(true))

        api(`https://api.github.com/search/repositories?q={${search}}`)
            .then(result => {
                //@ts-ignore
                if (result.total_count) {
                    dispatch(({
                        type: GET_REPOSITORIES,
                        // @ts-ignore
                        payload: result.items
                    }));

                    dispatch(setLoading(false))
                } else {
                    dispatch(({
                        type: GET_REPOSITORIES,
                        // @ts-ignore
                        payload: result.items
                    }));

                    dispatch(setLoading(false))
                    dispatch(setMessage('nothing found for your request :crying_cat_face:'))

                }
            })
            .catch(err => {
                console.log("getItem -> err", err)

                dispatch(setLoading(false))
                dispatch(setMessage(err))
            })

    };
};