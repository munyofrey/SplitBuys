import { receiveSums, sumConstants } from '../actions/sums_actions'
import { fetchSums } from '../util/api_sums';
import { hashHistory } from 'react-router'



const SumsMiddleware = ({getstate, dispatch}) => next => action => {
  const errorCB = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };
  switch (action.type) {
    case sumConstants.REQUEST_SUMS:
      let successCB = sums => {dispatch(receiveSums(sums))}
      fetchSums(successCB, errorCB);
      return next(action)
      break;
    default: next(action)
  }
}



export default SumsMiddleware;
