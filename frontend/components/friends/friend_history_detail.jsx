import React from 'react';
import Sidebar from '../sidebar';
import BillListContainer from '../bills/bill_list_component_container';
import SearchIcon from 'react-icons/lib/fa/search'

class FriendHistoryDetail extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      path: this.props.location.pathname.split(/\/\w*\/(\d*)/)[1]
    }
  }

  componentDidMount(){
    this.props.requestFriendHistory(this.state.path)
  }

  componentWillReceiveProps(nextProps, nextState){
    this.props.requestFriendHistory(nextProps.routeParams.friend_id);
  }


  render() {
    return(
      <div>
        <div className='header-block-fix'/>
        <div className='body-under-header'>
          <Sidebar/>
          <BillListContainer path={this.props.location.pathname}/>
        </ div>
      </ div>
  )}
}

export default FriendHistoryDetail;
