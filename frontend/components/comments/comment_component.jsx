import React from 'react';



class CommentComponent extends React.Component{
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateBody = this.updateBody.bind(this)
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

  render(){
    return(<div>
      <ul className='comments-list'>
        {this.props.bill.comments.map(comment =>
          <li><div className='kill-button'
                    onClick={this.deleteComment.bind(this, comment.id)}>x</div>
                  <div className='comment body'>{comment.name} {comment.body}</div></li>)}
      </ul>
      <form onSubmit={this.handleSubmit} className="new-bill-form">
        <input
          placeholder='Leave a message'
          value={this.state.body}
          onChange={this.updateBody}></input>
        <input type="submit" className='entry-submit button' value="Submit" />
      </form>
    </div>)
  }

}

export default CommentComponent;
