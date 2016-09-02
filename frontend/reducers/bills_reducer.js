import {billActions} from '../actions/bill_actions';
import { merge } from 'lodash';

  const preloadedState = {
    bills: [],
    errors: [],
    bill: {},
    modalIsOpen: false
  }

const billReducer = (oldState = preloadedState, action) => {
  switch (action.type) {
    case billActions.RECEIVE_ERRORS:
      return merge({}, oldState, {errors: action.errors})
    case billActions.RECEIVE_BILLS:
      const newState = merge({}, preloadedState, { bills: action.bills })
      newState.bills = action.bills;
      return newState
    case billActions.RECEIVE_BILL:
      const bills = [action.bill, ...oldState.bills]
      return merge({}, oldState, {bills: bills, bill: action.bills })
    // case billActions.DELETE_BILL:
    //   return merge({}, oldState, { billDetail: action.bill })
    // case billActions.REQUEST_BILLS:
    // return merge({}, oldState, { billDetail: action.bill })
    // case billActions.REQUEST_BILL:
    default: return oldState


  }
}

export default billReducer;
