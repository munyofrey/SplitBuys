import React from 'react';



class CommentComponent extends React.Component{
  constructor(props){
    super(props)
  }

  deleteComment(comment_id){
    this.props.deleteComment(comment_id)
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
        <input placeholder='Leave a message'></input>
        <input type="submit" className='entry-submit button' value="Submit" />
      </form>
    </div>)
  }

}

export default CommentComponent;
