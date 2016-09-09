# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `GET /api/users`
- `GET /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Bills

- `GET /api/bills`
  - bills index
- `POST /api/bills`
  - accepts `user_owe_id`, `user_pay_id`, `owed`, `total` params
- `GET /api/bill/:id`
- `PATCH /api/bill/:id`
- `DELETE /api/bill/:id`

### All Bills

-`GET api/sums` - for the sum owed


### Comments

- `POST /api/comments`
- `GET /api/comments/:id`

### Friends

- `GET /api/friends`
- `GET /api/friends/:id`  this is for getting friend's history
- `POST /api/friends`
- `DELETE /api/friends/:id` - for deleting friend requests
