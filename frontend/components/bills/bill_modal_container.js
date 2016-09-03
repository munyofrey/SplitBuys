import { connect } from 'react-redux';
import ModalBillForm from './new_bill_modal';
import { createBill, receiveErrors, receiveBills } from '../../actions/bill_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.bills.errors
})

const mapDispatchToProps = dispatch => ({
  createBill: (bill, success) => dispatch(createBill(bill, success)),
  receiveBills: bills => dispatch(receiveBills(bills))
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalBillForm);
