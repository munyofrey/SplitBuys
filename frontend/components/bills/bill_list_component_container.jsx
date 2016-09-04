import { connect } from 'react-redux';
import billList from './bill_list_component';
import { receiveBills, receiveErrors, requestBills, deleteBill, createBill } from '../../actions/bill_actions';


const mapStateToProps = state => ({
  bills: state.bills.bills,
  currentUser: state.session.currentUser,
  errors: state.bills.errors
})

const mapDispatchToProps = dispatch => ({
  requestBills: () => dispatch(requestBills()),
  deleteBill: (bill, success) => dispatch(deleteBill(bill, success)),
  createBill: (bill, success) => dispatch(createBill(bill, success)),
  receiveBills: bills => dispatch(receiveBills(bills)),
  receiveErrors: errors => dispatch(receiveErrors(errors))
})


export default connect(mapStateToProps, mapDispatchToProps)(billList);
