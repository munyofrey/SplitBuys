import React from 'react';
import { hashHistory } from 'react-router';


const SumDetail = ({sum, friend}) => (
  sum ?
  <li onClick={ ()=> hashHistory.push(`/friends/${friend.id}`)}>
    <div>{friend.name}</div>
  <span className='sum-users'>{`$${parseFloat(sum).toFixed(2)}`}</span>
  </li>
  : <li/>
)

export default SumDetail
