import React from 'react';
import BillDetail from './bill_detail_component';
import ModalBillForm from './new_bill_modal';


class billList extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    const path = this.props.path.slice(1);
    if ( path === 'landing'){
      this.props.requestBills()
    }
  }

  render(){
    return(
      <div className='rightside-block'>
        <div className='bill_list_component'>
          <div className='bill-list-table'>
            <div>
              <ul className='header-table'>
                <li>Date</li>
                <li>Description</li>
                <li>Amount owed</li>
                <li>Bill Total</li>
                <li>Who Paid</li>
                <li>Who owes</li>
              </ul>
            </div>


          {this.props.bills.map(bill => (
            <BillDetail
              bill={bill}
              users={this.props.users}
              key={`${bill.id}`}
              deleteBill={this.props.deleteBill}/>
           ))}
        </div>
        </div>
    </div>
    )
  }


}


export default billList;
