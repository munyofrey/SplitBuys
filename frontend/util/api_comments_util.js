
export const createComment = (comment, success, error) => (
  $.ajax({
    url: `api/comments`,
    success,
    error,
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
