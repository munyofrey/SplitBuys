import { connect } from 'react-redux';
import { createBill } from '../../actions/bill_actions';
import BillFrom from './new_bill_form';

const mapStateToProps = state => ({
  bill: state.bills.bill,
  currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch => ({
  createBill = bill => dispatch(createBill(bill)),
  renderErrors = errors => dispatch(errors)
})

export default connect(mapStateToProps, mapDispatchToProps)(BillFrom);
