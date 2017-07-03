//creating
export const createBill = (bill, success, error) => (
  $.ajax({
    url: 'api/bills',
     method:'POST',
     data: bill,
     success,
     error
   })
)

//indexing
export const fetchAllBills = (success, error) =>(
  $.ajax({
    url: 'api/bills',
    success,
  })
)


//updating
export const updateBill = (bill, success, error) => (
  $.ajax({
    url: `api/bills/${bill.bill.id}`,
    method:'PATCH',
    data: bill,
    success,
    error
  })
)

//deleting
export const deleteBill = (bill, success, error) => (
  $.ajax({
    url: `api/bills/${bill.id}`,
    method: 'DELETE',
    success,
    error
  })
)
