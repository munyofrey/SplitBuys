import React from 'react';
import BillDetail from './bill_detail_component';
import ModalBillForm from './new_bill_modal';
import BillFormContainer from '../bills/new_bill_container';
import MainHeader from '../main_header_container';

class BillList extends React.Component{
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
          <MainHeader friendId={this.props.friendId}/>
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


export default BillList;
