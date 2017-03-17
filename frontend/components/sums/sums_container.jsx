import { connect } from 'react-redux';
import SumsComponent from './sums_component';
import { requestSums } from '../../actions/sums_actions';
import { values } from 'lodash';

const mapStateToProps = state => ({
  sums: state.sums,
  friends: values(state.friends.friends)
})

const mapDispatchToProps = dispatch => ({
  requestSums: () => dispatch(requestSums())
})

export default connect(mapStateToProps, mapDispatchToProps)(SumsComponent)
