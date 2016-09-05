import React from 'react';
import UserSearchContainer from './users/user_search_container';
import { Link } from 'react-router';
import FriendContainer from './friends/friend_container';

const Sidebar = () => (
  <div className='sidebar'>
    <div className='sidebar-nav'>
      <Link to='/totals'>Totals</Link>
      <Link to='/landing'>All Bills</Link>
    </div>
    <FriendContainer />
  
  </div>
)

export default Sidebar;
