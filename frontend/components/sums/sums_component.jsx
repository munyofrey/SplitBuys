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
          <div className='sums-container'>
          <div className='sums-user-is-owed'>
            <h5 className='sums'>You Are Owed</h5>
            <ul className='sums-is-owed'>
              {this.props.sums[1].map(sum => <SumDetail sum={sum}/>)}
            </ul>
          </div>
          <div className='sums-divider'/>
          <div className='sums-user-owes'>
            <h5 className='sums'>You Owe</h5>
            <ul className='sums-owes'>
              {this.props.sums[0].map(sum => <SumDetail key={`${sum.id}${sum.name}`} sum={sum}/>)}
            </ul>
          </div>
        </div>

        </div>
    </div>
    )}
}

export default SumsComponent;
