import React from 'react';

class UserSearch extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchInput: ''
    }
    this.selectName = this.selectName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.matches = this.matches.bind(this);

  }

  handleSubmit(event){
    this.props.changeUnentered()
    this.setState({searchInput: event.currentTarget.value})
  }


  matches(){
    let matches = [];
    let users = this.props.users;
    let searchInput = this.state.searchInput;
    if(searchInput.length === 0){return null}
    return this.props.users.filter(user => {
      return (user.name.slice(0, searchInput.length).toLowerCase() === searchInput.toLowerCase())
    })
  }

  selectName(user){
    let name = event.currentTarget.innerText
    this.setState({searchInput: user.name})
    this.props.selectUser(user)
  }



  render(){
      let matches = this.matches()
      let matchers;
      if (matches){
        matchers = matches.map(user =>
          <li key={`${user.name}${user.id}`} onClick={this.selectName.bind(this, user)}>{user.name}</li>)}
      return(
        <div className='user-search-container'>
          <input onChange={this.handleSubmit} value={this.state.searchInput} />
          {(this.props.listElements) ? <ul className='all-users'>{matchers}</ul> : ''}
        </div>)
  }


}

export default UserSearch;
