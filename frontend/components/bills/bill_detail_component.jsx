import React from 'react';
import Collapsible from 'react-collapsible';
import BillEditFormContainer from './edit/bill_edit_container';
import CommentContainer from '../comments/comments_container';


class BillDetail extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      modalIsOpen: false
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.deleteBillItem = this.deleteBillItem.bind(this)
    this.trigger = this.trigger.bind(this)
  }

  openModal(){
    this.setState({modalIsOpen: true})
  }

  closeModal(){
    this.setState({modalIsOpen: false})
  }

  deleteBillItem(bill){
    this.props.deleteBill(bill)
  }

  trigger(){
    return(<ul className='bill-table-row'>
      <li className='bill-table-element'>{this.props.bill.date}</li>
      <li className='bill-table-element'>{this.props.bill.description}</li>
      <li className='bill-table-element'>{`$ ${parseFloat(this.props.bill.owed).toFixed(2)}`}</li>
      <li className='bill-table-element'>{`$ ${parseFloat(this.props.bill.total).toFixed(2)}`}</li>
      <li className='bill-table-element'>{this.props.users[this.props.bill.user_pay_id].name}</li>
      <li className='bill-table-element'>{this.props.users[this.props.bill.user_owe_id].name}</li>
    </ul>)
  }


    render(){

      return(
         <Collapsible trigger={this.trigger()}>
          <div className='bill_item_detail'>
                <ul className='bill-item-detail' >
                  <li className='bill-detail'><div className='title-detail'>Note:</div>
                   {this.props.bill.note}</li>
                 <li className='delete-edit-button-container'>
               <div
                 className='delete-bill button'
                 onClick={this.deleteBillItem.bind(this, this.props.bill)}
                 >Delete</div>

                 <BillEditFormContainer
                   bill={this.props.bill}/>
                 </li >
              </ul>

                <div className='comments-container'>
                  <CommentContainer bill={this.props.bill}/>
                </div>

          </div>
      </Collapsible>
      )
    }
  }

export default BillDetail;
