import React from 'react';
import Sidebar from '../sidebar';
import SumDetail from './sum_detail_component'


class SumsComponent extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.requestSums()
  }


  render(){
    return(
      <div>
        <div className='header-block-fix'/>
        <div className='body-under-header'>
          <Sidebar />
          <ul>
            {this.props.sums[1].map(sum => <SumDetail sum={sum}/>)}
          </ul>
          <ul>
            {this.props.sums[0].map(sum => <SumDetail sum={sum}/>)}
          </ul>
        </div>
    </div>
    )}
}

export default SumsComponent;
