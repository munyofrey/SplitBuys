import React from 'react';
import BillDetail from './bill_item_component';
import ModalBillForm from './bill_modal_container';


class billList extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.requestBills()
  }

  clickFunction(){

  }

  render(){
    return(
      <div className='rightside-block'>
        <div className='header-block-fix'></div>
        <div className='bill_list_component'>
          <ModalBillForm />
          <table className='bill-list-table'>
            <thead>
                <tr>
                  <th>date</th>
                  <th>description</th>
                  <th>owed</th>
                  <th>total</th>
                  <th>name_payer</th>
                  <th>ower</th>
                </tr>
              </thead>


          {this.props.bills.map(bill => (
            <BillDetail
              bill={bill}
              key={`${bill.id}`}
              clickFunction={()=>console.log('darn')}
              onClick={()=>console.log(`I work ${bill.id}`)
              }/> ))}
        </table>
        </div>
    </div>
    )
  }


}



export default billList;
