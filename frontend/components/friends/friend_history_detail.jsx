import React from 'react';
import Sidebar from '../sidebar';
import BillListContainer from '../bills/bill_list_component_container';

class FriendHistoryDetail extends React.Component{

  constructor(props){
    super(props)
  }

  componentDidMount(){
  }


  render() {
    return(
      <div>
        <div className='header-block-fix'/>
        <div className='body-under-header'>
          <Sidebar/>
          <div>
            <BillListContainer path={this.props.location.pathname}/>
          </div>
        </ div>
      </ div>
  )}
}

export default FriendHistoryDetail;
