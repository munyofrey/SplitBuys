
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



export const fetchFriendBills = (friend_id, success, error) => (
  $.ajax({
    url: `api/friends/${friend_id}`,
    success,
    error
  })
)
