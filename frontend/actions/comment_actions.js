export const commentActions = {
  RECEIVE_COMMENT: 'RECEIVE_COMMENT',
  DELETE_COMMENT: 'DELETE_COMMENT',
  CREATE_COMMENT: 'CREATE_COMMENT'
}

export const receiveComment = comment => ({
  type: commentActions.RECEIVE_COMMENT,
  comment
})


export const deleteComment = comment_id => ({
  type: commentActions.DELETE_COMMENT,
  comment_id
})

export const createComment = comment => ({
  type: commentActions.CREATE_COMMENT,
  comment
})
