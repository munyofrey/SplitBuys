export const fetchUsers = (queryParams, success, error) => {
  $.ajax({
    url: 'api/users',
    data: { queryParams },
    success,
    error
  })
}
