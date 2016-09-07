import {billActions} from '../actions/bill_actions';
import { merge } from 'lodash';
import { commentActions } from '../actions/comment_actions';
  const preloadedState = {
    bills: [],
    errors: [],
    comments: []
  }

const billReducer = (oldState = preloadedState, action) => {
  let newState;
  let oldStateClone;
  switch (action.type) {
    case billActions.RECEIVE_ERRORS:
      newState = merge({}, oldState, oldState);
      newState.errors = action.errors;
      return newState
    case billActions.RECEIVE_BILLS:
      action.bills.forEach(bill => {bill.date = new Date(bill.date)})
      return merge({}, preloadedState, { bills: action.bills, errors:[] })

    case billActions.DELETE_BILL:
      oldStateClone = merge({}, oldState, oldState);
      newState = [];
      oldStateClone.bills.forEach(bill => {if(bill.id !== action.bill.id){newState.push(bill)}})
      oldStateClone.bills = newState
      return oldStateClone
    case commentActions.RECEIVE_COMMENTS:
      oldStateClone = merge({}, oldState, oldState);
      oldStateClone.bills.forEach(bill => {if(bill.id === action.comments[0].bill_id){bill.comments = action.comments}})
      return oldStateClone
      break;
    default: return oldState


  }
}

export default billReducer;
