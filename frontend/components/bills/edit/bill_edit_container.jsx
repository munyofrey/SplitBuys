import { connect } from 'react-redux';
import { updateBill, receiveErrors, receiveBills } from '../../../actions/bill_actions';
import BillEditFrom from './bill_edit_modal';


const mapStateToProps = state => ({
  errors: state.bills.errors,
  currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch => ({
  updateBill: (bill, success) => dispatch(updateBill(bill, success)),
  receiveBills: bills => dispatch(receiveBills(bills)),
  receiveErrors: errors => dispatch(receiveErrors(errors))
})

export default connect(mapStateToProps, mapDispatchToProps)(BillEditFrom)
