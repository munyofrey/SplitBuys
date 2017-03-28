import React from 'react';
import { Link } from 'react-router';
import UserSearchContainer from '../users/user_search_container';
import UserTimes from 'react-icons/lib/fa/trash';
import UserPlus from 'react-icons/lib/fa/user-plus';
import Users from 'react-icons/lib/fa/user'



class FriendComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      listElements: false,
      user: {},
    }
    this.acceptRequest = this.acceptRequest.bind(this);
  }




  acceptRequest(user){
    const friend = {friend: {
      user_one_id: this.props.currentUser.id,
      user_two_id: user.id
    }}
    this.props.createFriend(friend)
  }


  componentDidMount(){
    this.props.requestFriends()
  }


handleRequest(){
  const friend = {friend: {
    user_one_id: this.props.currentUser.id,
    user_two_id: this.state.user.id
  }}
  this.props.createFriend(friend);
}


  render(){
    return(
      <div className='friends-container'>

        { this.props.requested.length === 0 ?  "" : <div className='users-friend-requests'>
          <h5 className='friend-header'>You have friend Requests!</h5>
          <ul >
            {this.props.requested.map(friend =>
              (<li key={`friendlist${friend.id}`}><div className='request-holder'>
                <div>{friend.name}</div>
                  <div className='small-button-holder'><div
                    className='small-button'
                    onClick={this.acceptRequest.bind(this, friend)
                    }><UserPlus className='user-plus'/></div>
                    <div
                      className='small-button'
                      onClick={this.props.deleteFriend.bind(this, friend.id)
                      }><UserTimes className='user-times'/></div></div></div></li>))}
          </ul>
        </div>}
        <div className='current-friends-list'>
          <h5 className='friend-header'>Friends</h5>
          <ul>
            {this.props.friends.map(friend =>
              (<li key={`friendlist${friend.id}`}><Users className='user-icon'/><Link className='friend-nav-link' to={`/friends/${friend.id}`}>{friend.name}</Link></li>)
            )}</ul>
            <ul>
            <h5 className='friend-header'>Pending Requests</h5>
              {this.props.pending.map(friend => (<li key={`friendlist${friend.id}`} className='pending'>{friend.name}
                </li>))}
          </ul>
        </div>

        <UserSearchContainer />

      </div>
    )
  }


}


export default FriendComponent;
