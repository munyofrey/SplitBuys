import React from 'react';
import CommentIcon from 'react-icons/lib/fa/commenting'


class CommentComponent extends React.Component{
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateBody = this.updateBody.bind(this)
    this.killButton = this.killButton.bind(this)
    this.state ={
      bill_id: this.props.bill.id,
      user_id: this.props.currentUser.id,
      body: ""
    }
  }

  deleteComment(comment_id){
    this.props.deleteComment(comment_id)
  }

  updateBody(event){
    this.setState({
      body: event.currentTarget.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.createComment({comment: this.state})
    this.setState({body: ''})
  }

  killButton(comment){
    if (this.state.user_id == comment.user_id){
      return(<div className='kill-button'
                onClick={this.deleteComment.bind(this, comment.id)}>x</div>)
    }else{return("")}
  }


  render(){
    return(<div>
      <ul className='comments-list'>
        {this.props.comments.map(comment =>
          <li key={`${comment.id}${comment.body}`}>{this.killButton(comment)}
                  <div className='comment body'><div className='commenter'>{this.props.users[comment.user_id].name}</ div> {comment.body}</div></li>)}
      </ul>
      <form onSubmit={this.handleSubmit} className="new-bill-form">
        <textarea
          placeholder='Leave a message'
          value={this.state.body}
          className='comments-box'
          onChange={this.updateBody}></textarea>
        <input type="submit" className='send button' value="Send" ></input>
      </form>
    </div>)
  }

}

export default CommentComponent;
