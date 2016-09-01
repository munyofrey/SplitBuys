import { billsActions, receiveBills, receiveErrors, receiveBill } from '../actions/bill_actions'
import { createBill, fetchAllBills } from '../util/api_session_util';
import { hashHistory } from 'react-router'


const BillsMiddleware = ({getstate, dispatch}) => next => action => {
  let successCB;
  const errorCB = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };

  switch (action.type) {
    case billActions.CREATE_BILL:
      successCB = bill => {console.log(bill); dispatch(recieveBill(bill))}
      createBill(action.user, successCB, errorCB);
      return next(action)
      break;
    case billActions.REQUEST_BILLS:
      successCB = bills => {console.log(bill); dispatch(recieveBills(bills))}
      fetchAllBills(successCB, errorCB)
      return(next(action))
      break;
    // case billActions.SIGNUP:
    //   signup(action.user, successCB, errorCB);
    //   next(action)
    //   break;
    default: next(action)

  }
}



export default BillsMiddleware;
