import React from 'react';
import UserSearchContainer from './users/user_search_container';
import { Link } from 'react-router';
import FriendContainer from './friends/friend_container';
import Calculator from 'react-icons/lib/fa/balance-scale';
import List from 'react-icons/lib/fa/list-alt'

const Sidebar = () => (
  <div className='sidebar'>
    <div className='sidebar-nav'>
      <Link to='/totals'> <Calculator className='calc'/>Totals</Link>
      <Link to='/landing'><List className='calc'/>All Bills</Link>
    </div>
    <FriendContainer />

  </div>
)

export default Sidebar;
