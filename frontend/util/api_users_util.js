export const fetchAllUsers = (success, error) => {
  $.ajax({
    url: 'api/users',
    success,
    error
  })
}
