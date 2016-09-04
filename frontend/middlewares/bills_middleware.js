import { billActions, receiveBills, receiveErrors } from '../actions/bill_actions'
import { createBill, fetchAllBills, deleteBill } from '../util/api_bill_util';
import { hashHistory } from 'react-router'



const BillsMiddleware = ({getstate, dispatch}) => next => action => {
  let successCB;
  const errorCB = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };

  switch (action.type) {
    case billActions.CREATE_BILL:
      createBill(action.bill, action.success, errorCB);
      return next(action)
      break;
    case billActions.REQUEST_BILLS:
      successCB = bills => {dispatch(receiveBills(bills))}
      fetchAllBills(successCB, errorCB)
      return next(action)
      break;

    case billActions.DELETE_BILL:
    console.log(action.success);
      deleteBill(action.bill, action.success, error => console.log(error))
      return next(action)
      default: return next(action)

  }
}



export default BillsMiddleware;
