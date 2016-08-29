# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## transactions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_pay_id | integer   | not null, indexed, foreign key
user_owe_id | integer   | not null, indexed, foreign key
date        | date      | not null
owed        | float     | not null
total       | float     | not null

## comments
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
user_id       | integer   | not null, foreign key (references users), indexed
bill_id       | integer   | not null, foreign key (references transaction)
body          | text      | not null


## friends
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_one_id | integer   | not null, foreign key, indexed
user_two_id | integer   | not null, foreign key, indexed

## requests
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_one_id | integer   | not null, foreign key, indexed
user_two_id | integer   | not null, foreign key, indexed
finished    | boolean   | not null, default false
