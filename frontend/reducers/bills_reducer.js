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
  switch (action.type) {
    case billActions.RECEIVE_ERRORS:
      return merge({}, oldState, {errors: action.errors})
    case billActions.RECEIVE_BILLS:
      newState = merge({}, preloadedState, { bills: action.bills })
      newState.bills = action.bills;
      return newState
    case billActions.RECEIVE_BILL:
      const bills = [action.bill, ...oldState.bills]
      return merge({}, oldState, {bills: bills, bill: action.bills, errors:[] })
    case billActions.DELETE_BILL:
      let oldStateClone = merge({}, oldState, oldState);
      newState = [];
      oldStateClone = oldStateClone.bills.forEach(bill => {if(bill.id !== action.bill.id){newState.push(bill)}})
      return merge({}, oldState, { bills: newState })
    default: return oldState


  }
}

export default billReducer;
