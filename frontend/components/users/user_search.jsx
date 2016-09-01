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
    this.props.users.forEach(user => {
      if (user.name.slice(0, searchInput.length).toLowerCase() === searchInput.toLowerCase()){matches.push(user)}
    })
    return matches
  }

  selectName(event){
    let name = event.currentTarget.innerText
    this.setState({searchInput: name})
  }



  render(){
    let matches = this.matches();
    let matchers;
    if (matches){ matchers = (<ul className='all-users'>{matches.map(user => <li key={`${user.name}${user.id}`} onClick={this.selectName}>{user.name}</li>)}</ul>);
       if (matches.length === 0){matchers = <ul className='all-users'><li key={`nomatches`}>No matches!</li></ul>}}
    return(
      <div className='user-search-container'>
        <div className='header-block-fix'></div>
          <p>User search for friends(in time)</p>
        <input onChange={this.handleSubmit} value={this.state.searchInput}/>
        {matchers}
      </div>
    )
  }


}

export default UserSearch;
