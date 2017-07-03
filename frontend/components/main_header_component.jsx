import React from 'react';
import NewBill from './bills/new_bill_container'
import {withRouter} from 'react-router';

class MainHeader extends React.Component {
  constructor(props){
    super(props)
    this.bill = this.bill.bind(this);
    this.billFriend = this.billFriend.bind(this);
  }

  bill(){
    return {listElements: true,
    modalIsOpen: false,
    percentOfTotal: 50,
    description: '',
    user_pay_id: this.props.currentUser.id,
    note: '',
    owed: 0,
    total: '',
    date: '',
    user_other_id: 0,
    user_owe_id: this.props.currentUser.id,
    userOption: '',
    listQuestions: false
    }
  }

  billFriend(friend){
    return {
      modalIsOpen: false,
      percentOfTotal: 50,
      description: '',
      user_pay_id: this.props.currentUser.id,
      note: '',
      owed: 0,
      total: '',
      date: '',
      user_other_id: friend.id,
      user_owe_id: friend.id,
      userOption: friend.name,
      listQuestions: true
    }
  }

  render(){
    if (!this.props.bills){
      if(this.props.friend){
        return <div className='no-bills main-header'>
          <h5>{`You are all settled up with ${this.props.friend.name}`}</h5> <NewBill friend={this.props.friend} bill={this.billFriend(this.props.friend)} />
        </div>
      } else{
        return <div className='no-bills main-header'>
          <h5>You are all settled up</h5> <NewBill new={true} bill={this.bill()} />
        </div>
      }
    }else{
      if(this.props.friend){
        return <div className='bills main-header'>
          <h5>{`Your bills with ${this.props.friend.name}`}</h5> <NewBill friend={this.props.friend} bill={this.billFriend(this.props.friend)}/>
        </div>
      } else{
        return <div className='bills main-header'>
          <h5>All Bills</h5> <NewBill new={true} bill={this.bill()}/>
        </div>
    }
  }
}
}



export default withRouter(MainHeader);
