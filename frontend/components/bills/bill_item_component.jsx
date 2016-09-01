import react from 'React'



const BillItem = ({bill}) => (
  <ul className='bill-item'>
    <ul className='bill-item-list'>
      <li>{bill.date}</li>
      <li>{bill.amount}</li>
      <li>{bill.total}</li>
      <li>{bill.name}</li>
    </ul>
  </ul>
)

export default BillItem;
