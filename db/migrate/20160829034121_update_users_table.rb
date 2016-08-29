class UpdateUsersTable < ActiveRecord::Migration
  def change
    remove_column :users, :sesson_token
    add_column :users, :session_token, :string
  end
end
