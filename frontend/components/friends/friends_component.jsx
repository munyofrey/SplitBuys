import React from 'react';
import { Link } from 'react-router';

class FriendComponent extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.requestFriends()
  }

  render(){
    return(
      <div className='friends-container'>

        <div className='users-friend-requests'>
          <h5 className='friend-header'>You have friend Requests!</h5>
          <ul>
            {this.props.friends[2].map(friend => (<li>{friend.name}</li>))}
          </ul>
        </div>
        <div className='current-friends-list'>
          <h5 className='friend-header'>Friends</h5>
          <ul>
            {this.props.friends[0].map(friend =>
              (<li><Link to={`friends/${friend.id}`}>{friend.name}</Link></li>)
            )}
          </ul>
        </div>

        <div className='friend-pending-requests'>
          <h5 className='friend-header'>You are awaiting responses from the following users</h5>
          <ul>
            {this.props.friends[1].map(friend => (friend.name))}
          </ul>
        </div>

      </div>
    )
  }


}


export default FriendComponent;
