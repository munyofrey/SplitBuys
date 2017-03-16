import { connect } from 'react-redux';
import billList from './bill_list_component';
import { receiveBills, receiveErrors, requestBills, deleteBill, createBill } from '../../actions/bill_actions';
import { requestFriendHistory } from '../../actions/friend_actions';
import { merge, values } from 'lodash';

const mapStateToProps = state => {
  const users = state.session.currentUser ? merge(state.friends.friends, {[state.session.currentUser.id]: state.session.currentUser}) : {};
  return ({
    bills: values(state.bills.bills),
    currentUser: state.session.currentUser,
    errors: state.bills.errors,
    users
    })
  }

const mapDispatchToProps = dispatch => ({
  requestBills: () => dispatch(requestBills()),
  deleteBill: (bill, success) => dispatch(deleteBill(bill, success)),
  requestFriendHistory: friend_id => dispatch(requestFriendHistory(friend_id))
})


export default connect(mapStateToProps, mapDispatchToProps)(billList);
