import React from 'react';
import { Link } from 'react-router';


const SumDetail = ({sum, friend}) => (
  sum ?
  <li >
    <Link to={`/friends/${friend.id}`} className='link-users'>{friend.name}</Link>
    <div className='sum-users'>{`$ ${sum}`}</div>
  </li>
  : <li></li>
)

export default SumDetail
