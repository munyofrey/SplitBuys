class UpdateUsersTableAddColumn < ActiveRecord::Migration
  def change
    add_column :users, :session_token, :string, null:false, unique:true
  end
end
