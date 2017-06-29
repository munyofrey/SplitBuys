import { connect } from 'react-redux';
import billList from './bill_list_component';
import { receiveBills, receiveErrors, requestBills, deleteBill } from '../../actions/bill_actions';
import { requestFriendHistory } from '../../actions/friend_actions';
import { merge, values } from 'lodash';

const mapStateToProps = state => {
  const users = userState(state)
  return ({
    bills: values(state.bills.bills).sort(billSort),
    currentUser: state.session.currentUser,
    errors: state.bills.errors,
    users
    })
  };

const userState = state => {
  if (state.session.currentUser){
    return  merge(state.friends.friends, {[state.session.currentUser.id]: state.session.currentUser});
  } else {
    return {};
  }
};

const billSort = (billA, billB) => {
  if(billA.date <= billB.date){
    return 1
  } else{
    return -1
  }
};

const mapDispatchToProps = dispatch => ({
  requestBills: () => dispatch(requestBills()),
  deleteBill: (bill, success) => dispatch(deleteBill(bill, success)),
  requestFriendHistory: friend_id => dispatch(requestFriendHistory(friend_id))
})


export default connect(mapStateToProps, mapDispatchToProps)(billList);
