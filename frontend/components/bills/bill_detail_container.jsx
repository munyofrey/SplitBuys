import { connect } from 'react-redux';
import BillDetailComponent;
import { requestUpdate, deleteBill } from '../../actions/bill_actions'

const mapStateToProps = state => ({
  bill: state.bills.bill
})

const mapDispatchToProps = dispatch => ({
  requestUpdate: bill => dispatch(requestUpdate(bill))
  deleteBill: bill => dispatch(deleteBill)
})


export default connect(mapStateToProps, mapDispatchToProps)(BillDetailComponent);
