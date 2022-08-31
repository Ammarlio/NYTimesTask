import { connect } from 'react-redux';
import { mostPopular } from '../../store/actions/newsAction';
import News from './News';

const mapStateToProps = (state) => {
    const { news_1, news_7, news_30 } = state.newsReducer;
    return {
        news_1: news_1,
        news_7: news_7,
        news_30: news_30,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMostPopular: (date) => dispatch(mostPopular(date)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(News);