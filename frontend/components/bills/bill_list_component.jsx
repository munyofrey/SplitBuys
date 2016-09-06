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
    }else{
      console.log(path.split(/\w*\/(\d*)/)[1]);
      this.props.requestFriendHistory(path.split(/\w*\/(\d*)/)[1])}
  }

  render(){
    return(
      <div className='rightside-block'>
        <div className='bill_list_component'>
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
              deleteBill={this.props.deleteBill}/>
           ))}
        </table>
        </div>
    </div>
    )
  }


}


export default billList;
