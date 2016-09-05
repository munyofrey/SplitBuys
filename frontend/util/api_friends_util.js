
export const fetchFriends = (success, error) => (
  $.ajax({
    url:'api/friends',
    method:'get',
    success,
    error
  })
)


export const createFriend = (friend, success, error) => (
  $.ajax({
    url:'api/friends',
    method:'post',
    success,
    data: friend
  })
)
