# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users/:id`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Bills

- `GET /api/bills`
  - bills index
- `POST /api/bills`
  - accepts `user_owe_id`, `user_pay_id`, `owed`, `total` params
- `GET /api/bill/:id`
- `PATCH /api/bill/:id`
- `DELETE /api/bill/:id`

### All Bills

-`GET api/allsums` - for the 


### Comments

- `POST /api/bills/:id/comments`
- `DELETE /api/bills/:id/comments/:id`
- `PATCH /api/bills/:id/comments/:id`
- `GET /api/bills/:id/comments`

### Friends

- all accept `user_id`
- `GET /api/friends`
- `GET /api/friends/:id`  this is for getting friend's history

### Requests
- all accept `user_id`
- `GET /api/requests`
- `DELETE /api/requests/:id`
- `GET /api/requests/:id`
