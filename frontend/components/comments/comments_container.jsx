import { connect } from 'react-router';
import CommentComponent from './comment_component';
import { createComment, deleteComment, requestComments } from '../../actions/comment_actions';

const mapStateToProps = state => ({
  comments: this.bills.comments
})

const mapDispatchToProps = dispatch => ({
  createComment = comment => dispatch(createComment(comment)),
  deleteComment = comment_id => dispatch(deleteComment(comment_id)),
  requestComments = bill_id => dispatch(requestComments(bill_id))
})


export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer)
