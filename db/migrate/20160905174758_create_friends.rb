class CreateFriends < ActiveRecord::Migration
  def change
    create_table :friends do |t|
      t.integer :user_one_id, null:false, index:true
      t.integer :user_two_id, null:false, index:true
      t.boolean :pending, null:false, default: true

      t.timestamps null: false
    end
  end
end
