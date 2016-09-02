import { connect } from 'react-redux';
import billList from './bill_list_component';
import { recieveBills, receiveBill, requestBills } from '../../actions/bill_actions';


const mapStateToProps = state => ({
  bills: state.bills.bills
})

const mapDispatchToProps = dispatch => ({
  requestBills: () => dispatch(requestBills())
})


export default connect(mapStateToProps, mapDispatchToProps)(billList);