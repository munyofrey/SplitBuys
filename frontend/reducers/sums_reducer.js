import { merge } from 'lodash';
import { receiveSums, sumConstants } from '../actions/sums_actions';


const sums = {};


const SumsReducer = (state = sums, action) =>{
  switch (action.type) {
    case sumConstants.RECEIVE_SUMS:
      return action.sums
    case "CLEAR_STATE":
      return sums;
    default: return state
  }
};


export default SumsReducer;
