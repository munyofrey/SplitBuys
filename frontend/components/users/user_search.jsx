import React from 'react';
import Search from 'react-icons/lib/fa/beer'


class UserSearch extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchInput: ''
    }
    this.selectName = this.selectName.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.matches = this.matches.bind(this);

  }

  handleChange(event){
    this.props.changeUnentered();
    event.currentTarget.value.length > 0 ? this.props.requestUsers(event.currentTarget.value) : this.props.receiveUsers();
    this.setState({searchInput: event.currentTarget.value});
  }

  selectName(user){
    let name = event.currentTarget.innerText
    this.setState({searchInput: user.name})
    this.props.selectUser(user)
  }



  render(){
      return(
        <div className='user-search-container'>
          <input onInput={this.handleChange}
            value={this.state.searchInput}
            className='user-search'
            placeholder='Find friends' />
          <ul className='all-users'>{this.props.users.map(user =>
              <li key={`${user.name}${user.id}`}
                onClick={this.selectName.bind(this, user)}>{user.name} </li> )}
          </ul>
      </ div>)
  }


}

export default UserSearch;
