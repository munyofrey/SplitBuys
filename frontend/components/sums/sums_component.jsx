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
            <div className='header'>
              <h5 className='sums left'>You Are Owed</h5>
              <h5 className='sums right'>You Owe</h5>
            </div>

            <div className="sum-detail-container">
            <ul className='sums-is-owed'>
              {this.props.friends.map(friend => (
                this.props.sums[friend.id] <= 0 || isNaN(this.props.sums[friend.id]) ? "" :
                  <SumDetail  sum={this.props.sums[friend.id]} friend={friend}/>
              ))}
            </ul>



            <ul className='sums-owes'>
              {this.props.friends.map(friend => (
                this.props.sums[friend.id] >= 0 || isNaN(this.props.sums[friend.id]) ? "" :
                  <SumDetail  sum={- this.props.sums[friend.id]} friend={friend}/>
              ))}
            </ul>
          </div>
        </div>

        </div>
    </div>
    )}
}

export default SumsComponent;
