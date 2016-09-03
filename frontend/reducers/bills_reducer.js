import {billActions} from '../actions/bill_actions';
import { merge } from 'lodash';

  const preloadedState = {
    bills: [],
    errors: [],
    bill: {},
    modalIsOpen: false
  }

const billReducer = (oldState = preloadedState, action) => {
  let newState;
  let oldStateClone;
  switch (action.type) {
    case billActions.RECEIVE_ERRORS:
      return merge({}, oldState, {errors: action.errors})
    case billActions.RECEIVE_BILLS:
      console.log(action.bills);
      action.bills.forEach(bill => {bill.date = new Date(bill.date)})
      console.log(action.bills);
      return merge({}, preloadedState, { bills: action.bills })
    case billActions.RECEIVE_BILL:
      oldStateClone = merge({}, oldState, oldState);
      const bills = [action.bill, ...oldState.bills]
      return merge({}, oldState, {bills: bills, bill: action.bills, errors:[] })
    case billActions.DELETE_BILL:
      oldStateClone = merge({}, oldState, oldState);
      newState = [];
      oldStateClone = oldStateClone.bills.forEach(bill => {if(bill.id !== action.bill.id){newState.push(bill)}})
      return merge({}, oldState, { bills: newState })
    default: return oldState


  }
}

export default billReducer;
