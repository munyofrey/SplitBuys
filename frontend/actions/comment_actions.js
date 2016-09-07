export const commentActions = {
  RECEIVE_COMMENTS: 'RECEIVE_COMMENTS',
  REQUEST_COMMENTS: 'REQUEST_COMMENTS',
  DELETE_COMMENT: 'DELETE_COMMENT',
  CREATE_COMMENT: 'CREATE_COMMENT'
}

export const receiveComments = comments => ({
  type: commentActions.RECEIVE_COMMENTS,
  comments
})

export const requestComments = () => ({
  type: commentActions.REQUEST_COMMENTS
})

export const deleteComment = comment_id => ({
  type: commentActions.DELETE_COMMENT,
  comment_id
})

export const createComment = comment => ({
  type: commentActions.CREATE_COMMENT,
  comment
})
