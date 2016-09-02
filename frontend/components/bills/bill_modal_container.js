import { connect } from 'react-redux';
import ModalBillForm from './new_bill_modal';
import { createBill, receiveErrors, receiveBill } from '../../actions/bill_actions';

const mapStateToProps = state => ({
  bill: state.bills.bill,
  currentUser: state.session.currentUser,
  errors: state.session.errors
})

const mapDispatchToProps = dispatch => ({
  createBill: (bill, success) => dispatch(createBill(bill, success)),
  receiveBill: (bill) => dispatch(receiveBill(bill))
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalBillForm);
