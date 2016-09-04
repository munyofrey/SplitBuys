import React from 'react';
import BillDetail from './bill_detail_component';
import ModalBillForm from './new_bill_modal';
// import BillDetailModal form './bill_detail_modal'

class billList extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.requestBills()
  }

  render(){
    return(
      <div className='rightside-block'>
        <div className='header-block-fix'></div>
        <div className='bill_list_component'>
          <ModalBillForm
            currentUser={this.props.currentUser}
            errors={this.props.errors}
            createBill={this.props.createBill}
            receiveBills={this.props.receiveBills}
            receiveErrors={this.props.receiveErrors}/>
          <table className='bill-list-table'>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Amount owed</th>
                <th>Bill Total</th>
                <th>Who Payed</th>
                <th>Who owes</th>
              </tr>
            </thead>


          {this.props.bills.map(bill => (
            <BillDetail
              bill={bill}
              key={`${bill.id}`}
              clickFunction={()=>console.log('darn')}
              deleteBill={this.props.deleteBill}/>
           ))}
        </table>
        </div>
    </div>
    )
  }


}


// <BillDetailModal
//   bill={bill}
//   key={`${bill.id}${bill.user_owe_id}`}
//   clickFunction={()=>console.log('darn')}
//   deleteBill={this.props.deleteBill}>

export default billList;
