import { LOADING, SET_MESSAGE } from './ui.const'

export const setLoading = (load: boolean) => ({
    type: LOADING,
    payload: load
})

export const setMessage = (message: string) => {
    return ({
        type: SET_MESSAGE,
        payload: message
    })
}

