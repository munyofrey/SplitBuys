import React from 'react';
import { hashHistory } from 'react-router';


const SumDetail = ({sum, friend}) => (
  sum ?
  <li onClick={ ()=> hashHistory.push(`/friends/${friend.id}`)}>
    <div>{friend.name}</div>
  <span className='sum-users'>{`$${sum}`}</span>
  </li>
  : <li/>
)

export default SumDetail
