import { receiveComment, commentActions, removeComment } from '../actions/comment_actions';
import { createComment, deleteComment } from '../util/api_comments_util';

const CommentsMiddleware = ({ getState, dispatch }) => next => action => {
  let successCB;
  switch (action.type) {
    case commentActions.CREATE_COMMENT:
      successCB = comment => dispatch(receiveComment(comment));
      createComment(action.comment, successCB, errors => console.log(errors))
      return next(action)
    case commentActions.DELETE_COMMENT:
      successCB = comment => dispatch(removeComment(comment))
      deleteComment(action.comment, successCB, () => console.log('oh no!'))
      return next(action)
    default: return next(action)
  }
}

export default CommentsMiddleware;
