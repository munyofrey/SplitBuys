import { connect } from 'react-redux';
import FriendHistoryDetail from './friend_history_detail';
import { requestFriendHistory } from '../../actions/friend_actions';

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  requestFriendHistory: () => dispatch(requestFriendHistory())
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendHistoryDetail);
