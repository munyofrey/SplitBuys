import React from 'react'



const BillItem = ({bill, clickFunction}) => (
  <div className='bill_item_component'>
    <ul className='bill-item' onClick={clickFunction}>
        <li className='bill-item-title'>
          Date:</li>
          <li>{bill.date}</li>
        <li className='bill-item-title'>Amount owed:</li>
        <li> ${bill.owed}</li>
        <li className='bill-item-title'>Total Bill:</li>
        <li> ${bill.total}</li>
        <li className='bill-item-title'>Who paid: </li>
        <li>{bill.name_payer}</li>
        <li className='bill-item-title'>Who owes:</li>
        <li> {bill.ower}</li>
    </ul>
  <br/>
  </div>
)

export default BillItem;
