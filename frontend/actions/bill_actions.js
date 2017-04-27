export const billActions = {
  RECEIVE_BILL: 'RECEIVE_BILL',
  RECEIVE_BILLS: 'RECEIVE_BILLS',
  UPDATE_BILL: 'UPDATE_BILL',
  CREATE_BILL: 'CREATE_BILL',
  REQUEST_BILL: 'REQUEST_BILL',
  REQUEST_BILLS: 'REQUEST_BILLS',
  DELETE_BILL: 'DELETE_BILL',
  RECEIVE_ERRORS: 'RECEIVE_ERRORS',
};

export const receiveBill = bill => ({
  type: billActions.RECEIVE_BILL,
  bill
})

export const receiveBills = bills => ({
  type: billActions.RECEIVE_BILLS,
  bills
})

export const requestBills = () => ({
  type: billActions.REQUEST_BILLS
})

export const requestBill = () => ({
  type: billActions.REQUEST_BILL
})

export const createBill = (bill, success) => ({
  type: billActions.CREATE_BILL,
  bill,
  success
})

export const updateBill = (bill, success) => ({
  type: billActions.UPDATE_BILL,
  bill,
  success
})

export const deleteBill = (bill, success) => ({
  type: billActions.DELETE_BILL,
  bill,
  success
})

export const receiveErrors = errors => ({
  type: billActions.RECEIVE_ERRORS,
  errors
})
