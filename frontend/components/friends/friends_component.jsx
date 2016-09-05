import React from 'react';
import { Link } from 'react-router';
import UserSearchContainer from '../users/user_search_container'


class FriendComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      listElements: false
    }
    this.changeUnentered = this.changeUnentered.bind(this);
    this.selectUser = this.selectUser.bind(this)
  }

  componentDidMount(){
    this.props.requestFriends()
    this.props.requestAllUsers()
  }

  changeUnentered(){
    console.log('hit!');
    this.setState({
      listElements:true
    })
  }

  selectUser(user){
    console.log('I clicked on a user');
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
        <div className='friend-search-container'>
          <UserSearchContainer
            selectUser={this.selectUser}
            users={this.props.users}
            listElements={this.state.listElements}
            changeUnentered={this.changeUnentered}/>
        </div>
      </div>
    )
  }


}


export default FriendComponent;
