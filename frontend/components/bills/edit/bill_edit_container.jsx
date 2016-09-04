import { connect } from 'react-redux';
import { updateBill, receiveErrors } from '../../../actions/bill_actions';
import BillEditFrom from './bill_edit_modal';


const mapStateToProps = state => ({
  errors: state.bills.errors
})

const mapDispatchToProps = dispatch => ({
  updateBill: bill => dispatch(updateBill(bill)),
  receiveErrors: errors => dispatch(receiveErrors(errors))
})

export default connect(mapStateToProps, mapDispatchToProps)(BillEditFrom)
