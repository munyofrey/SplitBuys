import React from 'react';
import BillListContainer from './bills/bill_list_component_container';

import Sidebar from './sidebar'

const Landing = () => (
  <div>
  <div className='header-block-fix'/>  
  <div className='body-under-header'>
    <Sidebar />
    <BillListContainer />
  </div>
</div>
);

export default Landing;
