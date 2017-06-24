import { billActions } from '../actions/bill_actions';
import { commentActions } from '../actions/comment_actions';
import { merge } from 'lodash';

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
    case billActions.RECEIVE_BILL:
      newState = merge({}, oldState);
      newState.bills[action.bill.id] = action.bill;
      newState.errors = [];
      return newState
    case billActions.DELETE_BILL:
      newState = merge({}, oldState, oldState);
      delete(newState.bills[action.bill.id]);
      return newState;
    case commentActions.RECEIVE_COMMENT:
      newState = merge({}, oldState);
      if (newState.bills[action.comment.bill_id].comments){
        newState.bills[action.comment.bill_id].comments[action.comment.id] = action.comment
      } else {
        newState.bills[action.comment.bill_id].comments = {[action.comment.id]: action.comment}
      }
      return newState
      break;
    case commentActions.REMOVE_COMMENT:
      newState = merge({}, oldState);
      delete newState.bills[action.comment.bill_id].comments[action.comment.id]
      return newState
    default:
      return oldState
  }
}

export default billReducer;
