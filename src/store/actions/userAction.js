import REDUX_CONSTANTS from '../constants';

export const saveUser = userData => ({
    type: REDUX_CONSTANTS.SAVE_USER,
    payload: userData
})