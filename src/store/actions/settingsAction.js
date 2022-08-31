import REDUX_CONSTANTS from '../constants';

export const changeLanguage = lang => ({
    type: REDUX_CONSTANTS.CHANGE_LANGUAGE,
    payload: lang
})