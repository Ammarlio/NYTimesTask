import REDUX_CONSTANTS from "../constants"

const initialState = {
    news_1: [],
    news_7: [],
    news_30: [],
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case REDUX_CONSTANTS.MOST_POPULAR_VIEWED_1:
            return {
                ...state,
                news_1: action.payload
            }
        case REDUX_CONSTANTS.MOST_POPULAR_VIEWED_7:
            return {
                ...state,
                news_7: action.payload
            }
        case REDUX_CONSTANTS.MOST_POPULAR_VIEWED_30:
            return {
                ...state,
                news_30: action.payload
            }
        case REDUX_CONSTANTS.MOST_VIEWED_7:
            return initialState
        default:
            return state
    }
}

export default newsReducer