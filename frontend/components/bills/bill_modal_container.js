import { connect } from 'react-redux';
import ModalBillForm from './new_bill_modal';
import { createBill, receiveErrors } from '../../actions/bill_actions';

const mapStateToProps = state => ({
  bill: state.bills.bill,
  currentUser: state.session.currentUser,
  errors: state.session.errors
})

const mapDispatchToProps = dispatch => ({
  createBill: bill => dispatch(createBill(bill)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalBillForm);
