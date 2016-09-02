import React from 'react';
import BillItem from './bill_item_component';
import ModalBillForm from './bill_modal_container';

class billList extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.requestBills()
  }

  render(){
    debugger;
    return(
      <div className='rightside-block'>
        <div className='header-block-fix'></div>
        <div className='bill_list_component'>
          <ModalBillForm />
        <ul className='bill_list_component'>
          {this.props.bills.map(bill => (<BillItem bill={bill} key={`${bill.id}${bill.description}`} clickFunction={()=>console.log(`I work ${bill.id}`)}/>))}
        </ul>
        </div>
    </div>
    )
  }


}



export default billList;
