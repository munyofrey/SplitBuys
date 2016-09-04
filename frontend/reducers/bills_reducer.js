import {billActions} from '../actions/bill_actions';
import { merge } from 'lodash';

  const preloadedState = {
    bills: [],
    errors: [],
    modalIsOpen: false
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
      oldStateClone = oldStateClone.bills.forEach(bill => {if(bill.id !== action.bill.id){newState.push(bill)}})
      return merge({}, oldState, { bills: newState })
    default: return oldState


  }
}

export default billReducer;
