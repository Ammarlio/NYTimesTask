import { fetchMostPopularNews } from '../../apis/calls';
import REDUX_CONSTANTS from '../constants';

export const mostPopular = (date = 1) => {
    try {
        return async dispatch => {
            await fetchMostPopularNews(date).then(
                response => {
                    if (response.status == 200) {
                        dispatch({
                            type: REDUX_CONSTANTS[`MOST_POPULAR_VIEWED_${date}`],
                            payload: response.data?.results
                        })
                    }
                }
            ).catch((error) => {
                dispatch({
                    type: REDUX_CONSTANTS[`MOST_POPULAR_VIEWED_${date}`],
                    payload: []
                })
            })
        }
    } catch (error) {
        dispatch({
            type: REDUX_CONSTANTS[`MOST_POPULAR_VIEWED_${date}`],
            payload: []
        })
    }
}