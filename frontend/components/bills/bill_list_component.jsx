import React from 'react';
// import billItemContainer from './item_bill_container'


class billList extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(<div>
      <h1>hi</h1>
      <ul>{this.props.requestBills}</ul>
      </div>
    )
  }


}

// export default billList;
