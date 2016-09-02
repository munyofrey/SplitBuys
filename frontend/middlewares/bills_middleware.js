import { billActions, receiveBills, receiveErrors, receiveBill, receiveModal } from '../actions/bill_actions'
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
      successCB = bill => {dispatch(receiveBill(bill))}
      createBill(action.bill, action.success, errorCB);
      return next(action)
      break;
    case billActions.REQUEST_BILLS:
      successCB = bills => {dispatch(receiveBills(bills))}
      fetchAllBills(successCB, errorCB)
      return next(action)
      break;

      default: return next(action)

  }
}



export default BillsMiddleware;
