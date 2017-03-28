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
      <div className='middle'>

          <div className='bill-list-table'>


          {this.props.bills.map(bill => (
            <BillDetail
              bill={bill}
              users={this.props.users}
              currentUser={this.props.currentUser}
              key={`${bill.id}`}
              deleteBill={this.props.deleteBill}/>
           ))}
        </div>
      </div>
    )
  }


}


export default billList;
