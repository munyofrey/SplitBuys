
export const createComment = (comment, success, error) => (
  $.ajax({
    url: `api/comments`,
    success,
    error,
    data: comment,
    method: 'POST'
  })
)

export const deleteComment = (comment_id, success, error) => (
  $.ajax({
    url: `api/comments/${comment_id}`,
    success,
    error,
    method: 'DELETE'
  })
)
