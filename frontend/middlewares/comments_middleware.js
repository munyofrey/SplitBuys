import { receiveComments, commentActions } from '../actions/comment_actions';
import { fetchAllComments, createComment, deleteComment } from '../util/api_comments_util';

const CommentsMiddleware = ({ getState, dispatch }) => next => action => {
  const successCB = comments => dispatch(receiveComments(comments))
  switch (action.type) {
    case commentActions.REQUEST_COMMENTS:
      fetchAllComments(action.bill_id, successCB, errors => console.log(errors))
      return next(action)
    case commentActions.CREATE_COMMENT:
      createComment(action.comment, successCB, errors => console.log(errors))
      return next(action)
    case commentActions.DELETE_COMMENT:
      deleteComment(action.comment_id, () => console.log('success'), () => console.log('oh no!'))
      return next(action)
    default: return next(action)

  }
}

export default CommentsMiddleware;
