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
      <input placeholder='Leave a message'></input>
    </div>)
  }

}

export default CommentComponent;
