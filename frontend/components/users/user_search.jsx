import React from 'react';

class UserSearch extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchInput: ''
    }
    this.selectName = this.selectName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.matches = this.matches.bind(this)
  }

  handleSubmit(event){
    this.setState({searchInput: event.currentTarget.value})
  }

  componentDidMount(){
    this.props.requestAllUsers()
  }

  matches(){
    let matches = []
    let users = this.props.users
    let searchInput = this.state.searchInput
    if(searchInput.length === 0){return null}
    return this.props.users.filter(user => {
      return (user.name.slice(0, searchInput.length).toLowerCase() === searchInput.toLowerCase()
            && !(this.props.userOption === user.name))
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
        <div className='header-block-fix'></div>
        <input onChange={this.handleSubmit} value={this.state.searchInput}/>
        <ul className='all-users'>{matchers}</ul>
      </div>
    )
  }


}

export default UserSearch;
