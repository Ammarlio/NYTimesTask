import REDUX_CONSTANTS from '../constants';

export const saveUser = userData => ({
    type: REDUX_CONSTANTS.SAVE_USER,
    payload: userData
})

export const removeUser = () => ({
    type: REDUX_CONSTANTS.REMOVE_USER,
})