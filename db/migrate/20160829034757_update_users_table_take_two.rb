class UpdateUsersTableTakeTwo < ActiveRecord::Migration
  def change
    remove_column :users, :sesson_token
  end
end
