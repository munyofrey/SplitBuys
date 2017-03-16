import { connect } from 'react-redux';
import CommentComponent from './comment_component';
import { createComment, deleteComment, requestComments } from '../../actions/comment_actions';
import { values, merge } from 'lodash';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  comments: values(ownProps.bill.comments),
  users: merge(state.friends.friends, {[state.session.currentUser.id]: state.session.currentUser})
})

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment)),
  deleteComment: comment_id => dispatch(deleteComment(comment_id))
})


export default connect(mapStateToProps, mapDispatchToProps)(CommentComponent)
