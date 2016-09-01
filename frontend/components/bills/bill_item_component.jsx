import React from 'react'



const BillItem = ({bill, clickFunction}) => (
  <ul className='bill-item' onClick={clickFunction}>
    <ul className='bill-item-list'>
      <li>Date: {bill.date}</li>
      <li>Amount owed: ${bill.owed}</li>
      <li>Total Bill: ${bill.total}</li>
      <li>Who paid: {bill.name_payer}</li>
      <li>Who owes: {bill.ower}</li>
    </ul>
  </ul>
)

export default BillItem;
