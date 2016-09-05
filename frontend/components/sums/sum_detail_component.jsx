import React from 'react';
import { Link } from 'react-router';


const SumDetail = ({sum}) => (
  <li>
    <Link to={`friends/${sum.id}`}>{sum.name}</Link>
    <div>{`$ ${sum.sum}`}</div>
  </li>
)

export default SumDetail
