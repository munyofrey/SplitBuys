import {billActions} from '../actions/bill_actions';
import { merge } from 'lodash';
import { commentActions } from '../actions/comment_actions';
  const preloadedState = {
    bills: {},
    errors: []
  }

const billReducer = (oldState = preloadedState, action) => {
  Object.freeze(oldState)
  let newState;
  let oldStateClone;
  switch (action.type) {
    case billActions.RECEIVE_ERRORS:
      newState = merge({}, oldState, oldState);
      newState.errors = action.errors;
      return newState
    case billActions.RECEIVE_BILLS:
      return merge({}, preloadedState, { bills: action.bills, errors:[] })
    case billActions.DELETE_BILL:
      oldStateClone = merge({}, oldState, oldState);
      newState = [];
      oldStateClone.bills.forEach(bill => {if(bill.id !== action.bill.id){newState.push(bill)}})
      oldStateClone.bills = newState
      return oldStateClone
    case commentActions.RECEIVE_COMMENT:
      newState = merge({}, oldState);
      newState.bills[action.comment.bill_id].comments[action.comment.id] = action.comment
      return newState
      break;
    case commentActions.REMOVE_COMMENT:
      newState = merge({}, oldState);
      delete newState.bills[action.comment.bill_id].comments[action.comment.id]
      return newState
      break;
    default: return oldState


  }
}

export default billReducer;
