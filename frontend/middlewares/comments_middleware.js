import { receiveComment, commentActions } from '../actions/comment_actions';
import { createComment, deleteComment } from '../util/api_comments_util';

const CommentsMiddleware = ({ getState, dispatch }) => next => action => {
  const successCB = comments => dispatch(receiveComment(comments))
  switch (action.type) {
    case commentActions.CREATE_COMMENT:
      createComment(action.comment, successCB, errors => console.log(errors))
      return next(action)
    case commentActions.DELETE_COMMENT:
      deleteComment(action.comment_id, successCB, () => console.log('oh no!'))
      return next(action)
    default: return next(action)

  }
}

export default CommentsMiddleware;
