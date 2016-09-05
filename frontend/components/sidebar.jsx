import React from 'react';
import UserSearchContainer from './users/user_search_container'
import { Link } from 'react-router';


const Sidebar = () => (
  <div className='sidebar'>
    <div className='friend-search-container'>

      <UserSearchContainer />
    <Link to='/totals'>Totals</Link>
      <Link to='/landing'>All Bills</Link>
    </div>
  </div>
)

export default Sidebar;
