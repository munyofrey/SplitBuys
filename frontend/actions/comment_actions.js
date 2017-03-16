export const commentActions = {
  RECEIVE_COMMENT: 'RECEIVE_COMMENT',
  DELETE_COMMENT: 'DELETE_COMMENT',
  CREATE_COMMENT: 'CREATE_COMMENT',
  REMOVE_COMMENT: 'REMOVE_COMMENT'
}

export const receiveComment = comment => ({
  type: commentActions.RECEIVE_COMMENT,
  comment
})


export const deleteComment = comment => ({
  type: commentActions.DELETE_COMMENT,
  comment
})

export const removeComment = comment => ({
  type: commentActions.REMOVE_COMMENT,
  comment
})

export const createComment = comment => ({
  type: commentActions.CREATE_COMMENT,
  comment
})
