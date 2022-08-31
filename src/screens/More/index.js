import More from './More';
import { connect } from 'react-redux';
import { removeUser } from '../../store/actions/userAction';

const mapStateToProps = (state) => {
    const { userData } = state.userReducer;
    return {
        userData,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeUser: () => dispatch(removeUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(More);