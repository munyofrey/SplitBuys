import React from 'react';
import Collapsible from 'react-collapsible';
import BillFormContainer from './new_bill_container';
import CommentContainer from '../comments/comments_container';
import moment from 'moment'

class BillDetail extends React.Component{
  constructor(props){
    super(props)
    this.deleteBillItem = this.deleteBillItem.bind(this)
    this.trigger = this.trigger.bind(this)
    this.lent = this.lent.bind(this)
    this.total = this.total.bind(this)
  }

  deleteBillItem(bill){
    this.props.deleteBill(bill)
  }


  lent(){
    if (this.props.users[this.props.bill.user_pay_id].id === this.props.currentUser.id) {
      return(
        <div
          className='bill-table-element paid positive'>
          {`you lent ${(this.props.users[this.props.bill.user_owe_id]).name}`} <br/>
        <span className="number">{`$${parseFloat(this.props.bill.owed).toFixed(2)}`}</span>
        </div>
      )
    }else {
      return(
        <div
          className='bill-table-element paid negative'>
          {`${(this.props.users[this.props.bill.user_pay_id]).name} lent you`} <br/>
          <span className="number">{`$${parseFloat(this.props.bill.owed).toFixed(2)}`}</span>
        </div>
      )
    }
  }


  total(){
    if (this.props.users[this.props.bill.user_pay_id] === this.props.currentUser){
      return (<div
                  className='bill-table-element total'>
                  you paid <br/>
                  <span className="number">{`$${parseFloat(this.props.bill.total).toFixed(2)}`}</span>
                </div>
              )
    }else{
      return(<div
                  className='bill-table-element total'>
                  {`${(this.props.users[this.props.bill.user_pay_id]).name} paid`}<br/>
                  <span className="number">{`$${parseFloat(this.props.bill.total).toFixed(2)}`}</span>
                </div>
                )}
  }


  trigger(){
    const date = moment(new Date(this.props.bill.date), 'YYYY-MM-DD');
    return(<div className='bill-table-row'>
      <div className='main'>
        <div className='bill-table-element bill-date' title={this.props.bill.date}>{date.format("MMM")}
          <div className="number"> {date.format("DD")}</div>
        </div>
        <div className='bill-table-element description'>{this.props.bill.description}</div>
      </div>
      {this.total()}
      {this.lent()}
    </div>)
  }


    render(){
      const friend = this.props.bill.user_pay_id == this.props.currentUser.id ? this.props.users[this.props.bill.user_owe_id] : this.props.users[this.props.bill.user_pay_id];

      return(
         <Collapsible trigger={this.trigger()}>
          <div className='bill_item_detail'>
                <div className='bill-item-detail' >
                  <section className='note'><h5>Note:</h5>
                   {this.props.bill.note ? <p>{this.props.bill.note}</p> : <span>There is no more information on this bill.</span>}</section>
                 <div className='delete-edit-button-container'>
               <div
                 className='delete-bill button'
                 onClick={this.deleteBillItem.bind(this, this.props.bill)}
                 >Delete</div>

                 <BillFormContainer
                   friend={ friend }
                   bill={ this.props.bill }
                   edit={true}
                   />
               </div >
             </div>

                <div className='comments-container'>
                  <CommentContainer bill={this.props.bill} />
                </div>

          </div>
      </Collapsible>
      )
    }
  }

export default BillDetail;
