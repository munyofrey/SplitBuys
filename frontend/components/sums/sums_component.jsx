import React from 'react';
import UserSearchContainer from '../users/user_search_container';

class SumsComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      owedToUser: [],
      owedByUser: []
    }
  }

  componentDidMount(){
    this.props.requestSums()

  }

  filterTotals(successCB){
    let owedTo = [];
    let owedBy = [];
    this.sums.forEach(billObj => {
      if (billObj.sum > 0){
        owedTo.push(billObj)
      }else if (billObj < 0) {
        owedBy.push(billObj)
      }
    })
    this.setState({
      owedToUser: owedTo,
      owedByUser: owedBy
    }, successCB)
  }

  render(){ return(
    <div className='body-under-header'>
      <div className='sidebar'>
        <div className='friend-search-container'>
          <UserSearchContainer />
        </div>
      </div>
      <ul>
        {this.props.sums.map(bill => JSON.stringify(bill))}
      </ul>
    </div>
  )}
}

export default SumsComponent;
