import REDUX_CONSTANTS from "../constants"

const initialState = {
    language: 'en',
}

const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case REDUX_CONSTANTS.CHANGE_LANGUAGE:
            return {
                ...state,
                language: state.language === 'en' ? 'ar' : 'en'
            }
        default:
            return state
    }
}

export default settingsReducer