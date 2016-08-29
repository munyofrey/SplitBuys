
export const signup = (user, success, error) => {
  $.ajax({
  method:'POST',
  success,
  error,
  data: user,
  url: 'api/users' })
}

export const login = (user, success, error) => {
  $.ajax({
  method:'POST',
  success,
  error,
  data: user,
  url: 'api/session' })
}

export const logout = (success, error) => {
  $.ajax({method:'DELETE',
  success,
  error,
  url: 'api/session' })
}
