import React from 'react';
import { Link } from 'react-router';


const SumDetail = ({sum}) => (
  <li>
    <Link to={`friends/${sum.id}`} className='link-users'>{sum.name}</Link>
    <div className='sum-users'>{`$ ${sum.sum}`}</div>
  </li>
)

export default SumDetail
