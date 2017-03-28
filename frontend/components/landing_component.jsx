import React from 'react';
import BillListContainer from './bills/bill_list_component_container';

import Sidebar from './sidebar'

class Landing extends React.Component{
  constructor(props){
    super(props)
  }


  render(){
    return(
    <div>
    <div className='header-block-fix'/>
    <div className='body-under-header'>
      <Sidebar />
      <BillListContainer path={this.props.location.pathname} />
    </div>
  </div>
  )};
}
export default Landing;
