# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160905174758) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bills", force: :cascade do |t|
    t.date     "date",        null: false
    t.string   "description", null: false
    t.integer  "user_pay_id", null: false
    t.integer  "user_owe_id", null: false
    t.float    "owed",        null: false
    t.float    "total",       null: false
    t.text     "note"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "bills", ["user_owe_id"], name: "index_bills_on_user_owe_id", using: :btree
  add_index "bills", ["user_pay_id"], name: "index_bills_on_user_pay_id", using: :btree

  create_table "friends", force: :cascade do |t|
    t.integer  "user_one_id",                null: false
    t.integer  "user_two_id",                null: false
    t.boolean  "pending",     default: true, null: false
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
  end

  add_index "friends", ["user_one_id"], name: "index_friends_on_user_one_id", using: :btree
  add_index "friends", ["user_two_id"], name: "index_friends_on_user_two_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "name",            null: false
    t.string   "password_digest", null: false
    t.string   "email",           null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "session_token",   null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", using: :btree
  add_index "users", ["password_digest"], name: "index_users_on_password_digest", using: :btree

end
