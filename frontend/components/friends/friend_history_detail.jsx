import React from 'react';
import Sidebar from '../sidebar';
import BillListContainer from '../bills/bill_list_component_container';

class FriendHistoryDetail extends React.Component{

  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.requestFriendHistory()
  }


  render() {
    return(
      <div>
        <div className='header-block-fix'/>
        <div className='body-under-header'>
          <Sidebar/>
          <div>
            <h2>I'm a friend's transaction history page!</h2>
            <BillListContainer path={this.props.location.pathname}/>
          </div>
        </ div>
      </ div>
  )}
}

export default FriendHistoryDetail;
