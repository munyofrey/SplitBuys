import React from 'react';
import Search from 'react-icons/lib/fa/beer';
import Modal from 'react-modal';

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



class UserSearch extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      user: {},
      searchInput: '',
      modalIsOpen: false
    }
    this.selectName = this.selectName.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.changeUnentered = this.changeUnentered.bind(this);
    this.handleRequest = this.handleRequest.bind(this);
  }

  closeModal(){
    this.setState({
      modalIsOpen: false,
      user:{}
    })
  }

  selectUser(user){
    this.setState({
      user: user,
      modalIsOpen:true
    })
  }

  handleRequest(){
    const friend = {friend: {
      user_one_id: this.props.currentUser.id,
      user_two_id: this.state.user.id
    }}
    this.props.createFriend(friend);
    this.closeModal();
    this.setState({searchInput: ""});
    this.props.receiveUsers();
    this.changeUnentered();
  }

  changeUnentered(){
    this.setState({
      user: {}
    })
  }

  handleChange(event){
    this.changeUnentered();
    event.currentTarget.value.length > 0 ? this.props.requestUsers(event.currentTarget.value) : this.props.receiveUsers();
    this.setState({searchInput: event.currentTarget.value});
  }

  selectName(user){
    this.setState({searchInput: user.name});
    this.selectUser(user);
  }



  render(){
      return(
        <div className='user-search-container'>
            <div className='find-friend'>
              <h5>Find new friends!</ h5>
              </div>

          <form>
          <input onInput={this.handleChange}
            value={this.state.searchInput}
            className='user-search'
            placeholder='Find friends' />
          {this.props.users.length > 0 ? <ul className='all-users'>{this.props.users.map(user =>
              <li key={`${user.name}${user.id}`}
                onClick={this.selectName.bind(this, user)}>{user.name} </li> )}
          </ul> : ""}
        </form>



          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles}>
            <div className='accept-friend-modal'>
              <button className='kill-button'onClick={this.closeModal}>x</button>
              <h5>Would you like to send {this.state.user.name} a friend Request?</h5>
              <div className='accept-friend-modal button' onClick={this.handleRequest}>Of course!</div>
            </div>
          </Modal>

      </ div>)
  }


}

export default UserSearch;
