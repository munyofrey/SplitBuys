import { billActions, receiveBills, receiveErrors, receiveBill } from '../actions/bill_actions'
import { createBill, fetchAllBills } from '../util/api_bill_util';
import { hashHistory } from 'react-router'


const BillsMiddleware = ({getstate, dispatch}) => next => action => {
  let successCB;
  const errorCB = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };

  switch (action.type) {
    case billActions.CREATE_BILL:
      successCB = bill => {dispatch(recieveBill(bill))}
      createBill(action.user, successCB, errorCB);
      return next(action)
      break;
    case billActions.REQUEST_BILLS:
      successCB = bills => {console.log(bills); dispatch(receiveBills(bills))}
      fetchAllBills(successCB, errorCB)
      return next(action)
      break;
    // case billActions.SIGNUP:
    //   signup(action.user, successCB, errorCB);
    //   next(action)
    //   break;
    default: return next(action)

  }
}



export default BillsMiddleware;
