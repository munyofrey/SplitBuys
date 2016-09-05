import { connect } from 'react-redux';
import SumsComponent from './sums_component';
import { requestSums } from '../../actions/sums_actions';

const mapStateToProps = state => ({
  sums: state.sums
})

const mapDispatchToProps = dispatch => ({
  requestSums: () => dispatch(requestSums())
})

export default connect(mapStateToProps, mapDispatchToProps)(SumsComponent)
