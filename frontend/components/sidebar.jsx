import React from 'react';
import UserSearchContainer from './users/user_search_container'
import { Link } from 'react-router';


const Sidebar = () => (
  <div className='sidebar'>
    <div className='sidebar-nav'>
      <Link to='/totals'>Totals</Link>
      <Link to='/landing'>All Bills</Link>
    </div>
    <div className='friend-search-container'>
      I DON'T WORK YET
      <UserSearchContainer />
    </div>
  </div>
)

export default Sidebar;
