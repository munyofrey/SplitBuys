import React from 'react';
import BillListContainer from './bills/bill_list_component_container';
import UserSearchContainer from './users/user_search_container';

const Landing = () => (
  <div className='body-under-header'>
    <div className='sidebar'>
      <div className='friend-search-container'>
        <UserSearchContainer />
      </div>
    </div>
    <BillListContainer />
  </div>
);

export default Landing;
