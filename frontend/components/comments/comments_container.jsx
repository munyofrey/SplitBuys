import { connect } from 'react-redux';
import CommentComponent from './comment_component';
import { createComment, deleteComment, requestComments } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  comments: ownProps.bill.comments
})

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment)),
  deleteComment: comment_id => dispatch(deleteComment(comment_id))
})


export default connect(mapStateToProps, mapDispatchToProps)(CommentComponent)
