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
  - Notes index/bills
  - accepts `user_owe_id` and `user_pay_id` query param to get friends balances
- `POST /api/bills`
  - accepts `user_owe_id`, `user_pay_id`, `owed`, `total` params
- `GET /api/bill/:id`
- `PATCH /api/bill/:id`
- `DELETE /api/bill/:id`

### Comments

- `POST /api/bills/:id/comments`
- `DELETE /api/bills/:id/comments/:id`
- `PATCH /api/bills/:id/comments/:id`
- `GET /api/bills/:id/comments`

### Friends

- all accept `user_id`
- `GET /api/friends`
- `POST /api/friends`
- `DELETE /api/friends/:id`
  - unfriending (unclear about importance of this), id would be primary in friends table
- `GET /api/friends/:id`
