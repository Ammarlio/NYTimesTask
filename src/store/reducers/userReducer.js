import REDUX_CONSTANTS from "../constants"

const initialState = {
    userData: {}
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case REDUX_CONSTANTS.SAVE_USER:
            return {
                ...state,
                userData: action.payload
            }
        default:
            return state
    }
}

export default userReducer