import { connect } from 'react-redux';
import FriendHistoryDetail from './friend_history_detail';
import { requestFriendHistory } from '../../actions/friend_actions';

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  requestFriendHistory: (friend_id) => dispatch(requestFriendHistory(friend_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(FriendHistoryDetail);
