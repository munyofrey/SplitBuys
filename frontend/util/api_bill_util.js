

//creating
$.ajax({url: 'api/bills/', method:'POST', data:{"bill": {"description":'hi', "user_owe_id":2, "user_pay_id":5, "owed":3.45, "total":50}}, success: bill => console.log(bill)})


//indexing
$.ajax({url: 'api/bills/', success: bill => console.log(bill)})


//showing
$.ajax({url: 'api/bills/10', success: bill => console.log(bill)})

//updating
$.ajax({url: 'api/bills/3', method:'PATCH', data:{"bill": {"description":'hi', "user_owe_id":2, "user_pay_id":1, "owed":3.45, "total":50, "date":'2016-08-31'}}, success: bill => console.log(bill)})


//deleting
$.ajax({url: 'api/bills/3', method:'DELETE', success: bill => console.log(bill)})

//sum
// $.ajax({url: 'api/sum', success: bill => console.log(bill)})
