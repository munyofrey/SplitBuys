import React from 'react';
import NewBill from './bills/new_bill_container'
import {withRouter} from 'react-router';

class MainHeader extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    if (!this.props.bills){
      if(this.props.friend){
        return <div className='no-bills main-header'>
          {`You are all settled up with ${this.props.friend.name}`} <NewBill friend={this.props.friend}/>
        </div>
      } else{
        return <div className='no-bills main-header'>
          You are all settled up <NewBill />
        </div>
      }
    }else{
      if(this.props.friend){
        return <div className='bills main-header'>
          {`Your bills with ${this.props.friend.name}`} <NewBill friend={this.props.friend}/>
        </div>
      } else{
        return <div className='bills main-header'>
          All Bills <NewBill />
        </div>
    }
  }
}
}


export default withRouter(MainHeader);
