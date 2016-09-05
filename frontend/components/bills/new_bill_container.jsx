import { connect } from 'react-redux';
import { createBill, receiveBills, receiveErrors } from '../../actions/bill_actions';
import ModalBillForm from './new_bill_modal'


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.bills.errors,
  friends: state.friends[0]
})

const mapDispatchToProps = dispatch => ({
  createBill: (bill, success) => dispatch(createBill(bill, success)),
  receiveBills: (bills) => dispatch(receiveBills(bills)),
  receiveErrors: errors => dispatch(receiveErrors(errors))
})


export default connect(mapStateToProps, mapDispatchToProps)(ModalBillForm);
