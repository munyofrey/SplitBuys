import React from 'react';
import { Link } from 'react-router';
import UserSearchContainer from '../users/user_search_container';
import Modal from 'react-modal';
import UserTimes from 'react-icons/lib/fa/trash';
import UserPlus from 'react-icons/lib/fa/user-plus';
import Users from 'react-icons/lib/fa/user'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


class FriendComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      listElements: false,
      user: {},
      modalIsOpen: false,
    }
    this.changeUnentered = this.changeUnentered.bind(this);
    this.selectUser = this.selectUser.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleRequest = this.handleRequest.bind(this);
    this.acceptRequest = this.acceptRequest.bind(this);
  }


  closeModal(){
    this.setState({
      modalIsOpen: false,
      user:{}
    })
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
    this.props.requestAllUsers()
  }

  changeUnentered(){
    this.setState({
      listElements:true,
      user: {}
    })
  }

handleRequest(){
  const friend = {friend: {
    user_one_id: this.props.currentUser.id,
    user_two_id: this.state.user.id
  }}
  this.props.createFriend(friend);
  this.closeModal();
}


  selectUser(user){
    this.setState({
      user: user,
      modalIsOpen:true,
      listElements:false
    })
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
            )}

              {this.props.pending.map(friend => (<li key={`friendlist${friend.id}`}><div className='request-holder'>{friend.name}
                <strong> pending </strong></ div></li>))}
          </ul>
        </div>


        <div className='friend-search-container'>
          <h5>Find new friends!</ h5>
          <UserSearchContainer
            selectUser={this.selectUser}
            users={this.props.users}
            listElements={this.state.listElements}
            changeUnentered={this.changeUnentered}/>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}>
          <div className='accept-friend-modal'>
            <button className='kill-button'onClick={this.closeModal}>x</button>
            <h5>Would you like to send {this.state.user.name} a friend Request?</h5>
            <div className='accept-friend-modal button' onClick={this.handleRequest}>Of course!</div>
          </div>
        </Modal>

      </div>
    )
  }


}


export default FriendComponent;
